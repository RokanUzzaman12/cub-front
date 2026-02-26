import { useStore } from '@nanostores/react';
import { departmentCategoryWiseStaffs } from '../../stores/staffStore';
import { fetchDepartmentCategoryWiseStaffsAndFillStore } from '../../loaders/staffLoader';
import { useEffect } from 'react';

const DepartmentEmployees = ({ category, department }) => {
  const storeKey = `${department}:${category}`;
  const allStaffs = useStore(departmentCategoryWiseStaffs);
  const departmentStaffs = allStaffs[storeKey] || [];
  useEffect(() => {
    fetchDepartmentCategoryWiseStaffsAndFillStore(department, category);
  }, [department, category]);
  return (
    <>
      {departmentStaffs.map((staff, index) => (
        <div className='col-lg-6 col-md-11' key={index}>
          <div className='single-staff'>
            <div className='single-staff__content'>
              <div className='staf-image'>
                <img src={staff.image} alt='staff-image' />
              </div>
              <div className='staf-info'>
                <h5 className='name'>{staff.name}</h5>
                <span className='designation'>{staff.designation}</span>
                <div className='staf-info__social'>
                  <a href={staff.facebook_link}>
                    <i className='fa-brands fa-facebook-f' />
                  </a>
                  <a href={staff.linkedin_link}>
                    <i className='fa-brands fa-linkedin-in' />
                  </a>
                  <a href={staff.medium_link}>
                    <i className='fa-brands fa-medium' />
                  </a>
                  <a href={staff.youtube_link}>
                    <i className='fa-brands fa-youtube' />
                  </a>
                </div>
                <a href={`mailto:${staff.email}`} className='email-contact'>
                  <span>
                    <i className='fa-light fa-envelope' />
                  </span>
                  {staff.email}
                </a>
                <a href={`calltto:${staff.phone}`} className='phone-contact'>
                  <span>
                    <i className='fa-light fa-phone' />
                  </span>
                  {staff.phone}
                </a>
                <div className='staf-info__speciality'>
                  <p>{staff.experties}</p>
                </div>
                <a href={`/staffs/${category}/${staff.id}`} className='rts-theme-btn border-btn'>
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <style>
        {`
  .single-staff {
    border: 1px solid var(--rt-line);
    padding: 20px;
    transition: var(--transition);
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
  }
  .single-staff__content {
    display: flex;
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
  } `}
      </style>
    </>
  );
};

export default DepartmentEmployees;
