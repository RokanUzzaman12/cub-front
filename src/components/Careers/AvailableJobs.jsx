import React, { useEffect } from "react";
import {
  careerList,
  departmentWiseCareers,
  facultyWiseCareers,
} from "../../stores/careerStore";
import { useStore } from "@nanostores/react";
import {
  fetchCareersAndFillStore,
  fetchDepartmentWiseCareersAndFillStore,
  fetchFacultyWiseCareersAndFillStore,
} from "../../loaders/careersLoader";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
};

// filter out expired jobs (deadline before today). Jobs without deadline are kept
const isExpired = (item) => {
  const d = item.deadline || item.date;
  if (!d) return false;
  const dead = new Date(d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dead.setHours(0, 0, 0, 0);
  return dead < today;
};

const getDaysRemaining = (deadline) => {
  if (!deadline) return null;
  const now = new Date();
  const dl = new Date(deadline);
  if (isNaN(dl)) return null;
  now.setHours(0, 0, 0, 0);
  dl.setHours(0, 0, 0, 0);
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.ceil((dl - now) / msPerDay);
  if (diff > 1) return `${diff} days left`;
  if (diff === 1) return `1 day left`;
  if (diff === 0) return `Deadline today`;
  return `Expired`;
};

const AvailableJobs = ({ departmentSlug = null, facultySlug = null }) => {
  //const AvailableJobs = ({ joblists = [] }) => {
  let jobs = [];
  const Carrers = useStore(careerList);
  const departmentCarrers = useStore(departmentWiseCareers) || [];
  const facultyCarrers = useStore(facultyWiseCareers) || [];
  if (Carrers.length > 0) {
    jobs = Carrers;
  }
  if (departmentCarrers.length > 0) {
    jobs = departmentCarrers;
  }
  if (facultyCarrers.length > 0) {
    jobs = facultyCarrers;
  }
  useEffect(() => {
    if (departmentSlug == null && facultySlug == null) {
      fetchCareersAndFillStore();
    } else {
      if (departmentSlug) {
        fetchDepartmentWiseCareersAndFillStore(departmentSlug);
      }
      if (facultySlug) {
        fetchFacultyWiseCareersAndFillStore(facultySlug);
      }
    }
  }, []);
  return (
    <div className="rts-blog v_3 rts-section-padding">
      <div className="container">
        <div className="row">
          <div className="rts__section--wrapper">
            {
              // filter out expired jobs before showing count and list
            }
            <h2 className="rts-section-title">
              Available Jobs({(jobs || []).filter((j) => !isExpired(j)).length})
            </h2>
          </div>
        </div>
        <div className="row justify-content-md-start justify-content-sm-center g-5">
          {(!jobs || jobs.length === 0) && (
            <div className="col-12">
              <p>No available jobs found.</p>
            </div>
          )}

          {(jobs || [])
            .filter((j) => !isExpired(j))
            .map((item) => (
              <div
                className="col-sm-10 col-md-6 col-lg-6 col-xl-4"
                key={item.id || item.slug || item._id}
              >
                <div className="single-blog">
                  <div className="blog single-blog__content">
                    <div className="blog__meta">
                      <h5 className="blog__title">
                        <a href={`/careers/${item.id || item.slug || ""}`}>
                          {item.title}
                        </a>
                      </h5>

                      <div className="blog__meta--da">
                        <div className="blog-date">
                          <span>
                            <span aria-hidden="true">
                              {" "}
                              <b>Salary :</b>{" "}
                            </span>
                          </span>
                          {item.salary}
                        </div>
                      </div>

                      <div className="blog__meta--da">
                        <div className="blog-author">
                          <span>
                            <span aria-hidden="true">
                              {" "}
                              <b>Exp :</b>{" "}
                            </span>
                          </span>
                          <span>{item.experience_level}</span>
                        </div>
                      </div>

                      <div className="blog__meta--da">
                        <div className="blog-author">
                          <span>
                            <span aria-hidden="true">
                              {" "}
                              <b>Location :</b>{" "}
                            </span>
                          </span>
                          <span>
                            <a href="#">{item.location}</a>
                          </span>
                        </div>
                      </div>

                      <div className="blog__meta--da">
                        <div className="blog-author">
                          <span>
                            <span aria-hidden="true">
                              {" "}
                              <b>Deadline :</b>{" "}
                            </span>
                          </span>
                          <span>
                            <a href="#">
                              {formatDate(item.deadline || item.date)}
                            </a>
                          </span>
                          {(item.deadline || item.date) && (
                            <small
                              style={{
                                marginLeft: 8,
                                color: "var(--rt-primary-1)",
                              }}
                            >
                              {getDaysRemaining(item.deadline || item.date)}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="mt--20">
                        <a
                          href={`/careers/${item.id || item.slug || ""}`}
                          className="rts-theme-btn primary with-arrow lh-100"
                        >
                          View Details{" "}
                          <span>
                            <i className="fa-thin fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style>{`
        .rts-blog.v_3 .single-blog {
          border: 1px solid var(--rt-line);
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          overflow: hidden;
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb {
          overflow: hidden;
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb img {
          width: 100%;
          object-fit: cover;
          transition: var(--transition);
          transform: scale(1);
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb img:hover {
          transform: scale(1.05);
        }
        .rts-blog.v_3 .single-blog__content .blog__meta {
          padding: 25px;
        }
        .rts-blog.v_3 .single-blog__content .blog__meta--da {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-date,
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-author {
          display: flex;
          gap: 8px;
        }
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-date span i,
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-author span i {
          color: var(--rt-primary-1);
        }
      `}</style>
    </div>
  );
};

export default AvailableJobs;
