import { useEffect } from "react";
import { singleActivity } from "../../stores/activitiesStore";
import { fetchSingleActivityAndFillStore } from "../../loaders/activitesLoader";
import { useStore } from "@nanostores/react";

const ActivityDetails = ({ id }) => {
  const activityDetails = useStore(singleActivity) || {};
  useEffect(() => {
    fetchSingleActivityAndFillStore(id);
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
                  {activityDetails.author || ""}
                </a>
                <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {activityDetails.date}
                </span>
              </div>

              <h3 className="blog-title">{activityDetails.title}</h3>

              <div className="blog-details__featured-image">
                <img
                  style={{ width: "100%" }}
                  src={activityDetails.image}
                  alt="blog post"
                />
              </div>

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{
                  __html: activityDetails.description,
                }}
              />
              {/* Gallery: up to 6 images in 2 rows x 3 columns */}
              {activityDetails.gallery_images &&
                activityDetails.gallery_images.length > 0 && (
                  <div
                    className="activity-gallery-wrap"
                    aria-label="Activity gallery wrap"
                  >
                    <h4 className="activity-gallery__title">Gallery</h4>
                    <div
                      className="activity-gallery"
                      aria-label="Activity gallery"
                    >
                      {activityDetails.gallery_images
                        .slice(0, 6)
                        .map((img, idx) => (
                          <div className="activity-gallery__item" key={idx}>
                            <a href={img} target="_blank" rel="noreferrer">
                              <img src={img} alt={`Gallery image ${idx + 1}`} />
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              <style>{`
                .activity-gallery-wrap { margin-top:18px; max-width:820px; width:100%; }
                .activity-gallery__title { font-size:2.6rem; margin:8px 0 12px 0; color:#222; text-align:center; font-weight:700; line-height:1.15; }
                .activity-gallery { display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:12px; margin-top:0; }
                .activity-gallery__item { overflow:hidden; border-radius:6px; }
                .activity-gallery__item img { width:100%; height:100%; object-fit:cover; display:block; aspect-ratio: 16/10; transition: transform .25s ease; }
                .activity-gallery__item:hover img { transform: scale(1.05); }
                @media (max-width: 768px) { .activity-gallery { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:10px; } .activity-gallery__item img { aspect-ratio: 4/3; } .activity-gallery__title { font-size:1.15rem; } }
              `}</style>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
