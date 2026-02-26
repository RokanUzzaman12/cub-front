const DepartmentAdminDetail = ({ department }) => {
  
  if (!department) {
    return (
      <div className="rts-blog v_3 rts-section-padding">
        <div className="container">
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
                <h4>No information found</h4>
                <h6>There are currently no data details available.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { head_name, head_image, head_message, mission, vision, outcome, objectives } = department;
  return (
    <>
      <div className="rts-faculty-details rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-faculty-details">
              <div className="container">
                <div className="row">
                  <h2 className="rts-section-title">
                    Message From{" "}
                    {department.dean_title
                      ? department.dean_title
                      : "Department Head"}
                  </h2>
                  <p className="description w-680">{head_name}</p>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="faculty-image text-center mb--30">
                      <img
                        src={head_image}
                        alt="departmnt head image"
                        style={{
                          width: "300px",
                          aspectRatio: "1 / 1",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className="faculty-content-text text-center has-medium-font-size"
                      dangerouslySetInnerHTML={{ __html: head_message }}
                    />
                  </div>
                  <div className="read-more-btn">
                    <a
                      href={`/departments/${department.slug}/message`}
                      className="rts-theme-btn primary with-arrow lh-100"
                    >
                      Read More{" "}
                      <span>
                        <i className="fa-thin fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>

                  {/* <div className="feature-area">
                    <h2 className="text-center">Unique Features of this Department</h2>
                    <div className="row">
                      <div className="faculty-content-text text-center has-medium-font-size">
                        <div className="uniquefeature-card"
                         
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div class="feature-pill-wrapper">
                            {uniqueFeaturesArray.map((item) => (
                              <span class="feature-pill">{item}</span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="text-center my-5">
                    <h3 className="featuretitle">WHY at CUB?</h3>
                    {/* <p className="text-center">The Department of CSE at the Canadian University of Bangladesh equips students with cutting-edge technical skills, research experience, and leadership qualities to excel in the future tech world.</p> */}
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-lg-6">
                      <div
                        className="department-content-text text-center has-medium-font-size"
                        dangerouslySetInnerHTML={{ __html: mission }}
                      />
                    </div>

                    <div className="col-sm-12 col-lg-6">
                      <div
                        className="department-content-text text-center has-medium-font-size"
                        dangerouslySetInnerHTML={{ __html: vision }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-lg-6">
                      <div
                        className="department-content-text text-center has-medium-font-size"
                        dangerouslySetInnerHTML={{ __html: objectives }}
                      />
                    </div>

                    <div className="col-sm-12 col-lg-6">
                      <div
                        className="department-content-text text-center has-medium-font-size"
                        dangerouslySetInnerHTML={{ __html: outcome }}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
  }
  .uniquefeature-card{
    background: #ffffff;
    border-radius: 12px;
    padding: 18px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  `}
      </style>
    </>
  );
};

export default DepartmentAdminDetail;
