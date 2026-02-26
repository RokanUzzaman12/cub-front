const FacultyAdminDetails = ({ faculty = {} }) => {
  return (
    <>
      <div className="rts-faculty-details rts-section-padding bg-color-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="rts-section-title">Message From Dean</h2>
              <p className="description w-680">{faculty.dean_name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="faculty-image text-center mb--30">
                <img
                  src={faculty.dean_image}
                  alt="faculty image"
                  style={{
                    width: "200px",
                    aspectRatio: "1 / 1",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <p
                className="faculty-content-text text-center has-medium-font-size"
                dangerouslySetInnerHTML={{ __html: faculty.dean_message }}
              />
            </div>

             <div className="read-more-btn">
                <a
                href={`/faculties/${faculty.slug}/message`}
                className="rts-theme-btn primary with-arrow lh-100"
              >
                Read More{" "}
                <span>
                  <i className="fa-thin fa-arrow-right"></i>
                </span>
              </a>
              </div>
          </div>
          <div className="border-top my-60"></div>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 order-2 order-lg-1">
              <div className="faculty-content-text">
                <p
                  className="text-center"
                  dangerouslySetInnerHTML={{ __html: faculty.mission }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 order-1 order-lg-2">
              <h3 className="rts-section-title">Mission</h3>
            </div>
          </div>

          <div className="row mt--30 align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="faculty-content-text">
                <h3 className="rts-section-title">Vision</h3>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <p
                className="text-center"
                dangerouslySetInnerHTML={{ __html: faculty.vision }}
              />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
  .read-more-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }`}
      </style>
    </>
  );
};

export default FacultyAdminDetails;
