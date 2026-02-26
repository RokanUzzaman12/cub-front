const UniversityJobs = ({ jobs, slug }) => {
  const formatDate = (d) => {
    if (!d) return "-";
    try {
      const dt = new Date(d);
      if (isNaN(dt)) return d;
      return dt.toLocaleDateString();
    } catch (e) {
      return d;
    }
  };

  const getDaysRemaining = (deadline) => {
    if (!deadline) return null;
    const now = new Date();
    const dl = new Date(deadline);
    if (isNaN(dl)) return null;
    // normalize to midnight to avoid timezone partial-day issues
    now.setHours(0, 0, 0, 0);
    dl.setHours(0, 0, 0, 0);
    const msPerDay = 24 * 60 * 60 * 1000;
    const diff = Math.ceil((dl - now) / msPerDay);
    if (diff > 1) return `${diff} days left`;
    if (diff === 1) return `1 day left`;
    if (diff === 0) return `Deadline today`;
    return `Expired`;
  };

  // prepare filtered jobs: remove those whose deadline is before today
  const _now = new Date();
  _now.setHours(0, 0, 0, 0);
  const filteredJobs = (jobs || []).filter((j) => {
    const dlStr = j && (j.deadline || j.date);
    if (!dlStr) return true;
    const dl = new Date(dlStr);
    if (isNaN(dl)) return true;
    dl.setHours(0, 0, 0, 0);
    return dl >= _now;
  });

  return (
    <>
      <div className="rts-blog v_3 rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <h2 className="rts-section-title">Available Jobs</h2>
              <div className="rts__section--link">
                <a href={`/careers/all-jobs`} className="rts-nbg-btn btn-arrow">
                  Find All Jobs
                  <span>
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-start justify-content-sm-center g-5">
            {!jobs || jobs.length === 0 || filteredJobs.length === 0 ? (
              <div className="col-12">
                <div
                  className="rts-empty-state text-center"
                  style={{
                    padding: 40,
                    border: "1px solid var(--rt-line)",
                    borderRadius: 6,
                  }}
                >
                  <h4>No jobs found</h4>
                </div>
              </div>
            ) : (
              filteredJobs.slice(0, 4).map((item) => (
                <div
                  className="col-sm-10 col-md-6 col-lg-6 col-xl-4"
                  key={item.id}
                >
                  <div className="single-blog">
                    <div className="blog single-blog__content">
                      <div className="blog__meta">
                        <h5 className="blog__title">
                          <a href={`/careers/${item.id}`}>{item.title}</a>
                        </h5>
                        <div className="blog__meta--da">
                          <div className="blog-date">
                            <span>
                              <span aria-hidden="true">
                                {" "}
                                <b>Salary :</b>
                              </span>
                            </span>
                            <span>{item.salary}</span>
                          </div>
                        </div>
                        <div className="blog__meta--da">
                          <div className="blog-author">
                            <span>
                              <span aria-hidden="true">
                                {" "}
                                <b>Exp :</b>
                              </span>
                            </span>
                            <span>
                              <a href="#">{item.experience_level}</a>
                            </span>
                          </div>
                        </div>
                        <div className="blog__meta--da">
                          <div className="blog-author">
                            <span>
                              <span aria-hidden="true">
                                {" "}
                                <b>Location :</b>
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
                                <b>Deadline :</b>
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
                            href={`/careers/${item.id}`}
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
              ))
            )}
          </div>
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
    </>
  );
};

export default UniversityJobs;
