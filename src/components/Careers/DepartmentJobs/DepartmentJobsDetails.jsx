import { fetchDepartmentWiseCareers } from "../../../api/careers.js";
import { useEffect, useState } from "react";

const DepartmentJobsDetails = ({ department }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      if (!department || !department.slug) return;
      setLoading(true);
      try {
        const res = await fetchDepartmentWiseCareers(department.slug);
        if (mounted) setJobs(res.data || []);
      } catch (err) {
        console.error("Error fetching department careers:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [department?.slug]);

  if (loading) return null;
  if (!jobs || jobs.length === 0) return null;

  return (
    <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
      <a
        href={`/careers/${department.slug}`}
        className="dept-card-link"
        aria-label={`View jobs for ${department.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="single-blog">
          <div className="blog single-blog__content">
            <div
              className="blog__meta"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 className="blog__title" style={{ margin: 0 }}>
                {department.name}
              </h5>
              <div
                style={{
                  minWidth: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: "#2ecc71",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {jobs.length}
              </div>
            </div>
          </div>
        </div>
      </a>

      <style>{`
        .dept-card-link { display: block; }
        .dept-card-link .single-blog { transition: transform 180ms var(--transition), box-shadow 180ms var(--transition); }
        .dept-card-link:hover .single-blog { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.12); }
        .dept-card-link:focus { outline: 2px solid rgba(43, 128, 255, 0.25); outline-offset: 4px; }
      `}</style>
    </div>
  );
};

export default DepartmentJobsDetails;
