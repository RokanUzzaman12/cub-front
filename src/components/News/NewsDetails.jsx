import { useStore } from "@nanostores/react";
import { singleNews } from "../../stores/newsStore";
import { useEffect } from "react";
import { fetchSingleNewsAndFillStore } from "../../loaders/newsLoader";

export default function NewsDetails({ id }) {
  const newsDatails = useStore(singleNews) || {};
  useEffect(() => {
    fetchSingleNewsAndFillStore(id);
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
                  {newsDatails.author || "CUB News"}
                </a>
                <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {newsDatails.date}
                </span>
              </div>

              <h3 className="blog-title">{newsDatails.title}</h3>

              <div className="blog-details__featured-image">
                <img
                  style={{ width: "100%" }}
                  src={newsDatails.image}
                  alt="blog post"
                />
              </div>

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{ __html: newsDatails.description }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
