import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { sliderList } from "../../stores/sliderStore";
import { fetchSlidersAndFillStore } from "../../loaders/slidersLoader";

const HeaderBanner = () => {
  const slider_list = useStore(sliderList);
  const slides = Array.isArray(slider_list)
    ? slider_list
    : Array.isArray(slider_list?.data)
      ? slider_list.data
      : [];

  // debug
  // console.log("Slider List:", slider_list);

  useEffect(() => {
    fetchSlidersAndFillStore();
  }, []);

  // Ensure Swiper initializes after slides are loaded (handles dynamic API data)
  useEffect(() => {
    if (typeof window === "undefined") return;
    // wait until we have at least one slide
    if (!slides || slides.length === 0) return;

    // If Swiper is available globally, initialize any not-yet-initialized containers
    const SwiperCtor = window.Swiper || null;
    if (!SwiperCtor) return;

    const nodes = document.querySelectorAll(".swiper-data");
    nodes.forEach((node) => {
      try {
        // skip if already initialized
        if (node.classList.contains("swiper-initialized")) return;
        const options =
          node.dataset && node.dataset.swiper
            ? JSON.parse(node.dataset.swiper)
            : {};
        // eslint-disable-next-line no-new
        new SwiperCtor(node, options);
      } catch (e) {
        // safe fail
        // console.warn("Swiper init error:", e);
      }
    });
  }, [slides]);

  const videoSrc = slides[0]?.video;
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {/* <div className="banner v__3 mt--10">
        <div className="banner__wrapper">
          <div
            style={{
              borderRadius: "0.5rem 0.5rem 0 0",
              boxShadow: "0 4px 10px -2px var(--rt-primary)",
            }}
            className="swiper swiper-data"
            data-swiper={
              '{"slidesPerView":1,"effect":"fade","loop":false,"speed":1000,"autoplay":{"delay":"7000"}}'
            }
          >
            <div className="swiper-wrapper">
              {slides.map((slide, idx) => (
                <div className="swiper-slide" key={slide?.id || idx}>
                  <div
                    className="banner__wrapper--bg"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10 col-sm-10">
                          <div className="banner__slides--container banner__height">
                            <div className="banner__slides--content">
                              {slide.icon && (
                                <div className="banner__slides--content--icon">
                                  <img src={slide.icon} alt="cap" />
                                </div>
                              )}
                              <h2 className="banner__slides--content--title">
                                {slide.title}
                              </h2>
                              <p className="banner__slides--content--description">
                                {slide.description}
                              </p>
                              <div className="banner__slides--content--btn">
                                <a
                                  href={slide.button_link || "/admission"}
                                  className="rts-theme-btn btn-arrow"
                                >
                                  {slide.button_text || "Apply Now"}
                                  <span>
                                    <i className="fa-regular fa-arrow-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div>
        {videoSrc && (
          <video
            className="video-wrapper"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              width: "100%",
              height: "auto",
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity 0.5s ease"
            }}
          />
        )}
      </div>

      <style>{`
  .banner {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow: hidden;
  }

  .banner__wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    z-index: 99;
    padding-top: 80px;
  }
  @media screen and (max-width: 992px) {
    .banner__wrapper {
      min-width: 100%;
      flex-direction: column;
      margin-left: 0;
      padding-bottom: 100px;
      text-align: center;
    }
  }
  .banner__wrapper--left {
    margin-top: -65px;
    margin-left: -40px;
  }
  @media screen and (max-width: 992px) {
    .banner__wrapper--left {
      margin-top: 0;
      margin-left: 0;
      margin-bottom: 30px;
    }
  }
  .banner__wrapper--right {
    position: relative;
    display: inline-block;
    top: -130px;
    right: 110px;
  }
  @media screen and (max-width: 992px) {
    .banner__wrapper--right {
      display: none;
    }
  }
  .banner__wrapper--shape {
    position: absolute;
    left: 30%;
    top: 50%;
  }
  @media screen and (max-width: 1200px) {
    .banner__wrapper--shape {
      display: none;
    }
  }
  .banner .banner__content--sub {
    color: var(--rt-white);
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    font-family: var(--font-primary);
    font-weight: 500;
  }
  @media screen and (max-width: 992px) {
    .banner .banner__content--sub {
      justify-content: center;
    }
  }
  @media screen and (max-width: 576px) {
    .banner .banner__content--sub {
      flex-direction: column;
      flex: 1;
    }
  }
  .banner .banner__content--sub img {
    max-width: max-content;
  }
  @media screen and (max-width: 576px) {
    .banner .banner__content--sub img {
      margin: 0 auto;
    }
  }
  .banner .banner__content--title {
    font-size: 120px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--rt-white);
    line-height: 120px;
  }
  @media screen and (max-width: 1200px) {
    .banner .banner__content--title {
      font-size: 75px;
      line-height: 110px;
    }
  }
  @media screen and (max-width: 576px) {
    .banner .banner__content--title {
      font-size: 50px;
      line-height: 120%;
    }
  }
  .banner .banner__content--title span {
    display: block;
    margin-left: 250px;
  }
  @media screen and (max-width: 992px) {
    .banner .banner__content--title span {
      margin-left: 0;
    }
  }
  .banner .banner__content--circle {
    position: absolute;
    display: inline-block;
    top: 57%;
    left: 29%;
  }
  @media screen and (max-width: 992px) {
    .banner .banner__content--circle {
      position: relative;
      left: 0;
    }
  }
  .banner .banner__content--description {
    max-width: 560px;
    position: relative;
    left: 40%;
  }
  @media screen and (max-width: 992px) {
    .banner .banner__content--description {
      left: 0;
      margin: 0 auto;
    }
  }
  .banner .banner__content--description p {
    color: var(--rt-white);
    font-size: 18px;
    margin-bottom: 60px;
    margin-top: 55px;
  }
  @media screen and (max-width: 576px) {
    .banner .banner__content--description p {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  .banner .banner__content--description .rts-theme-btn {
    background: var(--rt-white);
    color: var(--rt-primary-1);
  }
  .banner .banner__content--description .rts-theme-btn::before {
    background: var(--rt-secondary);
  }
  .banner .banner__content--description .rts-theme-btn:hover {
    color: var(--rt-white);
  }
  .banner.v__3 .banner__wrapper {
    min-width: 100%;
    padding: 0 100px;
    margin-left: 0;
    border-radius: 20px;
    flex-direction: row;
  }
  @media screen and (max-width: 992px) {
    .banner.v__3 .banner__wrapper {
      padding: 0;
      border-radius: 0;
    }
  }
  .banner.v__3 .banner__wrapper--bg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 860px;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 992px) {
    .banner.v__3 .banner__wrapper--bg {
      border-radius: 0;
      height: 700px;
    }
  }
  .banner.v__3 .banner__wrapper--bg::before {
    position: absolute;
    inset: 0;
    content: "";
    background: rgba(0, 0, 0, 0.5);
    border-radius: inherit;
  }
  .banner.v__3 .banner__slides--container {
    position: relative;
    z-index: 3;
  }
  .banner.v__3 .banner__slides--content {
    opacity: 1;
    color: var(--rt-white);
  }
  .banner.v__3 .banner__slides--content--icon {
    margin-bottom: 60px;
  }
  .banner.v__3 .banner__slides--content--title {
    font-size: 56px;
    color: var(--rt-white);
    margin-bottom: 20px;
    line-height: 1.05;
    text-shadow: 0 6px 18px rgba(0,0,0,.45);
  }
  @media screen and (max-width: 768px) {
    .banner.v__3 .banner__slides--content--title {
      font-size: 50px;
      line-height: 60px;
    }
  }
  .banner.v__3 .banner__slides--content--description {
    font-size: 18px;
    font-family: var(--font-primary);
    color: var(--rt-white);
    margin-bottom: 30px;
    text-shadow: 0 4px 14px rgba(0,0,0,.35);
  }
  .banner.v__3 .banner__slides--content--btn {
    text-align: center;
    display: inline-block;
    margin: 0 auto;
  }
  .banner.v__3 .banner__slides--content .rts-theme-btn {
    border-radius: 30px;
  }
  .banner.v__3 .banner__slides--content {
    opacity: 0;
  }
  .banner.v__3 .banner__slides--content--icon {
    animation: none;
    transition-delay: 0.8s;
    opacity: 0;
    display: block;
  }
  .banner.v__3 .banner__slides--content--title {
    animation: none;
    transition-delay: 1.2s;
    opacity: 0;
    display: block;
  }
  .banner.v__3 .banner__slides--content--description {
    font-size: 18px;
    animation: none;
    transition-delay: 1.8s;
    opacity: 0;
    display: block;
  }
  .banner.v__3 .banner__slides--content .rts-theme-btn {
    animation: none;
    transition-delay: 2.2s;
    opacity: 0;
    display: block;
    text-align: center;
  }
  .banner.v__3 .swiper-slide-active .banner__slides--content {
    opacity: 1;
  }
  .banner.v__3 .swiper-slide-active .banner__slides--content--icon {
    animation: slideInUp3 1s;
    animation-delay: 0.8s;
    display: block;
    opacity: 1;
  }
  .banner.v__3 .swiper-slide-active .banner__slides--content--title {
    animation: fadeInUp 1.2s;
    animation-delay: 1.2s;
    opacity: 1;
  }
  .banner.v__3 .swiper-slide-active .banner__slides--content--description {
    animation: fadeInUp 0.8s;
    animation-delay: 1.8s;
    opacity: 1;
  }
  .banner.v__3 .swiper-slide-active .banner__slides--content .rts-theme-btn {
    animation: fadeInUp 0.8s;
    animation-delay: 2.2s;
    opacity: 1;
  }
  /* Minimal override: ensure title/description/button are visible even before Swiper adds active classes */
  .banner.v__3 .banner__slides--content,
  .banner.v__3 .banner__slides--content--icon,
  .banner.v__3 .banner__slides--content--title,
  .banner.v__3 .banner__slides--content--description,
  .banner.v__3 .banner__slides--content .rts-theme-btn {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
  }
  /* raise content and center it */
  .banner.v__3 .banner__slides--container { 
    z-index: 6; 
  }
  /* Center slide content horizontally and vertically */
  .banner.v__3 .banner__wrapper--bg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .banner.v__3 .banner__slides--container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
  }
  .banner.v__3 .banner__slides--content {
    text-align: center;
    max-width: 760px;
    margin: 0 auto;
    transform: none !important;
  }
`}</style>
    </>
  );
};

export default HeaderBanner;
