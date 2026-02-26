import { useEffect } from "react";
import { singleUniqueFeature } from "../../stores/uniqueFeaturesStore";
import { fetchSingleUniqueFeatureAndFillStore } from "../../loaders/uniqueFeaturesLoader";
import { useStore } from "@nanostores/react";

const UniqueFeatures = ({ id }) => {
  const uniqueFeatures = useStore(singleUniqueFeature) || {};
  useEffect(() => {
    fetchSingleUniqueFeatureAndFillStore(id);
  }, [id]);
  return (
    <div className="rts-blog-details">
      <div className="container">
        <div className="row sticky-coloum-wrap justify-content-center g-5">
          <div className="col-lg-12 col-md-12">
            <article className="blog-details blog-details--centered">
              <div className="blog-details__article-meta mt--40">
              </div>

              <h3 className="blog-title">{uniqueFeatures.title}</h3>

              <div className="blog-details__featured-image">
                <img
                  style={{ width: "100%" }}
                  src={uniqueFeatures.image}
                  alt="blog post"
                />
              </div>

              <div
                className="mt--30"
                dangerouslySetInnerHTML={{
                  __html: uniqueFeatures.description || "<p>No description found</p>",
                }}
              />
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
                `}</style>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
