import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { activeSessionList } from "../../stores/activeSession";
import { fetchActiveSessionsAndFillStore } from "../../loaders/activeSessions";

const CurrentSemester = () => {
  const sessionLists = useStore(activeSessionList) || [];
  useEffect(() => {
    fetchActiveSessionsAndFillStore();
  }, []);
  return (
    <>
      <div className="container">
        <h3 className="information-title"></h3>
        <div className="row">
          <div className="rts-section">
            <div className="col-lg-6 col-md-6">
              <div className="rts-event-section-content">
                <ul className="list-unstyled rts-counter">
                  <li className="single-event">
                    <div className="single-event-counter">
                      <p>
                        Admission <br /> Hotline
                      </p>
                    </div>
                    <div className="single-event-content">+8801707070282</div>
                  </li>
                  <li className="single-event">
                    <div className="single-event-counter">
                      <p>Mobile &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="single-event-content">
                      +8801707070280, +8801707070281, +8801707070282,
                      +8801707070284
                    </div>
                  </li>
                  <li className="single-event">
                    <div className="single-event-counter">
                      <p>Telephone</p>
                    </div>
                    <div className="single-event-content">
                      +8802226602580-6 (Ext:1008)
                    </div>
                  </li>
                  <li className="single-event">
                    <div className="single-event-counter">
                      <p>WhatsApp</p>
                    </div>
                    <div className="single-event-content">
                      +8801707070280, +8801707070284
                    </div>
                  </li>
                  <li className="single-event">
                    <div className="single-event-counter">
                      <p>Email &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="single-event-content">
                      admissions@cub.edu.bd
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center">
              {sessionLists.map((session, index) => (
                <div className="active-session text-center" key={index}>
                  <h3 className="session-title">{session.name}</h3>
                  <p>
                    Last Date of Application:{" "}
                    <b>{session.application_deadline}</b>
                  </p>
                </div>
              ))}
              <a
                href="https://cub.edu.bd/apply.php"
                class="rts-theme-btn btn-arrow"
              >
                Apply Now
                <span>
                  <i class="fa-regular fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
           .rts-section {
                display: flex;
                justify-content: space-between;
                margin-bottom: 50px;
                padding-bottom: 50px;
                text-align: center
            }
            .information-title{
                margin-bottom: 50px;
                font-size: 40px;
                font-weight: normal;
                text-align: center;
            }
            @media screen and (max-width: 768px) {
            .rts-section {
                flex-wrap: wrap;
                gap: 30px;
               justify-content: center;
                }
                .information-title{
                    margin-bottom: 40px;
                    font-size: 30px;
                }
            }
            .rts-section-description {
                font-size: 28px
            }
            @media screen and (max-width: 768px) {
                .rts-section-description {
                padding-left: 0;
                border: none;
                font-size: 22px
                }
            }
  
            .active-session{
                margin-bottom: 20px;
            }
            .active-session .session-title{
                margin-bottom: 0;
                font-size: 28px;
            }
            .active-session.text-center { text-align: center; }
            @media screen and (max-width: 768px) {
              .active-session .session-title { font-size: 24px; }
            }

            .rts-event-section-content .rts-counter {
            counter-reset: rt-counter;
            margin-top: 0;
          }
          .rts-event-section-content .single-event {
            margin: 0;
            padding: 20px 40px;
            background: #f6f6f6;
            display: flex;
            gap: 20px;
            align-items: center;
            position: relative;
            z-index: 1;
            overflow: hidden;
            border: 1px solid var(--rt-white);

            cursor: pointer;
          }
          @media screen and (max-width: 576px) {
            .rts-event-section-content .single-event {
              flex-wrap: wrap;
              gap: 50px;
              justify-content: center;
              text-align: center;
            }
          }
          .rts-event-section-content .single-event > * {
            position: relative;
            z-index: 10;
          }
          .rts-event-section-content .single-event::before {
            position: absolute;
            content: "";
            left: 22%;
            height: 100%;
            width: 1px;
            background: var(--rt-white);
            transition: var(--transition);
          }
          @media screen and (max-width: 992px) {
            .rts-event-section-content .single-event::before {
              left: 140px;
            }
          }
          @media screen and (max-width: 768px) {
            .rts-event-section-content .single-event::before {
              left: 125px;
            }
          }
          @media screen and (max-width: 576px) {
            .rts-event-section-content .single-event::before {
              display: none;
            }
          }
          .rts-event-section-content .single-event::after {
            position: absolute;
            height: 100%;
            width: 100%;
            content: "";
            left: 0;
            top: 0;
            top: -50%;
            left: 0;
            background: var(--rt-primary);
            z-index: -1;
            opacity: 0;
            transition: var(--transition);
          }
          .rts-event-section-content
            .single-event:hover
            .single-event-counter
            .count-number {
            /* color: var(--rt-white); */
          }
          .rts-event-section-content .single-event:hover .single-event-content-meta {
            /* color: var(--rt-white); */
          }
          .rts-event-section-content .single-event:hover .single-event-content h5 {
            /* color: var(--rt-white); */
          }
          .rts-event-section-content .single-event:hover::after {
            /* opacity: 0; */
            /* top: 0; */
          }
          .rts-event-section-content .single-event-counter {
            padding-right: 20px;
            position: relative;
          }
          @media screen and (max-width: 576px) {
            .rts-event-section-content .single-event-counter {
              padding-right: 0;
            }
          }
          @media screen and (max-width: 576px) {
            .rts-event-section-content .single-event-counter {
              width: 100%;
            }
            .rts-event-section-content .single-event-counter::after {
              position: absolute;
              content: "";
              height: 1px;
              width: 100%;
              background: var(--rt-white);
              left: 0;
              bottom: -30px;
            }
          }
          .rts-event-section-content .single-event-counter .count-number {
            font-size: 80px;
            position: relative;
            transition: var(--transition);
            font-family: var(--font-hind);
            font-weight: 600;
          }
          @media screen and (max-width: 768px) {
            .rts-event-section-content .single-event-counter .count-number {
              font-size: 60px;
            }
          }
          @media screen and (max-width: 576px) {
            .rts-event-section-content .single-event-counter .count-number {
              font-size: 50px;
            }
          }
          .rts-event-section-content .single-event-counter .count-number::before {
            content: counter(rt-counter, decimal-leading-zero);
            counter-increment: rt-counter;
          }
          .rts-event-section-content .single-event-content {
            padding-left: 20px;
          }
          @media screen and (max-width: 1200px) {
            .rts-event-section-content .single-event-content {
              padding-left: 10px;
            }
          }
          @media screen and (max-width: 576px) {
            .rts-event-section-content .single-event-content {
              padding-left: 0 !important;
            }
          }
          @media screen and (max-width: 768px) {
            .rts-event-section-content .single-event-content {
              padding-left: 10px;
            }
          }
          .rts-event-section-content .single-event-content .single-event-content-meta {
            display: flex;
            gap: 20px;
            align-items: center;
            color: var(--rt-secondary);
            transition: var(--transition);
          }
          @media screen and (max-width: 1200px) {
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta {
              gap: 15px;
              flex-wrap: wrap;
            }
          }
          .rts-event-section-content
            .single-event-content
            .single-event-content-meta
            span
            i {
            font-size: 18px;
          }
          @media screen and (max-width: 768px) {
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta {
              gap: 10px;
              flex-wrap: wrap;
            }
          }
          @media screen and (max-width: 576px) {
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta {
              gap: 15px;
              flex-wrap: wrap;
              justify-content: center;
            }
          }
          .rts-event-section-content
            .single-event-content
            .single-event-content-meta
            .event-date,
          .rts-event-section-content
            .single-event-content
            .single-event-content-meta
            .event-time,
          .rts-event-section-content
            .single-event-content
            .single-event-content-meta
            .event-place {
            display: flex;
            gap: 10px;
            align-items: center;
          }
          @media screen and (max-width: 1200px) {
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta
              .event-date,
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta
              .event-time,
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta
              .event-place {
              gap: 5px;
            }
          }
          @media screen and (max-width: 768px) {
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta
              .event-date,
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta
              .event-time,
            .rts-event-section-content
              .single-event-content
              .single-event-content-meta
              .event-place {
              gap: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default CurrentSemester;
