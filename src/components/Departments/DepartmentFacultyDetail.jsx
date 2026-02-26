const DepartmentFacultyDetail = ({
  departmentStaffs = [],
  department,
  slug,
}) => {
  return (
    <>
      <section className="rts__section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <h2 className="rts-section-title">
                {" "}
                {department.is_office
                  ? "Office Admins"
                  : "Faculty Members"}{" "}
              </h2>
              <div className="rts__section--link">
                <a
                  href={
                    department.is_office
                      ? `/departments/${slug}/office_staff`
                      : `/departments/${slug}/staff`
                  }
                  className="rts-nbg-btn btn-arrow"
                >
                  Find All
                  <span>
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="row g-5">
            {!departmentStaffs || departmentStaffs.length === 0 ? (
              <div className="col-12">
                <div
                  className="rts-empty-state text-center"
                  style={{
                    padding: 40,
                    border: "1px solid var(--rt-line)",
                    borderRadius: 6,
                  }}
                >
                  <h4>
                    No{" "}
                    {department.is_office ? "Office Admins" : "Faculty Members"}{" "}
                    found
                  </h4>
                  <h6>
                    There are currently no{" "}
                    {department.is_office ? "admins" : "faculty members"}{" "}
                    entries for this{" "}
                    {department.is_office ? "Office" : "Department"}.
                  </h6>
                </div>
              </div>
            ) : (
              departmentStaffs.slice(0, 4).map((staff, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={index}>
                  {/* Make the column a flex container so the card can stretch to equal height */}
                  <div className="rts__single--member">
                    <div className="rts__single--member--thumb">
                      <a href={`/departments/${slug}/${staff.id}`}>
                        <img src={staff.image} alt={`Photo of ${staff.name}`} />
                      </a>
                    </div>
                    <div className="rts__single--member--meta">
                      <h5 className="rts__single--member--meta--title">
                        <a href={`/departments/${slug}/${staff.id}`}>
                          {staff.name}
                        </a>
                      </h5>
                      <span className="rts__single--member--meta--designation">
                        {staff.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <style>
        {`
  .rts__single--member {
    box-shadow: 10px 10px 2px 0;
    border: 1px solid gray;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .rts__single--member:hover .rts__single--member--thumb img {
    transform: scale(1.05);
  }
  .rts__single--member--thumb {
    max-width: 100%;
    margin-bottom: 18px;
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-inline: auto;
    flex-shrink: 0;
  }
  .rts__single--member--thumb img {
    object-fit: cover;
    transform: scale(1);
    transition: var(--transition);
  }
  @media screen and (max-width: 992px) {
    .rts__single--member--thumb img {
      width: 100%;
      max-width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  .rts__single--member--meta--title {
    font-weight: 400;
    margin-bottom: 5px;
  }
  /* Make meta take remaining space so all cards match height */
  .rts__single--member--meta {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6px;
    margin-top: auto; /* push meta to bottom if possible */
  }
  .rts__single--member--meta--title a {
    color: var(--rt-heading);
  }
  .rts__single--member--meta--title a:hover {
    color: var(--rt-primary-1);
  }
    `}
      </style>
    </>
  );
};

export default DepartmentFacultyDetail;
