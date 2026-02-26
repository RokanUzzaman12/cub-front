import { useEffect } from 'react';
import { categoryWiseLeaders } from '../../stores/leadersStore';
import { fetchCategoryWiseLeadersAndFillStore } from '../../loaders/leadersLoader';
import { useStore } from '@nanostores/react';
import { removeDash } from '../../lib/removeDash';

const AuthorityList = ({ leaderType }) => {
  const leaders = useStore(categoryWiseLeaders) || [];
  useEffect(() => {
    fetchCategoryWiseLeadersAndFillStore(leaderType);
  }, [leaderType]);
  return (
    <>
      <section className='rts-faculty rts-section-padding'>
        <div className='container'>
          {/* <div className='row justify-content-md-center'>
            <div className='col-lg-12 col-md-11'>
              <div className='rts-section mb--50'>
                <h3 className='rts-section-title'>{removeDash(staffType)}</h3>
              </div>
            </div>
          </div> */}

          <div className='faculty-container'>
            <div className='heading-container'>
              <h4 className='heading-title'>{`${removeDash(leaderType)} Members`}</h4>
            </div>

            <div className='row justify-content-md-center g-5'>
              {leaders.map((leader, index) => (
                <div className='col-lg-4 col-md-12' key={index}>
                  <div className='single-staff'>
                    <div className='single-staff__content'>
                      <div className='staf-image'>
                        <img src={leader.image} alt='staff-image' />
                      </div>
                      <div className='staf-info'>
                        <h5 className='name'>{leader.name}</h5>
                        <span className='designation'>{leader.designation}</span>
                        <div className='staf-info__speciality'>
                          <p>{leader.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
        .rts-section-title{
          
        }
        .faculty-container{
          margin-bottom: 50px
        }
        .heading-container{
          display:flex;
          align-items: center;
          justify-content: center;
        }
        .heading-title{
          margin-bottom: 50px;
          font-size: 35px;
          font-weight: normal;
          text-align: center;
          display: inline-block;
          border-bottom: 3px solid #890c25;
          padding-bottom: 0.3rem;
        }
        .single-staff {
          border: 1px solid var(--rt-line);
          padding: 20px;
          transition: var(--transition);
          box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
        }
        .single-staff__content {
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
        }
        @media screen and (max-width: 1200px) {
          .single-staff__content {
            flex-wrap: wrap;
          }
        }
        @media screen and (max-width: 992px) {
          .single-staff__content {
            flex-wrap: nowrap;
          }
        }
        @media screen and (max-width: 576px) {
          .single-staff__content {
            flex-wrap: wrap;
          }
        }
        .single-staff__content .staf-image {
          width: auto;
        }
        @media screen and (max-width: 992px) {
          .single-staff__content .staf-image {
            width: auto;
          }
        }
        @media screen and (max-width: 576px) {
          .single-staff__content .staf-image {
            width: auto;
          }
        }
        .single-staff__content .staf-image img {
          min-width: 200px;
          width: 200px;
          aspect-ratio: 1/1;
          object-fit: contain;
          border-radius: 50%;
          border: 1px solid black;
        }
        @media screen and (max-width: 1200px) {
          .single-staff__content .staf-image img {
            min-width: 200px;
            width: 200px;
            aspect-ratio: 1/1;
            object-fit: cover;
            /* object-position: top; */
          }
        }
        @media screen and (max-width: 576px) {
          .single-staff__content .staf-image img {
            min-width: 200px;
            width: 200px;
            aspect-ratio: 1/1;
          }
        }
        .single-staff__content .staf-info .name {
          margin-bottom: 5px;
        }
        .single-staff__content .staf-info .designation {
          display: block;
          margin-bottom: 15px;
        }
        .single-staff__content .staf-info__social {
          margin-bottom: 15px;
          display: flex;
          gap: 10px;
        }
        .single-staff__content .staf-info__social i {
          font-size: 16px;
          color: var(--rt-body);
          transition: var(--transition);
        }
        .single-staff__content .staf-info__social i:hover {
          color: var(--rt-primary-2);
        }
        .single-staff__content .staf-info .email-contact,
        .single-staff__content .staf-info .phone-contact {
          display: block;
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .single-staff__content .staf-info .email-contact span,
        .single-staff__content .staf-info .phone-contact span {
          color: var(--rt-primary);
        }
        .single-staff__content .staf-info .phone-contact {
          margin-bottom: 0;
        }
        .single-staff__content .staf-info__speciality {
          margin-top: 25px;
          border-left: 2px solid var(--rt-primary-2);
          margin-bottom: 30px;
        }
        .single-staff__content .staf-info__speciality p {
          margin-left: 15px;
        }
        .single-staff:hover {
          /* border-color: var(--rt-primary-2); */
          box-shadow: none;
        }
        `}
      </style>
    </>
  );
};

export default AuthorityList;
