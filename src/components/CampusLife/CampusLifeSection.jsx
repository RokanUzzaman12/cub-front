import { useEffect } from 'react';
import { campusLifeList } from '../../stores/campusLife';
import { useStore } from '@nanostores/react';
import { fetchCampusLifeAndFillStore } from '../../loaders/campusLifeLoader';

const CampusLifeSection = () => {
  const campus_life = useStore(campusLifeList) || [];
  useEffect(() => {
    fetchCampusLifeAndFillStore();
  }, []);
  return (
    <>
      {campus_life.map((campuslifeInfo, index) => (
        <div className={`rts-campus-section pb--120 rts-section-padding ${(index + 1) % 2 == 0 && 'v_2'}`} key={index}>
          <div className='container'>
            <div className='row'>
              <div className='rts-section rt-center mb--45'>
                <h3 className='rts-section-title'>{campuslifeInfo.category}</h3>
              </div>
            </div>
            <div className='row g-5'>
              {campuslifeInfo.content.map((contentInfo, index2) => (
                <div className='col-lg-4 col-md-6 col-sm-6' key={index2}>
                  <div className='single-item'>
                    <div className='single-item__content'>
                      <div className='single-item__image'>
                        <img src={contentInfo.image} alt='item-image' />
                      </div>
                      <div className='single-item__meta'>
                        <h5 className='item-title'>
                          <a href='#'>{contentInfo.title}</a>
                        </h5>
                        <p className='item-description'>{contentInfo.sub_title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <style>
        {`
  .campus-life__content {
    text-align: center;
  }
  .campus-life__content .rts-section-title {
    margin-bottom: 20px;
  }
  .campus-life__content .description {
    font-size: 20px;
  }
  .campus-life__content .campus-video {
    position: relative;
    margin-top: 50px;
  }
  .campus-life__content .campus-video span {
    display: none;
  }
  .campus-life__content .campus-video::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  .campus-life__content .campus-video .video-play {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: pointer;
  }
  .campus-life__content .campus-video .video-play img.round {
    height: 126px;
    width: 126px;
    animation: rotate 10s linear infinite;
    position: relative;
  }
  @media screen and (max-width: 992px) {
    .campus-life__content .campus-video .video-play img.round {
      height: 80px;
      width: 80px;
    }
  }
  .campus-life__content .campus-video .video-play img.play-icon {
    height: 50px;
    width: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 992px) {
    .campus-life__content .campus-video .video-play img.play-icon {
      height: 30px;
      width: 30px;
    }
  }

  .single-item__content {
    border: 1px solid #eee;
    transition: var(--transition);
  }
  .single-item__content:hover {
    border-color: var(--rt-primary-2);
  }
  .single-item__content .single-item__image {
    overflow: hidden;
  }
  .single-item__content .single-item__image img {
    transform: scale(1);
    transition: var(--transition);
  }
  .single-item__content .single-item__image:hover img {
    transform: scale(1.1);
  }
  .single-item__content .item-title {
    margin-bottom: 10px;
  }
  .single-item__content .item-title a {
    color: var(--rt-secondary);
    transition: var(--transition);
  }
  .single-item__content .item-title a:hover {
    color: var(--rt-primary-2);
  }
  .rts-campus-section.v_2 {
    background: #f9f8ff;
  }`}
      </style>
    </>
  );
};

export default CampusLifeSection;
