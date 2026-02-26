import { useEffect, useMemo, useState } from "react";
import { useStore } from "@nanostores/react";
import { facultyList } from "../../stores/facultiesStore";
import { fetchFacultiesAndFillStore } from "../../loaders/facultiesLoader";
import FacultyEmployees from "../Staffs/FacultyEmployees";
import { removeDash } from "../../lib/removeDash";
import { facultyCategoryWiseStaffs } from "../../stores/staffStore";
import { fetchFacultyCategoryWiseStaffsAndFillStore } from "../../loaders/staffLoader";

const FacultyMembersList = ({ staffType }) => {
  const faculties = useStore(facultyList) || [];
  useEffect(() => {
    fetchFacultiesAndFillStore();
  }, [staffType]);
  const [searchTerm, setSearchTerm] = useState("");

  const allStaffs = useStore(facultyCategoryWiseStaffs);

  useEffect(() => {
    if (!faculties?.length) return;

    faculties.forEach((faculty) => {
      if (!faculty?.slug) return;

      const storeKey = `${faculty.slug}:${staffType}`;

      if (!allStaffs[storeKey]) {
        fetchFacultyCategoryWiseStaffsAndFillStore(faculty.slug, staffType);
      }
    });
  }, [faculties, staffType]);

  const processedFaculties = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return faculties.map((faculty) => {
      const storeKey = `${faculty.slug}:${staffType}`;
      const facultyStaffs = allStaffs[storeKey] || [];

      const filtered = term
        ? facultyStaffs.filter((s) => {
            const name = (s.name || "").toLowerCase();
            const designation = (s.designation || "").toLowerCase();
            return name.includes(term) || designation.includes(term);
          })
        : facultyStaffs;

      return {
        ...faculty,
        staffs: filtered,
      };
    });
  }, [faculties, allStaffs, staffType, searchTerm]);

  return (
    <>
      <section className="rts-faculty rts-section-padding">
        <div className="container">
          <div className="row mb--30 align-items-center justify-content-end">
            <div className="col-lg-4 col-md-6">
              <div className="search-wrapper-left">
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
                <input
                  type="search"
                  placeholder="Search by name or designation"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control search-input"
                />
              </div>
            </div>
          </div>
          {processedFaculties.map((faculty, index) => (
            <div key={index} className="faculty-container">
              <div className="heading-container">
                {faculty.staffs?.length > 0 && (
                  <h4 className="heading-title">{faculty.name}</h4>
                )}
              </div>

              <div className="row justify-content-md-center g-5">
                <FacultyEmployees
                  category={staffType}
                  faculty={faculty.slug}
                  search={searchTerm}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
        .rts-section-title{
          
        }
        .faculty-container{
          margin-bottom: 50px
        }
        .search-wrapper-left{
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .search-wrapper-left .search-icon{
          position: absolute;
          left: 12px;
          color: var(--rt-secondary);
          font-size: 16px;
        }
        .search-wrapper-left .search-input{
          padding-left: 46px;
          padding-right: 16px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.08);
          height: 52px;
          width: 100%;
          font-size: 16px;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .search-wrapper-left { justify-content: center; }
        }
        .search-wrapper-left .search-input::placeholder { font-size: 15px; opacity: 0.8; }
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

export default FacultyMembersList;
