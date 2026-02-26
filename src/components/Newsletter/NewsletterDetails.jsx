import { useEffect } from "react";
import { singleNewsletter } from "../../stores/newsletter";
import { fetchSingleNewsletterAndFillStore } from "../../loaders/newsletterLoader";
import { useStore } from "@nanostores/react";

const NewsletterDetails = ({ id }) => {
  const newsletterDetails = useStore(singleNewsletter) || {};
  console.log("newsletterDetails", newsletterDetails);
  useEffect(() => {
    fetchSingleNewsletterAndFillStore(id);
  }, [id]);
  return (
    <div className="rts-blog-details">
      <div className="container">
        <div className="row sticky-coloum-wrap justify-content-center g-5">
          <div className="col-lg-12 col-md-12">
            <article className="blog-details blog-details--centered">
              <div className="blog-details__article-meta mt--40">
                {/* <a href="#">
                  <span>
                    <i className="fa-light fa-user"></i>
                  </span>{" "}
                  {newsletterDetails.author || "Unknown"}
                </a> */}
                {/* <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {newsletterDetails.date}
                </span> */}
              </div>

              <h3 className="blog-title">{newsletterDetails.title}</h3>

              <div className="blog-details__featured-image">
                <a
                  href={newsletterDetails.attachment}
                  className="rts-theme-btn"
                  download
                >
                  <img
                    style={{ width: "100%" }}
                    src={newsletterDetails.image}
                    alt="blog post"
                  />
                </a>
              </div>
              <div
                className="mt--30"
                dangerouslySetInnerHTML={{
                  __html: newsletterDetails.description,
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterDetails;
