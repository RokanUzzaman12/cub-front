import { useStore } from '@nanostores/react';
import { brandList } from '../../stores/brandStore';
import { useEffect } from 'react';
import { fetchBrandsAndFillStore } from '../../loaders/brandsLoader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

const Brands = () => {
  const brands = useStore(brandList) || [];
  useEffect(() => {
    fetchBrandsAndFillStore();
  }, []);
  return (
    <div className='rts-brand v_1 rts-section-padding'>
      <div className='container'>
        <div className='row justify-content-md-center'>
          <div className='col-lg-12 col-md-11'>
            <h2 className='text-center'>Collaboration</h2>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={6}
              loop={true}
              autoplay={{ delay: 3000 }}
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
                575: {
                  slidesPerView: 4,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 5,
                  centeredSlides: true,
                },
                991: {
                  slidesPerView: 6,
                  centeredSlides: true,
                },
                1201: {
                  slidesPerView: 6,
                },
              }}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className='single-brand-logo'>
                    <a href='#'>
                      <img src={brand.brand_image} alt='image' />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
