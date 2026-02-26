import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { categoryList } from "../../stores/categoryStore";
import { fetchCategoriesAndFillStore } from "../../loaders/categoriesLoader";
import OfficeEmployees from "../Staffs/OfficeEmployees";

const OfficeMembersList = ({ department }) => {
  const categories = useStore(categoryList) || [];
  useEffect(() => {
    fetchCategoriesAndFillStore();
  }, []);
  return (
    <>
      <section className="rts-faculty rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-11">
              <div className="rts-section mb--50">
                <h3 className="rts-section-title"> Office Member Details</h3>
              </div>
            </div>
          </div>
          {categories.slice(2, 5).map((category, index) => (
            <div key={index} className="faculty-container">
              <div className="heading-container">
                <h4 className="heading-title">{category.name}</h4>
              </div>

              <div className="row justify-content-md-center g-5">
                <OfficeEmployees
                  category={category.slug}
                  department={department}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
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

export default OfficeMembersList;
