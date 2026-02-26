import { useStore } from "@nanostores/react";
import { singleMedia } from "../../stores/mediasStore";
import { useEffect } from "react";
import { fetchSingleMediaAndFillStore } from "../../loaders/mediasLoader";

export default function MediaDetails({ id }) {
  const mediaDatails = useStore(singleMedia) || {};
  console.log("mediaDatails", mediaDatails);
  useEffect(() => {
    fetchSingleMediaAndFillStore(id);
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
                  {mediaDatails.author || "CUB Medias"}
                </a>
                <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {mediaDatails.date}
                </span>
              </div>
              
              <h3 className="blog-title">{mediaDatails.title}</h3>
              <div className="blog-details__featured-image mb--40">
                <img
                  style={{ width: "100%" }}
                  src={mediaDatails.image}
                  alt="blog post"
                />
              </div>

              <h6 className="blog__title">
                {mediaDatails.portal_name}
              </h6>

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{ __html: mediaDatails.description }}
              />

              <h6>
                Link: <br />
                <a href={mediaDatails.link} target="_blank" rel="noopener noreferrer">
                  {mediaDatails.link}
                </a>
              </h6>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
