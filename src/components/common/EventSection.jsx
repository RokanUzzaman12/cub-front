const EventSection = ({ facultyEvents = [] }) => {
  return (
    <>
      <div className="rts-event-section">
        <div className="rts-section rt-between pb--25">
          <h2 className="rts-section-title">Events</h2>
          <a href="/events" className="rts-arrow">
            View All{" "}
            <span>
              <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </span>
          </a>
        </div>
        <div className="rts-event-section-content">
          {!facultyEvents || facultyEvents.length === 0 ? (
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
                  <h4>No events found</h4>
                  <h6>There are currently no events available.</h6>
                </div>
              </div>
            </div>
          ) : (
            <ul className="list-unstyled rts-counter">
              {facultyEvents.slice(0, 3).map((facultyEvent, index) => (
                <li className="single-event" key={index}>
                  <div className="single-event-counter">
                    <a href={`/events/${facultyEvent.id}`}>
                      <img src={facultyEvent.image} alt="event" />
                    </a>
                  </div>
                  <div className="single-event-content">
                    <h5 className="event-title">
                      <a href={`/events/${facultyEvent.id}`}>
                        {facultyEvent.title}
                      </a>
                    </h5>
                    <div className="single-event-content-meta">
                      <div className="event-date">
                        <span>
                          <i className="fal fa-calendar"></i>
                        </span>
                        <span>{facultyEvent.date}</span>
                      </div>
                      <div className="event-time">
                        <span>
                          <i className="fa-sharp fa-thin fa-clock"></i>
                        </span>
                        <span>{facultyEvent.time}</span>
                      </div>
                      <div className="event-place">
                        <span>
                          <i className="fa-sharp fa-thin fa-location-dot"></i>
                        </span>
                        <span>{facultyEvent.location}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <style>
        {`
  ul li a {
    color: var(--rt-primary);
  }

  .rts-event-section-content .rts-counter {
    counter-reset: rt-counter;
    margin-top: 0;
  }
  .rts-event-section-content .single-event {
    margin: 0;
    padding: 40px;
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
    left: 28%;
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
    flex-shrink: 0;
    flex: none;
    width: 150px;
    height: 120px;
  }

  .rts-event-section-content .single-event-counter img {
    width: 150px;
    height: 120px;
    object-fit: cover; 
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
  @media screen and (max-width: 576px) {
    .rts-event-section-content .single-event-counter::after {
      background: transparent;
    }
    .rts-event-section-content .single-event-counter img{
      width: 227px;
      height: 150px;
      object-fit: cover;
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
    flex: 1
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

export default EventSection;
