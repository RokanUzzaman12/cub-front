import { useStore } from '@nanostores/react';
import { fetchScholarshipsAndFillStore } from '../../loaders/scholarshipLoader';
import { scholarshipList } from '../../stores/scholarships';
import { useEffect } from 'react';

const AvailableScholarships = () => {
  const scholarship_data = useStore(scholarshipList) || {};
  useEffect(() => {
    fetchScholarshipsAndFillStore();
  }, []);
  return (
    <>
      <div className='repeating-content'>
        <div className='heading-container'>
          <h5 className='heading-title'>Merit-Based Scholarships</h5>
        </div>
        <div className='row g-5'>
          {scholarship_data['merit-based-scholarships']?.map((item, index) => {
            const card_color = ['rt-primary-bg', 'rt-theme-bg', 'rt-secondary-bg'][index % 3];
            return (
              <div className='col-lg-6' key={index}>
                <div className={'single-information-box ' + card_color}>
                  <div className='single-info'>
                    <h4 className='title'>{item.title}</h4>
                    <u className='eligibility'>Eligibility:</u>
                    <p>{item.condition}</p>
                    <p className='amount'>
                      <u>Amount:</u>
                      {item.discount} tuition fee waiver
                    </p>
                    <u className='application'>Program:</u>
                    <p>{item.program}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='repeating-content pt--50 pb--50'>
        <div className='heading-container'>
          <h5 className='heading-title'>Specialized Scholarships</h5>
        </div>

        <div className='row g-5'>
          {scholarship_data['specialized-scholarships']?.map((item, index) => {
            const card_color = ['rt-primary-bg', 'rt-theme-bg', 'rt-secondary-bg'][index % 3];
            return (
              <div className='col-lg-6' key={index}>
                <div className={'single-information-box ' + card_color}>
                  <div className='single-info'>
                    <h4 className='title'>{item.title}</h4>
                    <u className='eligibility'>Eligibility:</u>
                    <p>{item.condition}</p>
                    <p className='amount'>
                      <u>Amount:</u>
                      {item.discount} tuition fee waiver
                    </p>
                    <u className='application'>Program:</u>
                    <p>{item.program}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
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
        .repeating-content .title {
          font-size: 28px;
          margin-bottom: 30px;
          text-align: center;
          padding: 20px 0;
        }
        .repeating-content .single-information-box {
          padding: 40px;
          color: var(--rt-white);
        }
        @media screen and (max-width: 1200px) {
          .repeating-content .single-information-box {
            padding: 30px;
          }
        }
      
        .repeating-content .single-information-box.rt-theme-bg .single-info .title {
          color: var(--rt-heading);
        }
      
        .repeating-content .single-information-box.rt-theme-bg .single-info .amount {
          color: var(--rt-heading);
        }
      
        .repeating-content .single-information-box.rt-theme-bg .single-info p {
          color: var(--rt-heading);
        }
      
        .repeating-content .single-information-box.rt-theme-bg .single-info p u {
          color: var(--rt-heading);
        }
      
        .repeating-content .single-information-box.rt-theme-bg .single-info u {
          color: var(--rt-heading);
        }
      
        .repeating-content .single-information-box .single-info .title {
          font-size: 22px;
          color: var(--rt-white);
        }
      
        .repeating-content .single-information-box .single-info .amount {
          display: inline-block;
          margin-bottom: 10px;
        }
      
        .repeating-content .single-information-box .single-info p {
          color: var(--rt-white);
        }
      
        .repeating-content .single-information-box .single-info p u {
          font-weight: 600;
          display: inline-block;
          margin-right: 5px;
        }
      
        .repeating-content .single-information-box .single-info u {
          font-weight: 600;
          margin-bottom: 10px;
          display: block;
        }
      
        .repeating-content .single-information-box.big-box {
          padding: 40px 100px;
        }
        @media screen and (max-width: 1200px) {
          .repeating-content .single-information-box.big-box {
            padding: 40px;
          }
        }
      
        .repeating-content .single-information-box.big-box .title {
          text-align: center;
        }
      
        .repeating-content .single-information-box.big-box .single-info-content {
          display: flex;
          justify-content: space-between;
        }
        @media screen and (max-width: 576px) {
          .repeating-content .single-information-box.big-box .single-info-content {
            flex-wrap: wrap;
            gap: 30px;
          }
        }
      
        .repeating-content
          .single-information-box.big-box
          .single-info-content
          .right-item {
          max-width: 280px;
        }`}
      </style>
    </>
  );
};

export default AvailableScholarships;
