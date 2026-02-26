import { useEffect } from 'react';
import { singleNotice } from '../../stores/noticesStore';
import { fetchSingleNoticeAndFillStore } from '../../loaders/noticesLoader';
import { useStore } from '@nanostores/react';

const NoticeDetails = ({ id }) => {
  const NOTICE = useStore(singleNotice) || {};
  useEffect(() => {
    fetchSingleNoticeAndFillStore(id);
  }, [id]);
  return (
    <>
      <div className='rts-notice-details rts-section-padding'>
        <div className='container'>
          <div className='row justify-content-md-center justify-content-start'>
            <div className='col-lg-7 col-md-10 mb-5 mb-lg-0'>
              <div className='rts-notice-full'>
                <div className='notice-content'>
                  <h4 className='notice-title mb--40'>{NOTICE.title}</h4>

                  <div className='notice-content__description' dangerouslySetInnerHTML={{ __html: NOTICE.description }} />
                  <div className='notice-content__download mt--30'>
                    <a href={NOTICE.attachment} className='rts-theme-btn' download>
                      Download{' '}
                      <span>
                        <i className='fa-sharp fa-light fa-file-pdf'></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='col-lg-5 col-md-10'>
              <div className='rts-notice-section'>
                <div className='rts-section rt-between pb--25'>
                  <h4 className='rts-section-title'>Notices</h4>
                  <a href='/notices' className='rts-arrow'>
                    View All{' '}
                    <span>
                      <i className='fa-sharp fa-regular fa-arrow-right'></i>
                    </span>
                  </a>
                </div>
                <div className='rts-tab'>
                  <div className='tab-content' id='pills-tabContent'>
                    <ul className='list-unstyled notice-content-box'>
                      <li className='single-notice'>
                        <div className='single-notice-item'>
                          <div className='notice-date'>
                            20
                            <span>Jan</span>
                          </div>
                          <div className='notice-content'>
                            <p>
                              <a href='notice-details.html'>Notice Regarding Upcoming Campus Event: Spring Fling Carnival.</a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className='single-notice'>
                        <div className='single-notice-item'>
                          <div className='notice-date'>
                            22
                            <span>Jan</span>
                          </div>
                          <div className='notice-content'>
                            <p>
                              <a href='notice-details.html'>Important Notice: Changes to Examination Schedule for Fall Semester 2024.</a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className='single-notice'>
                        <div className='single-notice-item'>
                          <div className='notice-date'>
                            24
                            <span>Jan</span>
                          </div>
                          <div className='notice-content'>
                            <p>
                              <a href='notice-details.html'>Notice Regarding Deadline Extension for Assignment Submission in Biology 101.</a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className='single-notice'>
                        <div className='single-notice-item'>
                          <div className='notice-date'>
                            25
                            <span>Jan</span>
                          </div>
                          <div className='notice-content'>
                            <p>
                              <a href='notice-details.html'>Urgent Notice: Campus Maintenance Work Scheduled for March 5th-7th.</a>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className='single-notice'>
                        <div className='single-notice-item'>
                          <div className='notice-date'>
                            25
                            <span>Jan</span>
                          </div>
                          <div className='notice-content'>
                            <p>
                              <a href='notice-details.html'>Notice of Guest Lecture: Dr. John Smith on Neuroscience Advances.</a>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <style>
        {`
    .rts-notice-section .rts-tab .single-notice {
    border-bottom: 1px solid #eee;
    padding: 25px 0;
    margin-right: 40px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .rts-notice-section .rts-tab .single-notice:first-child {
    border-top: 1px solid #eee;
  }
  .rts-notice-section .rts-tab .single-notice:last-child {
    border-bottom: none;
  }
  .rts-notice-section .rts-tab .single-notice-item {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .rts-notice-section .rts-tab .single-notice-item .notice-date {
    font-size: 24px;
    color: var(--rt-secondary);
    font-family: var(--font-secondary);
    display: flex;
    flex-direction: column;
  }
  .rts-notice-section .rts-tab .single-notice-item .notice-date span {
    font-size: 16px;
    font-weight: 500;
    color: var(--rt-body);
    font-family: var(--font-primary);
  }
  .rts-notice-section .rts-tab .single-notice-item .notice-content p a {
    color: var(--rt-body);
    transition: var(--transition);
  }
  .rts-notice-section .rts-tab .single-notice-item .notice-content p a:hover {
    color: var(--rt-primary);
  }
  `}
      </style>
    </>
  );
};

export default NoticeDetails;
