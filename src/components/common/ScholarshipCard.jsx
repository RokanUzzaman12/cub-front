const ScholarshipCard = () => {
  return (
    <>
      <section className='rts-scholarship rts-scholarship-bg rts-section-height'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='rts-scholarship-info'>
                <h2 className='rts-section-title'>Scholarships and Financial Aid</h2>
                <p className='w-740 mb--50'>
                  Each semester, Canadian University is proud to honor academically talented and exceptionally skilled students with a variety of scholarships
                  and awards. The university annually awards more than 100 million takas as scholarships to both undergraduate and postgraduate students.
                </p>
                <a href='/scholarship-info' className='rts-theme-btn btn-arrow'>
                  Know More
                  <span>
                    <i className='fa-thin fa-arrow-right'></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
  .rts-scholarship > * {
    position: relative;
    z-index: 1;
  }
  .rts-scholarship.rts-scholarship-bg {
    background-image: url(/assets/images/feature/scholarship-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    background-attachment: fixed;
  }
  .rts-scholarship.rts-scholarship-bg::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    inset: 0;
  }
  .rts-scholarship.rts-section-height {
    height: 510px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 576px) {
    .rts-scholarship.rts-section-height {
      padding: 80px 0;
      height: 100%;
    }
  }

  .rts-scholarship-info {
    text-align: center;
  }
  .rts-scholarship-info .rts-section-title {
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  .rts-scholarship-info .rts-section-title,
  .rts-scholarship-info p {
    color: var(--rt-white);
  }
  .rts-scholarship-info .rts-s--rt-secondary-btn {
    margin-top: 35px;
  }
    `}
      </style>
    </>
  );
};

export default ScholarshipCard;
