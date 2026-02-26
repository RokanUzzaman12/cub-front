import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { singleProgram } from '../../stores/programsStore';
import { fetchSingleProgramBySlugAndFillStore } from '../../loaders/programsLoader';
import ProgramCourses from './ProgramCourses';
import ProgramScholarship from './ProgramScholarship';

const ProgramDescription = ({ slug }) => {
  const departmentProgram = useStore(singleProgram) || {};
  const [department, setDepartment] = useState({});
  useEffect(() => {
    const savedDepartment = localStorage.getItem('selectedDepartment');
    if (savedDepartment) {
      setDepartment(JSON.parse(savedDepartment));
    }
    fetchSingleProgramBySlugAndFillStore(slug);
  }, [slug]);
  return (
    <>
      <div className='rts-program rts-section-padding'>
        <div className='container'>
          <div className='rts-program-single-header'>
            <div className='row align-items-center g-3'>
              <div className='col-lg-6'>
                <h3 className='rts-section-title'>{departmentProgram.program_name}</h3>
              </div>
              <div className='col-lg-6'>
                <p className='rts-section-description'>{departmentProgram.program_short_detail}</p>
              </div>
            </div>
          </div>
          <div className='rts-program-description'>
            <div className='row sticky-coloum-wrap'>
              <div className='col-lg-8'>
                <div className='program-description-area'>
                  <div className='program-big-thumb'>
                    <img src={departmentProgram.program_image} alt='program' />
                  </div>
                  <div className='program-about'>
                    <h4 className='title'>About The Program</h4>
                    <p dangerouslySetInnerHTML={{ __html: departmentProgram.program_description }} />
                  </div>
                  <div className='program-credit-area' id='curriculum'>
                    <h5 className='title'>Program Courses: {departmentProgram.program_credits} credits</h5>
                    <p>Core Required Courses for all majors:</p>
                    <ProgramCourses program={slug} />
                  </div>
                  <div className='program-credit-area semister-fee' id='tuiton_fee'>
                    <h5 className='title'>Tuition Fee</h5>
                    <div className='semister-fee__content v_2 bg-light'>
                      <div className='rts-fee-chart'>
                        <div className='rts-fee-chart__content' id='nav-tabContent2'>
                          <table className='table'>
                            <thead className='table-theme'>
                              <tr>
                                <th>Category</th>
                                <th>Cost</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Tution Fee</td>
                                <td>BDT {departmentProgram.tuition_fee}</td>
                              </tr>
                              <tr>
                                <td>Admission Fee </td>
                                <td>BDT {departmentProgram.admission_fee}</td>
                              </tr>
                              <tr>
                                <td>Registration Fee </td>
                                <td>BDT {departmentProgram.registration_fee}</td>
                              </tr>

                              <tr className='table-theme'>
                                <td>Total: </td>
                                <td>
                                  BDT{' '}
                                  {Number(departmentProgram.tuition_fee) + Number(departmentProgram.admission_fee) + Number(departmentProgram.registration_fee)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='program-credit-area semister-fee' id='waiver_info'>
                    <h5 className='title'>Waiver Information</h5>
                    <div className='semister-fee__content v_2 bg-light'>
                      <div className='rts-fee-chart'>
                        <div className='rts-fee-chart__content' id='nav-tabContent2'>
                          <table className='table'>
                            <thead className='table-theme'>
                              <tr>
                                <th>Waiver Category</th>
                                <th>Cost</th>
                              </tr>
                            </thead>
                            <tbody>
                              {departmentProgram.waiver?.map((waiverInfo, index) => {
                                return (
                                  <tr key={index}>
                                    <td>
                                      {waiverInfo.title} - {waiverInfo.percent}%
                                    </td>
                                    <td>BDT {waiverInfo.amount}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* scholarship */}
                </div>
              </div>

              <div className='col-lg-4 sticky-coloum-item'>
                <div className='program-sidebar'>
                  <div className='program-curriculum'>
                    <h6 className='heading-title'>{departmentProgram.program_name}</h6>
                    <div className='program-menu'>
                      <ul className='list-unstyled'>
                        <li>
                          <a href='#curriculum'>
                            <span>
                              <i className='fa-light fa-arrow-right'></i>
                            </span>
                            Course Curriculum
                          </a>
                        </li>
                        <li>
                          <a href='#tuiton_fee'>
                            <span>
                              <i className='fa-light fa-arrow-right'></i>
                            </span>
                            Tuition Fee
                          </a>
                        </li>
                        <li>
                          <a href='#waiver_info'>
                            <span>
                              <i className='fa-light fa-arrow-right'></i>
                            </span>
                            Waiver Information
                          </a>
                        </li>
                        <li>
                          <a href='/admission'>
                            <span>
                              <i className='fa-light fa-arrow-right'></i>
                            </span>
                            Admission
                          </a>
                        </li>
                        <li>
                          <a href='#scholarship-info'>
                            <span>
                              <i className='fa-light fa-arrow-right'></i>
                            </span>
                            Scholarship
                          </a>
                        </li>
                        <li>
                          <a href='/events'>
                            <span>
                              <i className='fa-light fa-arrow-right'></i>
                            </span>
                            Events
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='program-info'>
                    <h5>Department Contact Info</h5>
                    <p>{departmentProgram.program_name}</p>
                    <div className='contact-info'>
                      <h5>Contact:</h5>
                      <p>{department.contact_1}</p>
                    </div>

                    <div className='social-info'>
                      <h5>Social Info:</h5>
                      <div className='social-info-link'>
                        <a href='#'>
                          <i className='fa-brands fa-facebook'></i>
                        </a>
                        <a href='#'>
                          <i className='fa-brands fa-instagram'></i>
                        </a>
                        <a href='#'>
                          <i className='fa-brands fa-linkedin'></i>
                        </a>
                        <a href='#'>
                          <i className='fa-brands fa-pinterest'></i>
                        </a>
                        <a href='#'>
                          <i className='fa-brands fa-youtube'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='program-credit-area semister-fee pb--120 pb__md--80' id='scholarship-info'>
                  <h5 className='title'>Scholarship Information</h5>
                  <ProgramScholarship id={departmentProgram.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
  .rts-program .rts-program-single-header {
    border-bottom: 1px solid #dddddd;
    padding-bottom: 50px;
    margin-bottom: 60px;
  }
  .rts-program .program-about {
    margin-top: 50px;
  }
  .rts-program .program-credit-area {
    margin-top: 50px;
  }
  .rts-program .program-credit-area .title {
    font-size: 26px;
    margin-bottom: 10px;
  }
  .rts-program .program-accordion {
    margin-bottom: 60px;
  }
  .rts-program .program-accordion .accordion {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .rts-program .program-accordion .accordion .accordion-item {
    border: none;
  }
  .rts-program .program-accordion .accordion .accordion-button {
    font-size: 20px;
    font-family: var(--font-secondary);
    color: var(--rt-secondary);
    padding: 17px 20px;
    line-height: 100%;
    border: 1px solid var(--rt-line);
  }
  .rts-program .program-accordion .accordion .accordion-button:focus {
    box-shadow: none;
  }
  .rts-program .program-accordion .accordion .accordion-button:not(.collapsed) {
    box-shadow: none;
    background: transparent;
  }
  .rts-program .program-accordion .accordion .accordion-button::after {
    content: "+";
    background-image: none;
    font-family: var(--fontawesome);
    height: 24px;
    width: 24px;
    border: 1px solid var(--rt-secondary);
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .rts-program
    .program-accordion
    .accordion
    .accordion-button:not(.collapsed)::after {
    content: "-";
    font-family: var(--fontawesome);
    background-image: none;
  }
  .rts-program .program-accordion .accordion .accordion-body-content .table {
    margin-top: 20px;
  }
  .rts-program
    .program-accordion
    .accordion
    .accordion-body-content
    .table-theme {
    background: var(--rt-primary);
    color: var(--rt-white);
  }
  .rts-program
    .program-accordion
    .accordion
    .accordion-body-content
    .table-theme
    td {
    padding: 12px;
    font-weight: 600;
    font-size: 18px;
    font-family: var(--font-secondary);
  }
  .rts-program
    .program-accordion
    .accordion
    .accordion-body-content
    .table
    tbody {
    border: 1px solid var(--rt-line);
  }
  .rts-program
    .program-accordion
    .accordion
    .accordion-body-content
    .table
    tbody
    tr {
    border-bottom: 1px solid var(--rt-line);
  }
  .rts-program
    .program-accordion
    .accordion
    .accordion-body-content
    .table
    tbody
    tr
    td {
    padding: 12px;
    color: var(--rt-body);
  }

  .program-accordion {
    margin-bottom: 60px;
  }
  .program-accordion .accordion {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .program-accordion .accordion .accordion-item {
    border: none;
  }
  .program-accordion .accordion .accordion-button {
    font-size: 20px;
    font-family: var(--font-secondary);
    color: var(--rt-secondary);
    padding: 17px 20px;
    line-height: 100%;
    border: 1px solid var(--rt-primary-2);
  }
  .program-accordion .accordion .accordion-button:focus {
    box-shadow: none;
  }
  .program-accordion .accordion .accordion-button:not(.collapsed) {
    box-shadow: none;
    background: transparent;
  }
  .program-accordion .accordion .accordion-button::after {
    content: "+";
    background-image: none;
    font-family: var(--fontawesome);
    height: 24px;
    width: 24px;
    border: 1px solid var(--rt-secondary);
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .program-accordion .accordion .accordion-button:not(.collapsed)::after {
    content: "-";
    font-family: var(--fontawesome);
    background-image: none;
  }
  .program-accordion .accordion .accordion-body-content .table {
    margin-top: 20px;
  }
  .program-accordion .accordion .accordion-body-content .table-theme {
    background: var(--rt-primary);
    color: var(--rt-white);
  }
  .program-accordion .accordion .accordion-body-content .table-theme tr th {
    padding: 12px;
    font-family: var(--font-secondary);
    font-weight: 400;
  }
  .program-accordion .accordion .accordion-body-content .table-theme td {
    padding: 12px;
    font-weight: 600;
    font-size: 18px;
    font-family: var(--font-secondary);
  }
  .program-accordion .accordion .accordion-body-content .table tbody {
    border: 1px solid var(--rt-line);
  }
  .program-accordion .accordion .accordion-body-content .table tbody tr {
    border-bottom: 1px solid var(--rt-line);
  }
  .program-accordion .accordion .accordion-body-content .table tbody tr td {
    padding: 12px;
    color: var(--rt-body);
  }
  .program-sidebar {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
  @media screen and (max-width: 992px) {
    .program-sidebar {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 1200px) {
    .program-sidebar {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 992px) {
    .program-sidebar {
      margin-left: 0;
      margin-top: 50px;
    }
  }
  .program-sidebar .program-curriculum h6 {
    color: var(--rt-white);
    background: var(--rt-heading);
    padding: 13px 0;
    text-align: center;
    margin-bottom: 0;
  }
  .program-sidebar .program-curriculum .program-menu {
    border: 1px solid var(--rt-line);
  }
  .program-sidebar .program-curriculum .program-menu ul {
    padding: 0;
    margin: 0;
  }
  .program-sidebar .program-curriculum .program-menu ul li {
    padding: 11px 20px;
    margin: 0;
  }
  .program-sidebar .program-curriculum .program-menu ul li:not(:last-child) {
    border-bottom: 1px solid var(--rt-line);
  }
  .program-sidebar .program-curriculum .program-menu ul li a {
    color: var(--rt-secondary);
    transition: var(--transition);
  }
  .program-sidebar .program-curriculum .program-menu ul li a span {
    margin-right: 10px;
  }
  .program-sidebar .program-curriculum .program-menu ul li a:hover {
    color: var(--rt-primary-2);
  }
  .program-sidebar .program-info {
    padding: 40px 35px 50px 40px;
    background: var(--rt-primary);
  }
  .program-sidebar .program-info h5 {
    font-size: 24px;
    color: var(--rt-white);
    margin-bottom: 10px;
  }
  .program-sidebar .program-info p {
    font-size: 20px;
    font-family: var(--font-secondary);
    color: var(--rt-white);
  }
  .program-sidebar .program-info .contact-info {
    margin-bottom: 50px;
    margin-top: 80px;
  }
  .program-sidebar .program-info .contact-info h5 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .program-sidebar .program-info .contact-info a {
    display: block;
    color: var(--rt-white);
  }
  .program-sidebar .program-info .social-info h5 {
    font-size: 20px;
    color: var(--rt-white);
    margin-bottom: 10px;
  }
  .program-sidebar .program-info .social-info-link {
    display: flex;
    gap: 20px;
    max-width: max-content;
  }
  .program-sidebar .program-info .social-info-link a {
    font-size: 20px;
    color: var(--rt-white);
    transition: var(--transition);
  }
  .program-sidebar .program-info .social-info-link a:hover {
    color: var(--rt-white);
  }
  .program-sidebar .program-event {
    padding: 50px 44px 60px;
    text-align: center;
    background-image: url(../images/course/event-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  .program-sidebar .program-event > * {
    position: relative;
    z-index: 1;
  }
  .program-sidebar .program-event::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
  }
  .program-sidebar .program-event::after {
    position: absolute;
    content: "";
    height: 92%;
    width: 89%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    left: 20px;
    top: 20px;
  }
  @media screen and (max-width: 992px) {
    .program-sidebar .program-event::after {
      width: 94%;
      height: 90%;
    }
  }
  @media screen and (max-width: 576px) {
    .program-sidebar .program-event::after {
      width: 90%;
      height: 92%;
    }
  }
  .program-sidebar .program-event-content p {
    font-size: 20px;
    font-weight: 500;
    color: var(--rt-white);
    margin-bottom: 40px;
    font-family: var(--font-hind);
  }
  .program-sidebar .program-event-content h4 {
    font-size: 32px;
    color: var(--rt-white);
    margin-bottom: 40px;
  }
  .program-sidebar .program-event-content .single-event-content-meta {
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    color: var(--rt-white);
  }
  .program-sidebar
    .program-event-content
    .single-event-content-meta
    .event-time,
  .program-sidebar
    .program-event-content
    .single-event-content-meta
    .event-date,
  .program-sidebar
    .program-event-content
    .single-event-content-meta
    .event-place {
    display: flex;
    gap: 8px;
  }

  .semister-fee {
    margin-top: 50px;
  }
  .semister-fee__content h5 {
    margin-bottom: 10px;
  }
  .semister-fee__content.v_2 .rts-fee-chart {
    margin-top: 20px;
  }
  .semister-fee__content.v_2 .rts-fee-chart__tab {
    margin-bottom: 30px;
  }
  .semister-fee__content.v_2 .rts-fee-chart__tab .nav-tabs {
    display: flex;
    border: none;
    gap: 10px;
  }
  .semister-fee__content.v_2 .rts-fee-chart__tab .nav-tabs .nav-link {
    display: inline-block;
    max-width: max-content;
    padding: 5px 25px;
    font-size: 15px;
    border: 1px solid var(--rt-primary-2);
    color: var(--rt-primary-2);
    border-radius: 0;
  }
  .semister-fee__content.v_2 .rts-fee-chart__tab .nav-tabs .nav-link.active {
    background: var(--rt-primary-2);
    color: var(--rt-white);
  }
  .semister-fee__content.v_2 .rts-fee-chart__tab .nav-tabs .nav-link:focus {
    border-color: var(--rt-primary-2) !important;
  }
  .semister-fee__content.v_2 .rts-fee-chart__content .table .table-theme {
    background: var(--rt-primary-2);
  }
  .semister-fee__content.v_2 .rts-fee-chart__content .table .table-theme td {
    color: var(--rt-white);
    font-weight: 600;
    text-align: center;
    padding: 15px 20px;
    border: 1px solid var(--rt-line);
  }
  .semister-fee__content.v_2 .rts-fee-chart__content .table tbody tr th {
    vertical-align: middle;
    text-align: center;
    background: #f5f3ff;
  }
  .semister-fee__content.v_2 .rts-fee-chart__content .table tbody td {
    padding: 15px 20px;
    font-weight: 400;
    text-align: center;
    color: var(--rt-secondary);
    vertical-align: middle;
    border: 1px solid var(--rt-line);
  }
  .semister-fee__content.v_2 .rts-fee-chart__content .table tbody td span {
    display: block;
    color: var(--rt-body);
  }
  .semister-fee__content.v_2 .rts-fee-chart__content .table .table-theme-theme {
    background: var(--rt-heading);
  }
  .semister-fee__content.v_2
    .rts-fee-chart__content
    .table
    .table-theme-theme
    td {
    color: var(--rt-white);
    text-align: center;
    padding: 15px 20px;
    font-weight: 400;
    vertical-align: middle;
    border: 1px solid var(--rt-line);
    min-width: 200px;
  }
  .semister-fee__content.v_2
    .rts-fee-chart__content
    .table
    .table-theme-theme.border-none
    td {
    border: none;
  }
  .semister-fee .rts-fee-chart {
    margin-top: 20px;
  }
  .semister-fee .rts-fee-chart__tab {
    margin-bottom: 30px;
  }
  .semister-fee .rts-fee-chart__tab .nav-tabs {
    display: flex;
    border: none;
    gap: 10px;
  }
  .semister-fee .rts-fee-chart__tab .nav-tabs .nav-link {
    display: inline-block;
    max-width: max-content;
    padding: 12px 25px;
    border: 1px solid var(--rt-primary-2);
    color: var(--rt-primary-2);
    border-radius: 0;
  }
  .semister-fee .rts-fee-chart__tab .nav-tabs .nav-link.active {
    background: var(--rt-primary-2);
    color: var(--rt-white);
  }
  .semister-fee .rts-fee-chart__tab .nav-tabs .nav-link:focus {
    border-color: var(--rt-theme) !important;
  }
  .semister-fee .rts-fee-chart__content .table {
    overflow-y: scroll;
  }
  .semister-fee .rts-fee-chart__content .table .table-theme {
    background: var(--rt-primary);
  }
  .semister-fee .rts-fee-chart__content .table .table-theme td,
  .semister-fee .rts-fee-chart__content .table .table-theme th {
    color: var(--rt-white);
    font-weight: 600;
    text-align: center;
    padding: 15px 20px;
    border: 1px solid var(--rt-line);
    min-width: 200px;
  }
  .semister-fee .rts-fee-chart__content .table tbody tr td {
    padding: 15px 20px;
    font-weight: 400;
    text-align: center;
    color: var(--rt-secondary);
    vertical-align: middle;
    border: 1px solid var(--rt-line);
  }
  .semister-fee .rts-fee-chart__content .table tbody tr td span {
    display: block;
    color: var(--rt-body);
  }
  .semister-fee .rts-fee-chart__content .table tbody tr td[rowspan="3"] {
    background: #f5f3ff;
  }
  .semister-fee .rts-fee-chart__content .table .table-theme-theme {
    background: var(--rt-heading);
  }
  .semister-fee .rts-fee-chart__content .table .table-theme-theme td {
    color: var(--rt-white);
    text-align: center;
    padding: 15px 20px;
    font-weight: 400;
    vertical-align: middle;
    border: 1px solid var(--rt-line);
  }
  .semister-fee
    .rts-fee-chart__content
    .table
    .table-theme-theme.border-none
    td {
    border: none;
  }
  .semister-fee .rts-fee-chart__content .tab-pane {
    display: none;
    visibility: hidden;
  }
  .semister-fee .rts-fee-chart__content .tab-pane.active {
    display: block;
    visibility: visible;
  }
  @media screen and (max-width: 992px) {
    .semister-fee .rts-fee-chart__content .tab-pane.active {
      overflow-y: scroll;
    }
  }
    `}
      </style>
    </>
  );
};

export default ProgramDescription;
