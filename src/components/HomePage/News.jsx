import { useStore } from "@nanostores/react";
import { latestNews, newsList } from "../../stores/newsStore";
import { useEffect } from "react";
import { fetchNewsAndFillStore } from "../../loaders/newsLoader";

const News = () => {
  const news_list = useStore(newsList);
  const latest_news = useStore(latestNews);
  useEffect(() => {
    fetchNewsAndFillStore();
  }, []);
  return (
    <>
      <div className="rts-blog rts__light rts-section-padding v_2">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-11 col-lg-12">
              <div className="rts-section rts-border-bottom-1 mb--50 pb--20">
                <h2 className="rts-section-title">Campus News</h2>
                <a href="/news" className="rts-arrow">
                  View All{" "}
                  <span>
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <div className="rts-blog-post blog-v-full">
                <div className="single-blog-post">
                  <a href={`/news/${latest_news.id}`} className="blog-thumb">
                    <img src={latest_news.image} alt="blog-thumb" />
                  </a>
                  <div className="blog-content">
                    <div className="post-meta">
                      <div className="rt-author">
                        <span>
                          <i className="fa-light fa-user"></i>
                        </span>
                        <span>{latest_news.author || "Cub News"}</span>
                      </div>
                      <div className="rt-date">
                        <span>
                          <i className="fal fa-calendar"></i>
                        </span>
                        <span>{latest_news.date}</span>
                      </div>
                    </div>
                    <a href={`/news/${latest_news.id}`} className="post-title">
                      {latest_news.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rts-blog-post">
                {news_list.slice(1, 4).map((news, index) => (
                  <div className="single-blog-post" key={index}>
                    <div className="blog-thumb">
                      <a href={`/news/${news.id}`}>
                        <img src={news.image} alt="post-thumbnail" />
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="post-meta">
                        <div className="rt-author">
                          <span>
                            <i className="fa-light fa-user"></i>
                          </span>
                          <span>{news.author || "Cub News"}</span>
                        </div>
                        <div className="rt-date">
                          <span>
                            <i className="fal fa-calendar"></i>
                          </span>
                          <span>{news.date}</span>
                        </div>
                      </div>
                      <a href={`/news/${news.id}`} className="post-title">
                        {news.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
  .rts-blog .rts-blog-post .single-blog-post {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    width: 100%;
    border: 1px solid var(--rt-line);
    background-color: var(--rt-white);
  }

  .rts-blog .rts-blog-post.blog-v-full .single-blog-post {
    background-color: transparent;
  }
  .rts-blog .rts-blog-post .single-blog-post:not(:last-child) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 576px) {
    .rts-blog .rts-blog-post .single-blog-post {
      flex-wrap: wrap;
    }
  }
  .rts-blog .rts-blog-post .single-blog-post .blog-thumb {
    overflow: hidden;
    min-width: 190px;
    max-width: 100%;
    height: 120px;
  }
  @media screen and (max-width: 1200px) {
    .rts-blog .rts-blog-post .single-blog-post .blog-thumb {
      height: 150px;
    }
  }
  .rts-blog .rts-blog-post .single-blog-post .blog-thumb:hover img {
    transform: scale(1.1);
    height: 100%;
  }
  @media screen and (max-width: 576px) {
    .rts-blog .rts-blog-post .single-blog-post .blog-thumb {
      width: 100%;
      height: 100%;
    }
  }
  .rts-blog .rts-blog-post .single-blog-post .blog-thumb img {
    height: 100%;
    max-width: 100%;
    min-width: 190px;
    transition: var(--transition);
    transform: scale(1);
    object-fit: cover;
  }
  @media screen and (max-width: 576px) {
    .rts-blog .rts-blog-post .single-blog-post .blog-thumb img {
      width: 100%;
      height: max-content;
    }
  }
  .rts-blog .rts-blog-post .single-blog-post .blog-content {
    padding-right: 30px;
  }
  .rts-blog .rts-blog-post .single-blog-post .blog-content .post-meta {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  @media screen and (max-width: 1200px) {
    .rts-blog .rts-blog-post .single-blog-post .blog-content .post-meta {
      flex-wrap: wrap;
      gap: 10px;
    }
  }
  @media screen and (max-width: 576px) {
    .rts-blog .rts-blog-post .single-blog-post .blog-content .post-meta {
      flex-wrap: wrap;
      gap: 10px;
    }
  }
  .rts-blog
    .rts-blog-post
    .single-blog-post
    .blog-content
    .post-meta
    .rt-author,
  .rts-blog .rts-blog-post .single-blog-post .blog-content .post-meta .rt-date {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .rts-blog
    .rts-blog-post
    .single-blog-post
    .blog-content
    .post-meta
    .rt-author
    a,
  .rts-blog
    .rts-blog-post
    .single-blog-post
    .blog-content
    .post-meta
    .rt-date
    a {
    color: inherit;
    transition: var(--transition);
  }
  .rts-blog
    .rts-blog-post
    .single-blog-post
    .blog-content
    .post-meta
    .rt-author
    a:hover,
  .rts-blog
    .rts-blog-post
    .single-blog-post
    .blog-content
    .post-meta
    .rt-date
    a:hover {
    color: var(--rt-primary-1);
  }
  .rts-blog .rts-blog-post .single-blog-post .blog-content .post-title {
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
    color: var(--rt-heading);
    position: relative;
    transition: var(--transition);
    line-height: 1.2;
    font-family: var(--font-secondary);
  }
  .rts-blog .rts-blog-post .single-blog-post .blog-content .post-title:hover {
    color: var(--rt-primary-1);
  }
  .rts-blog .rts-blog-post.blog-v-full {
    position: relative;
    z-index: 1;
  }
  .rts-blog .rts-blog-post.blog-v-full .blog-thumb {
    position: relative;
    min-height: 420px;
    width: 100%;
    overflow: hidden;
  }
  .rts-blog .rts-blog-post.blog-v-full .blog-thumb:hover img {
    transform: scale(1.1);
  }
  .rts-blog .rts-blog-post.blog-v-full .blog-thumb img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: scale(1);
    transition: var(--transition);
  }
  .rts-blog .rts-blog-post.blog-v-full .blog-thumb::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(12, 12, 15, 0) 0%,
      rgba(12, 12, 15, 0.8) 75.83%
    );
  }
  .rts-blog .rts-blog-post.blog-v-full .blog-content {
    position: absolute;
    bottom: 40px;
    left: 40px;
    color: var(--rt-white);
    z-index: 1;
    max-width: 90%;
  }
  @media screen and (max-width: 576px) {
    .rts-blog .rts-blog-post.blog-v-full .blog-content {
      bottom: 40px;
      left: 30px;
    }
  }
  .rts-blog .rts-blog-post.blog-v-full .blog-content .post-title {
    font-size: 36px;
    color: var(--rt-white);
    font-weight: 400;
    font-family: var(--font-secondary);
    line-height: 1.2;
    text-decoration: none;
    position: relative;
    background-image: linear-gradient(
      0deg,
      var(--rt-white) 0%,
      var(--rt-white) 100%
    );
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0 1px;
    transition:
      background-size 0.2s linear 0s,
      0.15s;
    transform: translateZ(0);
    text-transform: capitalize;
  }
  @media screen and (max-width: 576px) {
    .rts-blog .rts-blog-post.blog-v-full .blog-content .post-title {
      font-size: 25px;
    }
  }
  .rts-blog .rts-blog-post.blog-v-full .blog-content .post-title:hover {
    color: var(--rt-white);
    background-size: 100% 1px;
  }
  .rts-blog.v_2 .rts-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 992px) {
    .rts-blog.v_2 .rts-section {
      flex-wrap: wrap;
      gap: 20px;
    }
  }
  .rts-blog.v_2 .rts-section-description {
    max-width: 410px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 992px) {
    .rts-blog.v_2 .rts-section-description {
      margin: 0;
    }
  }
  .rts-blog.v_2.no-bg {
    background: transparent;
  }
  .rts-blog.v_2 .rts-border-bottom-1 {
    border-color: #d9d9d9;
  }
  .rts-blog.v_2 .rts-blog-post .single-blog-post {
    border: 1px solid var(--rt-line);
  }
  @media screen and (max-width: 576px) {
    .rts-blog.v_2 .rts-blog-post .single-blog-post {
      border: none;
    }
  }
  .rts-blog.v_2 .rts-blog-post .single-blog-post .blog-content {
    padding-right: 30px;
  }
  @media screen and (max-width: 1200px) {
    .rts-blog.v_2 .rts-blog-post .single-blog-post .blog-content {
      padding-right: 20px;
    }
  }
  .rts-blog.v_2 .rts-blog-post .single-blog-post .blog-thumb img {
    min-width: 160px;
  } `}
      </style>
    </>
  );
};

export default News;
