import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Loader from "./Loader";

const BreadCrumb = ({ data }) => {
  if (!data) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="banner v__5 rts-section-padding">
          <div className="container">
            <div className="banner__content">
              <div className="banner__content__top">
                <div className="banner__content__left">
                  <h5 className="banner__sub__heading">
                    knowledge meets innovation
                  </h5>
                  <h1 className="banner__heading__title text-center">
                    {data.name}
                  </h1>
                </div>
              </div>
              <div className="banner__content__bottom">
                <div className="banner__content__bottom__right o-hidden">
                  <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    slidesPerView={1}
                    effect="fade"
                    loop
                    speed={1000}
                    autoplay={{ delay: 7000 }}
                    navigation={{
                      nextEl: ".rts__next",
                      prevEl: ".rts__prev",
                    }}
                  >
                    <SwiperSlide>
                      <img src={data.dept_slide_1} alt="slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={data.dept_slide_2} alt="slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={data.dept_slide_3} alt="slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={data.dept_slide_4} alt="slide 4" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="rts__slider--arrow v__2">
            <div className="slider__btn rts__prev">
              <i className="fa-light fa-arrow-left"></i>
            </div>
            <div className="slider__btn rts__next">
              <i className="fa-light fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <style>
          {`
    .banner.v__5 {
    position: relative;
  }

  .banner.v__5 .banner__content__top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1200px) {
    .banner.v__5 .banner__content__top {
      flex-direction: column;
      gap: 30px;
    }
  }
  .banner.v__5 .banner__content__top .banner__content__left {
    /* max-width: 750px; */
  }
  .banner.v__5
    .banner__content__top
    .banner__content__left
    .banner__sub__heading {
    display: flex;
    gap: 15px;
    color: var(--rt-primary-2);
    text-transform: capitalize;
    margin-bottom: 10px;
    font-family: var(--font-primary);
    font-weight: 500;

    justify-content: center;
  }
  .banner.v__5
    .banner__content__top
    .banner__content__left
    .banner__heading__title {
    font-size: 60px;
    line-height: 85px;
  }
  @media screen and (max-width: 768px) {
    .banner.v__5
      .banner__content__top
      .banner__content__left
      .banner__heading__title {
      font-size: 65px;
      line-height: 70px;
    }
  }
  @media screen and (max-width: 576px) {
    .banner.v__5
      .banner__content__top
      .banner__content__left
      .banner__heading__title {
      font-size: 45px;
      line-height: 55px;
    }
  }
  .banner.v__5 .banner__content__top .banner__content__right {
    max-width: 490px;
    position: relative;
    left: 60px;
  }
  @media screen and (max-width: 1400px) {
    .banner.v__5 .banner__content__top .banner__content__right {
      left: 0;
    }
  }
  @media screen and (max-width: 1200px) {
    .banner.v__5 .banner__content__top .banner__content__right {
      max-width: 750px;
    }
  }
  .banner.v__5 .banner__content__bottom {
    display: flex;
    gap: 80px;
  }
  @media screen and (max-width: 1200px) {
    .banner.v__5 .banner__content__bottom {
      flex-direction: column;
      max-width: 750px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 768px) {
    .banner.v__5 .banner__content__bottom {
      gap: 40px;
    }
  }
  .banner.v__5 .banner__content__bottom__right {
    margin-right: 15px;
  }
  .banner.v__5 .banner__content__bottom__right img {
    border-radius: 10px;
    max-height: 400px;
    min-height: 400px;
    width: 100%;
    object-fit: cover;
  }
    `}
        </style>
      </>
    );
  }
};

export default BreadCrumb;
