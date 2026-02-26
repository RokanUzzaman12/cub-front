import { useEffect } from "react";
import { singleEvent } from "../../stores/eventsStore";
import { fetchSingleEventAndFillStore } from "../../loaders/eventsLoader";
import { useStore } from "@nanostores/react";

const EventDetails = ({ id }) => {
  const eventDatails = useStore(singleEvent) || {};
  useEffect(() => {
    fetchSingleEventAndFillStore(id);
  }, [id]);
  return (
    <>
      <div className="rts-event-details pt--120">
        <div className="container">
          <div className="row justify-content-md-center justify-content-start">
            <div className="col-lg-7 col-md-10">
              <div className="event-details">
                <div className="event-details__content">
                  <div className="event-details__content--thumb">
                    <img src={eventDatails.image} alt="event details" />
                  </div>
                  <div className="event-details__content--text">
                    <div className="rts-section">
                      <h4
                        className="rts-section-title mb--30"
                        style={{ textAlign: "left" }}
                      >
                        About The Event
                      </h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: eventDatails.description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="event-details__content--feature">
                    {eventDatails.features?.map((feature, index) => (
                      <div className="single-feature" key={index}>
                        <p className="feature-heading">{feature.title}:</p>
                        <p className="feature-description">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Gallery: up to 6 images in 2 rows x 3 columns */}
                  {eventDatails.gallery_images &&
                    eventDatails.gallery_images.length > 0 && (
                      <div
                        className="event-gallery-wrap"
                        aria-label="Event gallery wrap"
                      >
                        <h4 className="event-gallery__title">Gallery</h4>
                        <div
                          className="event-gallery"
                          aria-label="Event gallery"
                        >
                          {eventDatails.gallery_images
                            .slice(0, 6)
                            .map((img, idx) => (
                              <div className="event-gallery__item" key={idx}>
                                <a href={img} target="_blank" rel="noreferrer">
                                  <img
                                    src={img}
                                    alt={`Gallery image ${idx + 1}`}
                                  />
                                </a>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-10">
              <div className="event-sidebar">
                <div className="event-venue">
                  <h5 className="text-center mb--30">Event information</h5>
                  <div className="event-venu-information">
                    <div className="single-info">
                      <div className="info-repeat">
                        <div className="left-side bold">Date:</div>
                        <div className="right-side">
                          <span className="desc">{eventDatails.date}</span>
                        </div>
                      </div>
                      <div className="info-repeat">
                        <div className="left-side bold">Time:</div>
                        <div className="right-side">
                          <span className="desc">{eventDatails.time}</span>
                        </div>
                      </div>
                      <div className="info-repeat">
                        <div className="left-side bold">Venue:</div>
                        <div className="right-side">
                          <span className="desc">{eventDatails.venue}</span>
                        </div>
                      </div>
                      <div className="info-repeat">
                        <div className="left-side bold">Location:</div>
                        <div className="right-side">
                          <span className="desc location">
                            {eventDatails.location}
                          </span>
                        </div>
                      </div>
                      <div className="info-repeat">
                        <div className="left-side bold">Phone Number:</div>
                        <div className="right-side">
                          <span className="desc">
                            <a href={`callto:${eventDatails.contact_info_1}`}>
                              {eventDatails.contact_info_1}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="event-location-map mt--50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2322057029137!2d90.4228680753204!3d23.77474418784136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1f33e7d81%3A0xa7d45a97b942ae04!2sCanadian%20University%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1740999709767!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rts-event-speaker rts-section-padding">
          <div className="container">
            <div className="row">
              <div className="rts-section">
                <h4 className="rts-section-title mb--30">Event Speakers</h4>
              </div>
            </div>

            <div className="row g-5 justify-content-center">
              {eventDatails.speakers?.map((speaker, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="event-speaker">
                    <div className="event-speaker__details">
                      <div className="speaker-thumb">
                        <img src={speaker.speaker.image} alt="speaker-thumb" />
                        <div className="speaker-social-link">
                          <a href={speaker.speaker.biography}>
                            <i className="fa-brands fa-bluetooth" />
                          </a>
                        </div>
                      </div>
                      <div className="speaker-meta">
                        <h5 className="speaker__name">
                          <a href="#">{speaker.speaker.name}</a>
                        </h5>
                        <span className="designation">
                          {speaker.speaker.designation}
                        </span>
                        {/* <span className='designation' dangerouslySetInnerHTML={{ __html: speaker.speaker.biography }} /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .rts-event .single-event {
    padding: 30px 30px 50px 30px;
    border: 1px solid var(--rt-line);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
  }
  @media screen and (max-width: 1200px) {
    .rts-event .single-event {
      padding: 30px;
    }
  }
  .rts-event .single-event:hover {
    border-color: var(--rt-white);
  }
  .rts-event .single-event__content .event__thumb {
    overflow: hidden;
    margin-bottom: 30px;
  }
  .rts-event .single-event__content .event__thumb img {
    width: 100%;
    transition: var(--transition);
    transform: scale(1);
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
  }
  .rts-event .single-event__content .event-place span i {
    color: var(--rt-primary-2);
  }
  .rts-event-details .event-details__content--thumb {
    margin-bottom: 50px;
  }
  .rts-event-details .event-details__content--thumb img {
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
  .rts-event-details .event-details__content--text {
    margin-bottom: 30px;
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
    background-image: url(/assets/images/icon/arrow-rotate.svg);
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

  .rts-event-details .event-location-map {
    margin-bottom: 30px;
  }
  .rts-event-details .event-location-map-iframe {
    min-height: 400px;
    width: 100%;
    filter: grayscale(1);
    border-radius: 6px;
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
    /* margin-bottom: 30px; */
  }
  .rts-event-speaker .event-speaker__details .speaker-thumb img {
    min-width: 200px;
    width: 200px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid black;
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
  .event-gallery-wrap { margin-top:18px; max-width:820px; width:100%; }
  .event-gallery__title { font-size:2.6rem; margin:8px 0 12px 0; color:#222; text-align:center; font-weight:700; line-height:1.15; }
  .event-gallery { display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:12px; margin-top:0; }
  .event-gallery__item { overflow:hidden; border-radius:6px; }
  .event-gallery__item img { width:100%; height:100%; object-fit:cover; display:block; aspect-ratio: 16/10; transition: transform .25s ease; }
  .event-gallery__item:hover img { transform: scale(1.05); }
  @media (max-width: 768px) { .event-gallery { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:10px; } .event-gallery__item img { aspect-ratio: 4/3; } .event-gallery__title { font-size:1.15rem; } }
            `}
      </style>
    </>
  );
};

export default EventDetails;
