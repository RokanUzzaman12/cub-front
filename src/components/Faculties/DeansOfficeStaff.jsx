import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { facultyWiseStaffs } from '../../stores/staffStore';
import { fetchFacultyWiseStaffsAndFillStore } from '../../loaders/staffLoader';

const DeansOfficeStaff = () => {
  const facultyStaffs = useStore(facultyWiseStaffs) || [];
  useEffect(() => {
    const faculty = JSON.parse(localStorage.getItem('selectedFaculty'));
    fetchFacultyWiseStaffsAndFillStore(faculty.slug);
  }, []);
  return (
    <>
      <section className='rts-section-padding'>
        <div className='container'>
          <p className='description w-680'></p>
          <h2 className='rts-section-title' style={{ marginBottom: '30px' }}>
            Dean's Office Staff
          </h2>
          <div className='row g-5 align-items-center'>
            <div className='col-md-12'>
              <div className='row g-5'>
                {facultyStaffs.slice(0, 4).map((facultystaff, index) => (
                  <div className='col-lg-4 col-md-6 col-sm-6' key={index}>
                    <div className='rts__single--member'>
                      <div className='rts__single--member--thumb'>
                        <a href='/departments/1/faculty-staff/1'>
                          <img src={facultystaff.image} alt='staff image' />
                        </a>
                      </div>
                      <div className='rts__single--member--meta text-center'>
                        <h5 className='rts__single--member--meta--title'>
                          <a href='/departments/1/faculty-staff/1'>{facultystaff.name}</a>
                        </h5>
                        <span className='rts__single--member--meta--designation'>{facultystaff.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
  }

  .rts__single--member:hover .rts__single--member--thumb img {
    transform: scale(1.05);
  }
  .rts__single--member--thumb {
    max-width: 100%;
    margin-bottom: 30px;
    overflow: hidden;
    /* border: 1px solid var(--rt-primary); */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-inline: auto;
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
  .rts__single--member--meta--title a {
    color: var(--rt-heading);
  }
  .rts__single--member--meta--title a:hover {
    color: var(--rt-primary-1);
  }`}
      </style>
    </>
  );
};

export default DeansOfficeStaff;
