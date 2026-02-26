import DepartmentJobsDetails from "./DepartmentJobsDetails";

const DepartmentJobs = ({ departments }) => {
  return (
    <>
      <div className="rts-blog v_3 rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <h2 className="rts-section-title">Department Wise Jobs</h2>
            </div>
          </div>
          <div className="row justify-content-md-start justify-content-sm-center g-5">
            {!departments || departments.length === 0 ? (
              <div className="col-12">
                <div
                  className="rts-empty-state text-center"
                  style={{
                    padding: 40,
                    border: "1px solid var(--rt-line)",
                    borderRadius: 6,
                  }}
                >
                  <h4>No department found</h4>
                  <p>There are currently no jobs for this department.</p>
                </div>
              </div>
            ) : (
              departments.map((item) => (
                <DepartmentJobsDetails key={item.id} department={item} />
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

export default DepartmentJobs;
