const DepartmentUniqueFeature = ({
  departmentUniqueFeature,
  slug,
  department,
}) => {
  // If this is an office and there are no clubs, render nothing
  if (!departmentUniqueFeature || departmentUniqueFeature.length === 0) {
    return null;
  }

  return (
    <>
      <div className="rts-blog v_3 rts-section-padding">
        <div className="container">
          <h2 className="text-center">Unique Features of this Department</h2>
          <div className="row justify-content-md-start justify-content-sm-center g-5">
            {!departmentUniqueFeature || departmentUniqueFeature.length === 0
              ? ""
              : departmentUniqueFeature.map((item, index) => (
                  <div
                    className="col-sm-6 col-md-3 col-lg-3 col-xl-3"
                    key={item.id}
                  >
                    <div className="feature-area">
                      <div className="feature-card">
                        <div className="feature-number">{index + 1}</div>
                         <a href={`/unique-feature/${item.id}`}>
                              {item.title}
                            </a>
                      </div>
                    </div>
                  </div>
                ))}
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
          margin-bottom: 20px;
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

export default DepartmentUniqueFeature;
