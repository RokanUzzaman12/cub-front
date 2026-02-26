import { useEffect } from "react";
import { singleClub } from "../../stores/clubStore";
import { fetchSingleClubAndFillStore } from "../../loaders/clubsLoader";
import { useStore } from "@nanostores/react";

const ClubDetails = ({ id }) => {
  const clubDetails = useStore(singleClub) || {};
  useEffect(() => {
    fetchSingleClubAndFillStore(id);
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
                  {clubDetails.author || "Unknown"}
                </a> */}
                {/* <span>
                  <span>
                    <i className="fa-light fa-clock"></i>
                  </span>{" "}
                  {clubDetails.date}
                </span> */}
              </div>

              <h3 className="blog-title">{clubDetails.title}</h3>

              <div className="blog-details__featured-image">
                <img
                  style={{ width: "100%" }}
                  src={clubDetails.images}
                  alt="blog post"
                />
              </div>

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{
                  __html: clubDetails.details,
                }}
              />
              {/* Gallery: up to 6 images in 2 rows x 3 columns */}
              {clubDetails.gallery_images &&
                clubDetails.gallery_images.length > 0 && (
                  <div
                    className="club-gallery-wrap"
                    aria-label="Club gallery wrap"
                  >
                    <h4 className="club-gallery__title">Gallery</h4>
                    <div className="club-gallery" aria-label="Club gallery">
                      {clubDetails.gallery_images
                        .slice(0, 6)
                        .map((img, idx) => (
                          <div className="club-gallery__item" key={idx}>
                            <a href={img} target="_blank" rel="noreferrer">
                              <img src={img} alt={`Gallery image ${idx + 1}`} />
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              <style>{`
                  /* center the article block itself */
                  .blog-details--centered { display:flex; flex-direction:column; align-items:center; }
                  .blog-details--centered { max-width: 900px; margin: 0 auto; padding: 0 12px 48px 12px; }
                  .blog-details--centered .blog-title { text-align:center; max-width:780px; width:100%; }
                  .blog-details--centered .blog-details__featured-image { width:100%; max-width:820px; }
                  .blog-details--centered .blog-details__featured-image img { display:block; margin:0 auto; border-radius:6px; }
                  .blog-details--centered .mt--30 { max-width:820px; text-align:left; }
                  @media (max-width: 768px) {
                    .blog-details--centered { padding: 0 12px 28px 12px; }
                    .blog-details--centered .mt--30 { padding: 0 6px 12px 6px; }
                  }
                  /* Responsive gallery: auto-fit columns with fixed min width and preserved aspect ratio */
                  .club-gallery-wrap { margin-top:18px; max-width:820px; width:100%; }
                  .club-gallery__title { font-size:3rem; margin:14px 0 14px 0; color:#222; text-align:center; font-weight:700; line-height:1.15; }
                  .club-gallery { display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-top:0; }
                  .club-gallery__item { overflow:hidden; border-radius:6px; }
                  .club-gallery__item img { width:100%; height:100%; object-fit:cover; display:block; aspect-ratio: 16/10; transition: transform .25s ease; }
                  .club-gallery__item:hover img { transform: scale(1.05); }
                  @media (max-width: 1200px) { .club-gallery { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); } .club-gallery__title { font-size:2rem; } }
                  @media (max-width: 768px) { .club-gallery { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:10px; } .club-gallery__item img { aspect-ratio: 4/3; } .club-gallery__title { font-size:1.25rem; } }
                `}</style>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;
