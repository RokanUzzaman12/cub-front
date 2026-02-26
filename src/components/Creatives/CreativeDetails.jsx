import { useStore } from "@nanostores/react";
import { singleCreative } from "../../stores/creativeStore";
import { useEffect } from "react";
import { fetchSingleCreativeAndFillStore } from "../../loaders/creativesLoader";
import { sendPageView } from "../../api/creatives";

export default function CreativeDetails({ id }) {
  const creativeDetails = useStore(singleCreative) || {};
  useEffect(() => {
    fetchSingleCreativeAndFillStore(id);
  }, [id]);

  useEffect(() => {
    if (!id) return;
    
    sendPageView({
      page_id: id,
    });
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
                  {creativeDetails.author || "CUB Creatives"}
                </a>
                <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {creativeDetails.date}
                </span>
              </div>

              <h3 className="blog-title">
                {creativeDetails.title}
              </h3>

              <div className="blog-details__featured-image">
                <img
                  style={{ width: "100%" }}
                  src={creativeDetails.image}
                  alt="blog post"
                />
              </div>

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{
                  __html: creativeDetails.description,
                }}
              />
            </article>

            {/* <div className="text-center mt-5">
              <img
                src="/assets/images/feature/scholarship-bg.jpg"
                alt=""
                style={{ height: 150, width: 150 }}
              />
              <h6>Name</h6>
              <p className="text-center">
                Assistant Professor, Department of English
              </p>
              <p className="text-center">Canadian University of Bangladesh</p>
            </div>

            <div className="text-center mt-5">
              <p className="text-center">
                <b>Total Views:</b> 1381
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
