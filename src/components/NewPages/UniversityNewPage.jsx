import { useStore } from "@nanostores/react";
import { pageList } from "../../stores/newpagesStore";
import { useEffect } from "react";
import { fetchPageAndFillStore } from "../../loaders/newpagesLoader";

export default function pagesList() {
  const pages = useStore(pageList);

  useEffect(() => {
    fetchPageAndFillStore();
  }, []);

  return (
    <>
      <div className="rts-blog v_3 rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-start justify-content-sm-center g-5">
            {pages.map((item) => (
              <div
                className="col-sm-10 col-md-6 col-lg-6 col-xl-4"
                key={item.id}
              >
                <div className="single-blog">
                  <div className="blog single-blog__content">
                    {/* <div className="blog__thumb">
                      <a href={`/pages/${item.id}`}>
                        <img src={item.image} alt="blog thumbnail" />
                      </a>
                    </div> */}
                    <div className="blog__meta">
                      {/* <div className="blog__meta--da">
                        <div className="blog-date">
                          <span>
                            <i className="fal fa-calendar"></i>
                          </span>
                          <span>{item.date}</span>
                        </div>
                        {item.author && (
                          <div className="blog-author">
                            <span>
                              <i className="far fa-user"></i>
                            </span>
                            <span>
                              <a href="#">{item.author || "Unknown"}</a>
                            </span>
                          </div>
                        )}
                      </div> */}
                      <h5 className="blog__title">
                        <a href={item.redirect_url}>{item.title}</a>
                      </h5>
                      <a
                        href={`/newpages/${item.id}`}
                        className="rts-theme-btn primary with-arrow lh-100"
                      >
                        Read More{" "}
                        <span>
                          <i className="fa-thin fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
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
          display: flex;
          flex-direction: column;
          height: 100%; /* allow column to stretch */
        }
        /* Make the card content stretch so all cards equal height */
        .rts-blog.v_3 .single-blog__content {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          padding: 0; /* we move padding to blog__meta */
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb {
          overflow: hidden;
          flex: 0 0 auto;
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb img {
          width: 100%;
          object-fit: cover;
          transition: var(--transition);
          transform: scale(1);
          display: block;
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb img:hover {
          transform: scale(1.05);
        }
        /* Meta takes the remaining space; distribute content so action sits at bottom */
        .rts-blog.v_3 .single-blog__content .blog__meta {
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1 1 auto;
        }
        .rts-blog.v_3 .single-blog__content .blog__meta--da {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 12px;
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
        /* Ensure title doesn't push the button out; keep spacing consistent */
        .rts-blog.v_3 .single-blog__content .blog__title {
          margin: 12px 0;
        }
        .rts-blog.v_3 .single-blog__content .rts-theme-btn {
          margin-top: 12px;
          align-self: flex-start;
        }
        /* Make the column container stretch so columns match height */
        .rts-blog.v_3 .row > [class*="col-"] {
          display: flex;
        }
      `}</style>
    </>
  );
}
