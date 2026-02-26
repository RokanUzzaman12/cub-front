import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { fetchEventsAndFillStore } from "../../loaders/eventsLoader";
import { eventList } from "../../stores/eventsStore";

const EventSection = () => {
  const EVENTS = useStore(eventList);

  useEffect(() => {
    fetchEventsAndFillStore();
  }, []);
  return (
    <>
      <div className="rts-event rts-section-padding">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-md-start g-5">
            {EVENTS.map((event, index) => (
              <div className="col-lg-4 col-md-6 col-sm-10 d-flex" key={index}>
                {/* make the column a flex container so card can stretch */}
                <div className="single-event" style={{ width: "100%" }}>
                  <div className="event single-event__content">
                    <div className="event__thumb">
                      <img src={event.image} alt="event thumbnail" />
                    </div>
                    <div className="event__meta">
                      <div className="event__meta--da">
                        <div className="event-date">
                          <span>
                            <i className="fal fa-calendar" />
                          </span>
                          <span>{event.date}</span>
                        </div>
                        <div className="event-time">
                          <span>
                            <i className="fa-sharp fa-thin fa-clock" />
                          </span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <h5 className="event__title">
                        <a href={`/events/${event.id}`}>{event.title}</a>
                      </h5>
                    </div>
                    <div className="event-place">
                      <span>
                        <i className="fa-sharp fa-thin fa-location-dot" />
                      </span>
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .rts-event .single-event {
    padding: 30px 30px 50px 30px;
    border: 1px solid var(--rt-line);
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  @media screen and (max-width: 1200px) {
    .rts-event .single-event {
      padding: 30px;
    }
  }
  .rts-event .single-event:hover {
    /* border-color: var(--rt-white); */
    box-shadow: none;
  }
  .rts-event .single-event__content { display:flex; flex-direction:column; height:100%; }
  .rts-event .single-event__content .event__thumb {
    overflow: hidden;
    margin-bottom: 18px;
    flex-shrink: 0;
  }
  .rts-event .single-event__content .event__thumb img {
    width: 100%;
    height: auto;
    transition: var(--transition);
    transform: scale(1);
    display:block;
  }
  .rts-event .single-event__content .event__thumb:hover img {
    transform: scale(1.1);
  }
  .rts-event .single-event__content .event__meta {
    margin-bottom: 20px;
  }
  .rts-event .single-event__content .event__meta--da {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1200px) {
    .rts-event .single-event__content .event__meta--da {
      flex-wrap: wrap;
      gap: 10px;
    }
  }
  .rts-event .single-event__content .event__meta--da .event-date,
  .rts-event .single-event__content .event__meta--da .event-time {
    display: flex;
    gap: 8px;
  }
  .rts-event .single-event__content .event__meta--da .event-date span i,
  .rts-event .single-event__content .event__meta--da .event-time span i {
    color: var(--rt-primary-2);
  }
  .rts-event .single-event__content .event__meta .event__title a {
    color: var(--rt-secondary);
    transition: var(--transition);
  }
  .rts-event .single-event__content .event__meta .event__title a:hover {
    color: var(--rt-primary-2);
  }
  .rts-event .single-event__content .event-place {
    display: flex;
    gap: 8px;
    margin-top: auto; /* push place to bottom so heights match */
  }
  .rts-event .single-event__content .event-place span i {
    color: var(--rt-primary-2);
  }
  .rts-event-details .event-details__content--thumb {
    margin-bottom: 50px;
  }
  .rts-event-details .event-details__content--thumb img {
    width: 100%;
  }
  .rts-event-details .event-details__content--text {
    margin-bottom: 30px;
  }
  .rts-event-details .event-details__content--text .rts-section-title {
    font-size: 32px;
    margin-bottom: 20px;
  }
  .rts-event-details .event-details__content--feature .single-feature {
    position: relative;
    margin-left: 30px;
  }
  .rts-event-details
    .event-details__content--feature
    .single-feature:not(:last-child) {
    margin-bottom: 25px;
  }
  .rts-event-details .event-details__content--feature .single-feature::before {
    position: absolute;
    content: "";
    left: -30px;
    top: 5px;
    background-image: url(../images/icon/arrow-rotate.svg);
    height: 18px;
    width: 14px;
  }
  .rts-event-details
    .event-details__content--feature
    .single-feature
    .feature-heading {
    font-family: var(--font-primary);
    color: var(--rt-secondary);
    margin-bottom: 10px;
  }
  .rts-event-details .event-sidebar {
    margin-left: 50px;
  }
  @media screen and (max-width: 1200px) {
    .rts-event-details .event-sidebar {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 992px) {
    .rts-event-details .event-sidebar {
      margin-top: 50px;
      margin-left: 0;
    }
  }
  .rts-event-details .event-sidebar .event-information,
  .rts-event-details .event-sidebar .event-venue {
    background: #f6f6f6;
    border: 1px solid var(--rt-primary-2);
    padding: 40px;
  }
  .rts-event-details .event-sidebar .event-information .rts-section-title,
  .rts-event-details .event-sidebar .event-venue .rts-section-title {
    margin-bottom: 30px;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat,
  .rts-event-details .event-sidebar .event-venue .single-info .info-repeat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat:not(:last-child),
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat:not(:last-child) {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    margin-bottom: 25px;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat
    .left-side,
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat
    .left-side {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat
    .left-side.bold,
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat
    .left-side.bold {
    font-weight: 500;
    color: var(--rt-secondary);
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat
    .left-side
    span,
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat
    .left-side
    span {
    height: 50px;
    width: 50px;
    background: transparent;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: 1px solid var(--rt-primary-2);
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat
    .left-side
    span
    i,
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat
    .left-side
    span
    i {
    font-size: 24px;
    color: var(--rt-primary-1);
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat
    .right-side
    .desc.price,
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat
    .right-side
    .desc.price {
    font-size: 24px;
    font-weight: 700;
    color: var(--rt-secondary);
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat
    .right-side
    .desc.location,
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat
    .right-side
    .desc.location {
    max-width: 220px;
    display: inline-block;
    text-align: right;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .single-info
    .info-repeat
    .right-side
    .desc
    .social-links,
  .rts-event-details
    .event-sidebar
    .event-venue
    .single-info
    .info-repeat
    .right-side
    .desc
    .social-links {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .book-button
    .rts-theme-btn,
  .rts-event-details .event-sidebar .event-venue .book-button .rts-theme-btn {
    width: 100%;
    max-width: 100%;
    margin-top: 50px;
  }
  .rts-event-details .event-sidebar .event-information .event-count-down,
  .rts-event-details .event-sidebar .event-venue .event-count-down {
    margin-top: 30px;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .event-count-down
    .count-item,
  .rts-event-details .event-sidebar .event-venue .event-count-down .count-item {
    height: 70px;
    min-width: 70px;
    border-radius: 50%;
    border: 1px solid var(--rt-primary-2);
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .event-count-down
    .count-item:hover,
  .rts-event-details
    .event-sidebar
    .event-venue
    .event-count-down
    .count-item:hover {
    border-color: var(--rt-primary-1);
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .event-count-down
    .count-item
    p,
  .rts-event-details
    .event-sidebar
    .event-venue
    .event-count-down
    .count-item
    p {
    text-align: center;
    font-size: 13px;
    color: var(--rt-primary);
    text-transform: capitalize;
  }
  .rts-event-details
    .event-sidebar
    .event-information
    .event-count-down
    .count-item
    p
    span,
  .rts-event-details
    .event-sidebar
    .event-venue
    .event-count-down
    .count-item
    p
    span {
    display: block;
    font-size: 24px;
    font-weight: 600;
    color: var(--rt-primary);
    font-family: var(--font-primary);
    margin-bottom: -5px;
  }
  .rts-event-details .event-location .rts-section-title {
    font-size: 32px;
    margin-bottom: 35px;
  }
  .rts-event-details .event-location-map {
    margin-bottom: 30px;
  }
  .rts-event-details .event-location-map-iframe {
    min-height: 400px;
    width: 100%;
    filter: grayscale(1);
    border-radius: 6px;
  }
  .rts-event-speaker .rts-section-title {
    margin-bottom: 40px;
  }
  .rts-event-speaker .event-speaker__details {
    text-align: center;
  }
  .rts-event-speaker .event-speaker__details:hover .speaker-social-link {
    opacity: 1;
    bottom: 50px;
  }
  .rts-event-speaker .event-speaker__details .speaker-thumb {
    position: relative;
    margin-bottom: 30px;
  }
  .rts-event-speaker .event-speaker__details .speaker-thumb img {
    min-height: 300px;
    min-height: max-content;
    min-width: 300px;
    min-width: 100%;
    border-radius: 50%;
  }
  .rts-event-speaker .event-speaker__details .speaker-social-link {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    opacity: 0;
    transition: var(--transition);
  }
  .rts-event-speaker .event-speaker__details .speaker-social-link a {
    height: 34px;
    width: 34px;
    background: var(--rt-white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rts-event-speaker .event-speaker__details .speaker-social-link a i {
    font-size: 20px;
    color: var(--rt-primary-1);
  }
  .rts-event-speaker .speaker-meta .speaker__name {
    margin-bottom: 5px;
  }
  .rts-event-speaker .speaker-meta .speaker__name a {
    color: var(--rt-secondary);
    transition: var(--transition);
  }
  .rts-event-speaker .speaker-meta .speaker__name a:hover {
    color: var(--rt-primary-1);
  }
    `}</style>
    </>
  );
};

export default EventSection;
