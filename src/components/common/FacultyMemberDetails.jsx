import { useStore } from "@nanostores/react";
import { fetchSingleStaffAndFillStore } from "../../loaders/staffLoader";
import { singleStaff } from "../../stores/staffStore";
import { useEffect } from "react";

const FacultyMemberDetails = ({ id }) => {
  const staffData = useStore(singleStaff) || {};
  useEffect(() => {
    fetchSingleStaffAndFillStore(id);
  }, [id]);
  return (
    <>
      <section className="rts-faculty-details rts-section-padding">
        <div className="container">
          <div className="row sticky-coloum-wrap justify-content-sm-center g-5">
            <div className="col-lg-4 col-md-10 col-sm-10 sticky-coloum-item">
              <div className="faculty-member">
                <div className="faculty-member__details rt-center">
                  <div className="faculty-member__image">
                    <img src={staffData.image} alt="member image" />
                  </div>
                  <div className="faculty-member__info">
                    <div className="faculty-member__info--social">
                      <a href={staffData.facebook_link}>
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href={staffData.linkedin_link}>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href={staffData.research_gate_link}>
                        <i className="fa-brands fa-researchgate"></i>
                      </a>
                      <a
                        href={staffData.google_scholar_link}
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon--scholar"
                      >
                        {/* inline Google Scholar SVG (Font Awesome brand) */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          width="18"
                          height="18"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M454.9 362.5C454.9 362.5 454.9 362.6 455 362.6C464.2 382 469.4 403.7 469.4 426.6C469.3 509.1 402.5 576 320 576C237.5 576 170.7 509.1 170.7 426.7C170.7 403.8 175.9 382.1 185.1 362.7C186.8 359.1 188.7 355.5 190.7 352C195.1 344.4 200.1 337.3 205.7 330.7C233.1 298.1 274.2 277.4 320.1 277.4C353.7 277.4 384.7 288.5 409.7 307.3C418.8 314.2 427.1 322 434.5 330.8C440.1 337.4 445.1 344.6 449.5 352.1C451.5 355.5 453.3 359.1 455 362.6L454.9 362.5zM481.3 343.7C451.2 285.3 390.3 245.3 320 245.3C249.7 245.3 188.8 285.3 158.7 343.7L64 266.7L320 64L576 266.7L481.3 343.8L481.3 343.7z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href={`mailto:${staffData.email}`}
                      className="email-contact"
                    >
                      <span>
                        <i className="fa-light fa-envelope" />
                      </span>
                      {staffData.email}
                    </a>
                    <a
                      href={`calltto:${staffData.phone}`}
                      className="phone-contact"
                    >
                      <span>
                        <i className="fa-light fa-phone" />
                      </span>
                      {staffData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-10">
              <div className="member-info">
                <div className="member-info__details">
                  <div className="short-info">
                    <h4 className="rts-section-title mb--15">
                      {staffData.name}
                    </h4>
                    <p className="description">{staffData.designation}</p>
                    <p className="text-center">{staffData.person_details}</p>
                  </div>
                  <div className="short-info">
                    <h5 className="rts-section-title">Biography</h5>
                    <p className="text-center">{staffData.biography}</p>
                    <h5 className="rts-section-title">Education</h5>
                    <p className="description">{staffData.education}</p>
                    <h5 className="rts-section-title">AREAS OF EXPERTISE</h5>
                    <p className="text-center">{staffData.experties}</p>
                  </div>
                  <div className="short-info">
                    {staffData?.courses?.length > 0 && (
                      <div className="short-info">
                        <h5 className="rts-section-title">COURSES</h5>
                        <div className="course__single">
                          <ul className="list-unstyled text-center">
                            {staffData.courses.map((course, index) => (
                              <li key={index}>
                                <a href="#">{course.course.course_name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="short-info">
                    {staffData?.publications?.length > 0 && (
                      <div className="short-info">
                        <h5 className="rts-section-title">PUBLICATIONS</h5>
                        <p
                          className="text-center"
                          dangerouslySetInnerHTML={{
                            __html: staffData.publications,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
        .faculty-member__image {
          margin-bottom: 30px;
        }
        .faculty-member__image img {
          height: 100%;
          min-width: 200px;
          width: 200px;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border: 1px solid black;
          border-radius: 50%;

          /* padding: 10px; */
        }
        @media screen and (max-width: 992px) {
          .faculty-member__image img {
            width: 100%;
          }
        }
        .faculty-member__info {
          display: block;
        }
        .faculty-member__info--social {
          margin-bottom: 10px;
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        .faculty-member__info--social i {
          font-size: 16px;
        }
        .faculty-member__info--social a,
        .faculty-member__info--social svg {
          color: #777; /* gray */
          fill: currentColor;
        }
        .faculty-member__info--social .social-icon--scholar {
          position: relative;
          left: -4px;
          top: -3px;
        }
        .faculty-member__info .email-contact,
        .faculty-member__info .phone-contact {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        .faculty-member__info .email-contact span,
        .faculty-member__info .phone-contact span {
          color: var(--rt-primary-2);
        }
        .faculty-member__info .email-contact {
          margin-bottom: 10px;
        }

        .member-info {
          margin-left: 40px;
        }
        @media screen and (max-width: 992px) {
          .member-info {
            margin-left: 0;
          }
        }
        .member-info__details .short-info:not(:last-child) {
          padding-bottom: 50px;
          border-bottom: 1px solid var(--rt-border);
        }
        .member-info__details .short-info:not(:first-child) {
          padding-top: 50px;
        }
        .member-info__details .short-info .designation {
          margin-bottom: 25px;
          display: block;
          font-size: 20px;
        }
        .member-info__details .short-info h5.rts-section-title {
          margin-bottom: 15px;
        }
        .member-info__details .short-info .description:not(:last-child) {
          margin-bottom: 35px;
        }
        .member-info__details .short-info .course__single ul {
          padding: 0;
          margin: 0;
        }
        .member-info__details .short-info .course__single ul li {
          margin-top: 10px;
          margin-bottom: 0;
          transition: var(--transition);
        }
        .member-info__details .short-info .course__single ul li:hover a {
          text-decoration: underline;
        }
        .member-info__details .short-info .course__single ul li a {
          color: var(--rt-primary-2);
        }`}
      </style>
    </>
  );
};

export default FacultyMemberDetails;
