import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { campusLifeList, campusLifeListError, campusLifeListLoading } from '../../stores/campusLife';
import { fetchCampusLifeAndFillStore } from '../../loaders/campusLifeLoader';
import Error from '../common/Error';
import Loader from '../common/Loader';

const CampusLife = () => {
  const campus_life_list = useStore(campusLifeList) || [];
  const loading = useStore(campusLifeListLoading);
  const error = useStore(campusLifeListError);
  useEffect(() => {
    fetchCampusLifeAndFillStore();
  }, []);
  if (error) {
    return <Error statusCode={error.code} message={error.message} error={error} />;
  }
  if (!error && loading) {
    return <Loader />;
  }
  if (!error && !loading) {
    return (
      <>
        <section className='campus rts__primary__bg-2 rts-section-padding'>
          <div className='container'>
            <div className='row'>
              {/* <div className='rts__section--wrapper v__6'>
                 <h2 className='rts__section--wrapper--title'>
                  Campus <span> Life</span>
                </h2>
                <p className='rts__section--wrapper--description'>A Thriving Community for Learning, Growth, and Endless Opportunities.</p>
              </div> */}
               <div className='text-center mb-5'>
                 <h2 className='text-white'>
                  Campus <span> Life</span>
                </h2>
                <p className='text-center text-white'>A Thriving Community for Learning, Growth, and Endless Opportunities.</p>
              </div>
            </div>
            <div className='row g-5'>
              {campus_life_list.map((campus_life, index) => (
                <div className='col-lg-4 col-md-6 col-sm-6' key={index}>
                  <div className='campus__single--item'>
                    <a href='/campus-life'>
                      <div className='campus__single--item--thumb'>
                        <img src={campus_life.content[0].image} alt='student life image' width={400} height={300} />
                      </div>
                    </a>
                    <h5 className='campus__single--item--title'>
                      <a href='/campus-life'>
                        {campus_life.category}
                        <span>
                          <i className='fa-light fa-arrow-right'></i>
                        </span>
                      </a>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='rts__shape'>
            <img src='assets/images/icon/note_khata.svg' className='rts__shape--1' alt='' />
            <img src='assets/images/icon/book.svg' className='rts__shape--2' alt='' />
            <img src='assets/images/icon/compas_scale.svg' className='rts__shape--3' alt='' />
          </div>
        </section>

        <style>
          {`
  .campus {
    position: relative;
  }
  .campus > * {
    position: relative;
    z-index: 2;
  }
  .campus .rts__shape {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  @media screen and (max-width: 768px) {
    .campus .rts__shape {
      display: none;
    }
  }
  .campus .rts__shape--1 {
    position: absolute;
    top: 15%;
    left: 25%;
  }
  .campus .rts__shape--2 {
    position: absolute;
    top: 50%;
    left: 3%;
  }
  .campus .rts__shape--3 {
    position: absolute;
    right: 20%;
    top: 25%;
  }
  .campus.v__2 {
    background: var(--rt-heading);
  }
  .campus.v__3 {
    background: var(--rt-primary-2);
  }
  .campus.v__3 .campus__right--text--description {
    color: var(--rt-white);
  }

  .campus__single--item:hover .campus__single--item--title a::before {
    opacity: 1;
    width: 90%;
  }
  .campus__single--item:hover .campus__single--item--thumb img {
    transform: scale(1.1);
  }
  .campus__single--item--thumb {
    overflow: hidden;
    width: 100%;
  }
  .campus__single--item--thumb img {
    width: 100%;
    transform: scale(1);
    transition: var(--transition);
  }
  .campus__single--item--title {
    font-size: 26px;
    font-weight: 400;
    margin-top: 35px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    .campus__single--item--title {
      font-size: 22px;
    }
  }
  .campus__single--item--title a {
    display: inline-flex;
    gap: 10px;
    color: var(--rt-white);
    position: relative;
    align-items: center;
  }
  .campus__single--item--title a::before {
    position: absolute;
    content: "";
    bottom: 0;
    width: 10%;
    height: 1px;
    background: var(--rt-white);
    transition: var(--transition);
    opacity: 0;
    left: 0;
  }
  .campus__single--item--title a span {
    transform: rotate(-30deg);
    transition: var(--transition);
  }
  .campus__single--item--title:hover span {
    transform: rotate(0);
  }

  @media screen and (max-width: 992px) {
    .campus__wrapper .campus__link {
      margin-bottom: 50px;
    }
  }

  .campus__link--btn {
    border: 1px solid var(--rt-white);
    padding: 10px 30px;
    border-radius: 30px;
    color: var(--rt-white);
    display: inline-block;
    font-size: 24px;
    transition: var(--transition);
  }
  .campus__link--btn:hover {
    background: var(--rt-white);
  }

  .campus__right--text--title {
    color: var(--rt-white);
    margin-bottom: 30px;
    margin-top: -15px;
  }
  .campus__right--text--description {
    max-width: 500px;
    margin-left: 0;
  }

  .campus__paralax--image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    background-attachment: fixed;
  }
  @media screen and (max-width: 1200px) {
    .campus__paralax--image {
      height: 500px;
    }
  }
  @media screen and (max-width: 768px) {
    .campus__paralax--image {
      height: 250px;
    }
  }
    `}
        </style>
      </>
    );
  }
};

export default CampusLife;
