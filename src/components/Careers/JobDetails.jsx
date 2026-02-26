import React, { useEffect, useState, useRef } from "react";
import { singleCareer } from "../../stores/careerStore";
import { fetchSingleCareerAndFillStore } from "../../loaders/careersLoader";
import { useStore } from "@nanostores/react";
import { submitJobApplication } from "../../api/jobApplication";

const formatDate = (d) => {
  if (!d) return "-";
  try {
    const dt = new Date(d);
    if (isNaN(dt)) return d;
    return dt.toLocaleDateString();
  } catch {
    return d;
  }
};

const getDaysRemaining = (deadline) => {
  if (!deadline) return "-";
  const now = new Date();
  const dl = new Date(deadline);
  if (isNaN(dl)) return "-";
  now.setHours(0, 0, 0, 0);
  dl.setHours(0, 0, 0, 0);
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.ceil((dl - now) / msPerDay);
  if (diff > 1) return `${diff}`;
  if (diff === 1) return `1`;
  if (diff === 0) return `0`;
  return `-`;
};

const JobDetails = ({ id }) => {
  // If a job prop is provided, render it. Otherwise fetch by id and use store.
  const job = useStore(singleCareer) || {};
  useEffect(() => {
    fetchSingleCareerAndFillStore(id);
  }, [id]);

  const j = job;
  if (!j) return <div className="rts-empty-state">No job selected</div>;

  // sensible fallbacks for fields
  const location = j.location || j.city || "Residential Campus, Savar";
  const department =
    j.department || j.department_name || j.department_title || "N/A";
  const postedOn =
    j.posted_on ||
    j.postedAt ||
    j.posted_date ||
    j.created_at ||
    j.published_at ||
    null;
  const jobType = j.job_type || j.employment_type || j.type || "Regular";
  const experience = j.experience_level || j.experience || j.years || "-";
  const deadline = j.deadline || j.date || null;
  const daysLeft = getDaysRemaining(deadline);

  // modal & form state for Upload CV
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    coverLetter: "",
    cvLink: "",
    attachment: null,
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const uploadButtonRef = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    // clear field-level error as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
    // clear generic submit message
    setSubmitMessage("");
    setSubmitStatus("");
  };

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    setForm((s) => ({ ...s, attachment: file }));
    setErrors((prev) => ({ ...prev, attachment: "" }));
    setSubmitMessage("");
    setSubmitStatus("");
  };

  const isValidEmail = (em) => /\S+@\S+\.\S+/.test(em);
  // Bangladesh phone validation: accept 01XXXXXXXXX or +8801XXXXXXXXX or 8801XXXXXXXXX
  const isValidBangladeshPhone = (p) => {
    if (!p) return false;
    const s = String(p).replace(/[^0-9+]/g, "");
    return /^(?:\+?88)?01[3-9]\d{8}$/.test(s);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");

    // per-field validation
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    else if (!isValidEmail(form.email))
      newErrors.email = "Enter a valid email.";
    if (!form.phone) newErrors.phone = "Phone is required.";
    else if (!isValidBangladeshPhone(form.phone))
      newErrors.phone =
        "Enter a valid Bangladeshi phone (e.g. 01XXXXXXXXX or +8801XXXXXXXXX).";

    // make CV attachment required
    if (!form.attachment) newErrors.attachment = "CV attachment is required.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    // file validation (set field-level error)
    const maxBytes = 5 * 1024 * 1024; // 5MB
    const allowed = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];
    if (form.attachment) {
      if (form.attachment.size > maxBytes) {
        setErrors((prev) => ({
          ...prev,
          attachment: "Attachment too large. Max 5MB allowed.",
        }));
        return;
      }
      const ext = (form.attachment.name || "").split(".").pop().toLowerCase();
      if (!allowed.includes(ext)) {
        setErrors((prev) => ({
          ...prev,
          attachment:
            "Unsupported file type. Allowed: pdf, doc, docx, jpg, png, jpeg.",
        }));
        return;
      }
    }

    // build FormData
    const fd = new FormData();
    fd.append("job_id", j.id || j.slug || id || "");
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("phone", form.phone);
    fd.append("address", form.address || "");
    fd.append("cover_letter", form.coverLetter || "");
    if (form.cvLink) fd.append("cv_link", form.cvLink);
    if (form.attachment) fd.append("attachment", form.attachment);

    setLoading(true);
    try {
      const res = await submitJobApplication(fd);
      setSubmitMessage("Application submitted successfully.");
      setSubmitStatus("success");
      // reset form and close modal
      setTimeout(() => {
        setShowModal(false);
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          coverLetter: "",
          cvLink: "",
          attachment: null,
        });
        setSubmitMessage("");
        setSubmitStatus("");
      }, 1200);
      return res;
    } catch (err) {
      // Try to parse structured validation errors from the API and map them
      // to field-level errors so they appear under the corresponding inputs.
      const rawMsg = err?.message || "Submission failed. Please try again.";
      try {
        const parsed = JSON.parse(rawMsg);
        if (parsed && parsed.errors && typeof parsed.errors === "object") {
          const mapped = {};
          for (const key of Object.keys(parsed.errors)) {
            const v = parsed.errors[key];
            if (Array.isArray(v)) mapped[key] = v.join(" ");
            else mapped[key] = String(v);
          }
          setErrors((prev) => ({ ...prev, ...mapped }));
          setSubmitStatus("error");
          setSubmitMessage(
            parsed.message || "Please fix the highlighted fields."
          );
          return null;
        }
      } catch (e) {
        // not JSON — fall through to default handling
      }

      setSubmitMessage(rawMsg);
      setSubmitStatus("error");
      console.error("submitJobApplication error:", err);
      return null;
    } finally {
      setLoading(false);
      // return focus back to upload button
      try {
        uploadButtonRef.current?.focus();
      } catch (e) {}
    }
  };

  // focus first input when modal opens
  const nameInputRef = useRef(null);
  useEffect(() => {
    if (showModal) {
      setTimeout(() => nameInputRef.current?.focus?.(), 80);
    }
  }, [showModal]);

  return (
    <div className="rts-job-details rts-section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <article className="job-left">
              <h1 className="job-title">{j.title}</h1>

              <div className="job-top-meta">
                <div className="meta-left">
                  <div className="meta-row">
                    <strong>Location:</strong> {location}
                  </div>
                  {/* <div className="meta-row">
                    <strong>Department:</strong> {department}
                  </div> */}
                  <div className="meta-row">
                    <strong>Job Type:</strong> {jobType}
                  </div>
                  <div className="meta-row">
                    <strong>Posted On:</strong>{" "}
                    {formatDate(postedOn || j.created_at || j.date)}
                  </div>
                </div>
                <div className="meta-right">
                  <div className="meta-row">
                    <strong>Experience:</strong> {experience}
                  </div>
                  <div className="meta-row">
                    <strong>Deadline:</strong> {formatDate(deadline)}
                  </div>
                  <div className="meta-row">
                    <strong>Days Left:</strong> {daysLeft}
                  </div>
                </div>
              </div>

              <div className="job-content" style={{ marginTop: 24 }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: j.description || j.short_description || "",
                  }}
                />
              </div>

              <div className="job-cta" style={{ marginTop: 18 }}>
                {j.application_link ? (
                  <a
                    className="rts-theme-btn primary"
                    href={j.application_link}
                  >
                    Apply Now
                  </a>
                ) : j.email ? (
                  <a
                    className="rts-theme-btn primary"
                    href={`mailto:${j.email}`}
                  >
                    Apply via Email
                  </a>
                ) : (
                  <a
                    className="rts-theme-btn primary"
                    href={`/careers/${j.id || j.slug || ""}`}
                  >
                    Apply
                  </a>
                )}

                {j.attachment && (
                  <a
                    className="rts-theme-btn"
                    href={j.attachment}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Attachment
                  </a>
                )}

                <button
                  type="button"
                  className="rts-theme-btn"
                  onClick={() => setShowModal(true)}
                  ref={uploadButtonRef}
                >
                  Upload CV
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>

      <style>{`
        .job-left { background: #fff; padding: 28px; border:1px solid var(--rt-line); border-radius:8px; }
        .job-title { margin: 0 0 18px 0; font-size: 28px; }
        .job-top-meta { display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; }
        .meta-left, .meta-right { min-width: 220px; }
        .meta-row { padding:6px 0; color: #333; }
        .rts-theme-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          padding: 10px 18px;
          border-radius: 6px;
          background: var(--rt-primary-1);
          color: white;
          text-decoration: none;
          border: 0;
          cursor: pointer;
          box-sizing: border-box;
          line-height: 1;
          font-size: 15px;
          font-family: inherit;
          margin: 0; /* reset any UA button margin */
        }
        .rts-theme-btn[disabled] { opacity: 0.6; cursor: not-allowed; }
        .rts-theme-btn.primary { background: var(--rt-primary-1); }
        .rts-theme-btn + .rts-theme-btn { margin-left: 8px; }
  .job-content { border-top:1px solid var(--rt-line); padding-top:18px; margin-top:18px; }
  .job-cta { display: flex; align-items: center; gap: 12px; }
    .field-error { color: #c42b2b; font-size: 13px; margin-top:6px; }
    .cv-grid input[aria-invalid="true"], .cv-grid textarea[aria-invalid="true"] { outline: 1px solid #c42b2b45; }
        @media (max-width: 768px) { .job-top-meta { flex-direction:column; } }
      `}</style>
      {/* Modal for Upload CV */}
      {showModal && (
        <div className="cv-modal-backdrop">
          <div className="cv-modal">
            <div className="cv-modal-header">
              <h4>Upload CV for {j.title}</h4>
            </div>
            <form
              className="cv-form"
              onSubmit={handleSubmit}
              aria-busy={loading}
            >
              {submitStatus === "success" && (
                <div className="submit-success">
                  Application sent successfully.
                </div>
              )}
              <div className="cv-grid">
                <label>
                  Name*
                  <br />
                  <input
                    ref={nameInputRef}
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <div className="field-error">{errors.name}</div>
                  )}
                </label>

                <label>
                  Email*
                  <br />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleInput}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <div className="field-error">{errors.email}</div>
                  )}
                </label>

                <label>
                  Phone*
                  <br />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleInput}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <div className="field-error">{errors.phone}</div>
                  )}
                </label>

                <label style={{ gridColumn: "1 / -1" }}>
                  Address (optional)
                  <br />
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleInput}
                  />
                </label>

                <label style={{ gridColumn: "1 / -1" }}>
                  Cover Letter (optional)
                  <br />
                  <textarea
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleInput}
                    rows={5}
                  />
                </label>

                <label>
                  CV Link (optional)
                  <br />
                  <input
                    name="cvLink"
                    value={form.cvLink}
                    onChange={handleInput}
                  />
                </label>

                <label>
                  CV Attachment*
                  <br />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
                    onChange={handleFile}
                    aria-invalid={!!errors.attachment}
                  />
                  {errors.attachment && (
                    <div className="field-error">{errors.attachment}</div>
                  )}
                </label>
              </div>
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  gap: 8,
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  className="rts-theme-btn"
                  onClick={() => setShowModal(false)}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rts-theme-btn primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Application"}
                </button>
              </div>
              {submitMessage && (
                <div style={{ marginTop: 10 }}>{submitMessage}</div>
              )}
            </form>
          </div>
        </div>
      )}

      <style>{`
        .cv-modal-backdrop {
          position: fixed;
          left: 0; top: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.45);
          display:flex; align-items:center; justify-content:center;
          z-index: 9999;
        }
        .cv-modal {
          position: relative;
          width: 100%; max-width: 820px; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .cv-modal-header { display:flex; justify-content:space-between; align-items:center; }
        .cv-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: transparent;
          border: 0;
          font-size: 22px;
          cursor: pointer;
          line-height: 1;
          padding: 6px;
          border-radius: 6px;
        }
        .cv-grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-top:12px }
        .cv-grid label { display:block; font-size:14px; color: #333 }
        .cv-grid input[type="text"], .cv-grid input[type="email"], .cv-grid input[type="search"], .cv-grid input[type="tel"], .cv-grid textarea { width:100%; padding:8px 10px; border:1px solid #e6e6e6; border-radius:6px }
        .cv-grid textarea { resize:vertical }
  .submit-success { background: #e6ffed; border: 1px solid #b7f5c6; color: #1a7f2a; padding: 10px 12px; border-radius:6px; margin-bottom:12px }
        @media (max-width: 700px) { .cv-grid { grid-template-columns: 1fr } }
      `}</style>
    </div>
  );
};

export default JobDetails;
