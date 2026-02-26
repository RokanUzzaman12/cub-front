import { useEffect } from 'react';
import { facultyWiseDepartments } from '../../stores/departmentsStore';
import { fetchFacultyWiseDepartmentsAndFillStore } from '../../loaders/departmentsLoader';
import { useStore } from '@nanostores/react';

const DepartmentsList = ({ slug = '' }) => {
  const DEPT_LIST = useStore(facultyWiseDepartments) || [];
  useEffect(() => {
    fetchFacultyWiseDepartmentsAndFillStore(slug);
  }, []);
  return (
    <>
      <section className='faculty-sub-details rts-section-padding'>
        <div className='container'>
          <div className='rts-section mb--50 text-center'>
            <h3 className='rts-section-title'>List of Departments</h3>
          </div>
          <div className='row g-5 justify-content-center'>
            {DEPT_LIST.map((dept, index) => (
              <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
                <div className='single-cat-item' style={{ height: '100%', minHeight: '200px' }}>
                  <div className='cat-meta' style={{ height: '100%' }}>
                    <div className='cat-title'>
                      <a href={`/departments/${dept.slug}`}>{dept.name}</a>
                    </div>
                    <div className='cat-link align-self-end'>
                      <a href={`/departments/${dept.slug}`} className='cat-link-arrow'>
                        <i className='fa-sharp fa-regular fa-arrow-right' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
  .single-cat-item .cat-thumb {
    position: relative;
    overflow: hidden;
  }
  .single-cat-item .cat-thumb img {
    transform: scale(1);
    transition: var(--transition);
    width: 100%;
  }
  .single-cat-item .cat-thumb .cat-link-btn {
    display: inline-block;
    font-size: 14px;
    background: var(--rt-primary-2);
    color: var(--rt-white);
    padding: 7px 12px;
    border-radius: 3px;
    line-height: 100%;
    position: absolute;
    top: 20px;
    left: 20px;
    text-transform: capitalize;
  }
  .single-cat-item .cat-thumb:hover img {
    transform: scale(1.1);
  }
  .single-cat-item .cat-meta {
    /* border: 1px solid #e3e3e3; */
    padding: 19px 20px;
    display: flex;
    justify-content: space-between;

    background-color: var(--rt-primary);

    transition: all 0.2s linear;
  }

  .single-cat-item:hover .cat-meta {
    box-shadow: none;
    transform: translate(-2.5%, -2.5%);
    box-shadow: 10px 10px 2px 0px;
  }
  .single-cat-item .cat-meta .cat-title a {
    font-size: 2rem;
    font-weight: 600;
    transition: var(--transition);
    color: var(--rt-white);
    position: relative;
    text-transform: capitalize;
  }
  .single-cat-item .cat-meta .cat-title a::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: var(--rt-white);
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: var(--transition);
  }
  .single-cat-item .cat-meta .cat-title:hover a::after {
    opacity: 1;
  }
  .single-cat-item .cat-meta .cat-link .cat-link-arrow {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 1px solid var(--rt-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
  .single-cat-item .cat-meta .cat-link .cat-link-arrow i {
    color: var(--rt-white);
  }
  .single-cat-item .cat-meta .cat-link .cat-link-arrow:hover {
    background: var(--rt-primary);
    border-color: var(--rt-white);
  }
  .single-cat-item .cat-meta .cat-link .cat-link-arrow:hover i {
    color: var(--rt-white);
  }

  .faculty-sub-details .single-cat-item .cat-meta {
    padding: 18px 15px;
  }
  .faculty-sub-details .single-cat-item .cat-meta a {
    font-family: var(--font-hind);
  }
    `}
      </style>
    </>
  );
};

export default DepartmentsList;
