import { useEffect } from "react";
import { singleResearch } from "../../stores/researchStore";
import { fetchSingleResearchAndFillStore } from "../../loaders/researchLoader";
import { useStore } from "@nanostores/react";

const ResearchDetails = ({ id }) => {
  const researchDetails = useStore(singleResearch) || {};
  useEffect(() => {
    fetchSingleResearchAndFillStore(id);
  }, [id]);
  return (
    <div className="rts-blog-details">
      <div className="container">
        <div className="row sticky-coloum-wrap justify-content-center g-5">
          <div className="col-lg-12 col-md-12">
            <article className="blog-details">
              <div className="blog-details__article-meta mt--40">
                <a href="#">
                  <span>
                    <i className="fa-light fa-user"></i>
                  </span>{" "}
                  {researchDetails.author || ""}
                </a>
                <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {researchDetails.date}
                </span>
              </div>

              <h3 className="blog-title">{researchDetails.title}</h3>

              <div className="blog-details__featured-image">
                <img
                  style={{ width: "100%" }}
                  src={researchDetails.image}
                  alt="blog post"
                />
              </div>

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{
                  __html: researchDetails.description,
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetails;
