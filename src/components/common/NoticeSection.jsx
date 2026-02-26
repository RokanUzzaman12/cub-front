import { getDay, getMonth } from "../../lib/splitDate";

const NoticeSection = ({ facultyNotices = [] }) => {
  return (
    <>
      <div className="rts-notice-section">
        <div className="rts-section rt-between pb--25">
          <h2 className="rts-section-title" style={{ textAlign: "left" }}>
            Notices
          </h2>
          <a href="#" className="rts-arrow">
            View All{" "}
            <span>
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </span>
          </a>
        </div>
        <div className="rts-tab">
          <div className="tab-content" id="pills-tabContent">
            {!facultyNotices || facultyNotices.length === 0 ? (
              <div className="row">
                <div className="col-12">
                  <div
                    className="rts-empty-state text-center"
                    style={{
                      padding: 40,
                      border: "1px solid var(--rt-line)",
                      borderRadius: 6,
                    }}
                  >
                    <h4>No notices found</h4>
                    <h6>There are currently no notices available.</h6>
                  </div>
                </div>
              </div>
            ) : (
              <ul className="list-unstyled notice-content-box">
                {facultyNotices.map((notice, index) => (
                  <li className="single-notice" key={index}>
                    <div className="single-notice-item">
                      <div className="notice-date">
                        {getDay(notice.date)}
                        <span>{getMonth(notice.date)}</span>
                      </div>
                      <div className="notice-content">
                        <p>
                          <a href={`/notices/${notice.id}`}> {notice.title} </a>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
  .rts-notice-section {
    padding-left: 75px;
  }
  @media screen and (max-width: 1200px) {
    .rts-notice-section {
      padding-left: 30px;
    }
  }
  @media screen and (max-width: 992px) {
    .rts-notice-section {
      padding-left: 0;
    }
  }
  .rts-notice-section .rts-tab .nav {
    margin: 0;
    display: flex;
    gap: 10px;
  }
  .rts-notice-section .rts-tab .nav-item {
    margin: 30px 0 0 0;
  }
  .rts-notice-section .rts-tab .nav-item .nav-link {
    padding: 7px 15px;
    border: 1px solid #eee;
    border-radius: 0;
    color: var(--rt-secondary);
    font-size: 14px;
    transition: var(--transition);
    font-weight: 500;
  }
  .rts-notice-section .rts-tab .nav-item .nav-link:hover {
    background: var(--rt-primary);
    color: var(--rt-white);
  }
  .rts-notice-section .rts-tab .nav-item .nav-link.active {
    background: var(--rt-primary);
    color: var(--rt-white);
  }
  .rts-notice-section .rts-tab .tab-content {
    height: 380px;
    overscroll-behavior: smooth;
    overflow-y: scroll;
  }
  .rts-notice-section .rts-tab .tab-content::-webkit-scrollbar {
    width: 12px;
  }
  .rts-notice-section .rts-tab .tab-content::-webkit-scrollbar-track {
    background: #f1f1ff;
  }
  .rts-notice-section .rts-tab .tab-content::-webkit-scrollbar-thumb {
    background-color: #36348e;
    border-radius: 0;
    border: 4px solid #f1f1ff;
  }
  .rts-notice-section .rts-tab .tab-content {
    scrollbar-color: #36348e #f1f1ff;
    scrollbar-width: medium;
  }
  .rts-notice-section .rts-tab .tab-content {
    -ms-overflow-style: none;
    /* Hide scrollbar in Edge */
    scrollbar-width: thin;
    scrollbar-color: #36348e #f1f1ff;
  }
  .rts-notice-section .rts-tab .notice-content-box {
    position: relative;
    margin: 0;
  }
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

  .rts-notice-details .rts-tab .tab-content {
    height: 100%;
    overflow-y: unset;
  }
  `}
      </style>
    </>
  );
};

export default NoticeSection;
