import { useStore } from "@nanostores/react";
import { singlePage } from "../../stores/newpagesStore";
import { useEffect } from "react";
import { fetchSinglePageAndFillStore } from "../../loaders/newpagesLoader";
// import c from "../../../public/assets/js/plugins/twinmax";

export default function NewPageDetails({ id }) {
  const newpagesDatails = useStore(singlePage) || {};
  useEffect(() => {
    fetchSinglePageAndFillStore(id);
  }, [id]);
  return (
    <div className="rts-blog-details">
      <div className="container">
        <div className="row sticky-coloum-wrap justify-content-center g-5">
          <div className="col-lg-12 col-md-12">
            <article className="blog-details">
              {/* <div className="blog-details__article-meta mt--40">
                <a href="#">
                  <span>
                    <i className="fa-light fa-user"></i>
                  </span>{" "}
                  {newpagesDatails.author || ""}
                </a>
                <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {newpagesDatails.date}
                </span>
              </div> */}

              <h3 className="blog-title text-center pt--20">{newpagesDatails.title}</h3>

              {/* <div className="blog-details__featured-image">
                <img
                  style={{ width: "100%" }}
                  src={newpagesDatails.image}
                  alt="blog post"
                />
              </div> */}

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{ __html: newpagesDatails.description }}
              />

              {newpagesDatails?.attachment &&
                newpagesDatails.attachment !== "https://admin.cub.ac.bd/files" &&
                newpagesDatails.attachment.replace("https://admin.cub.ac.bd/files/", "").length > 0 && (
                  <div className="pdf-container">
                    <iframe src={newpagesDatails.attachment}></iframe>
                  </div>
                )}

            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
