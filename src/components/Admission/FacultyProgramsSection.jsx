import { useStore } from '@nanostores/react';
import { facultyList } from '../../stores/facultiesStore';
import { useEffect } from 'react';
import { fetchFaculties } from '../../api/faculties';
import Programs from './Programs';

const FacultyProgramsSection = () => {
  const faculties = useStore(facultyList) || {};
  useEffect(() => {
    fetchFaculties();
  }, []);
  return (
    <>
      <div className='container'>
        <div className='heading-container'>
          <h3 className='heading-title'>Faculties & Programs</h3>
        </div>
        <div class='faculties-container'>
          {faculties.map((faculty, index) => (
            <div className='faculty-card' key={index}>
              <h2 className='faculty-title'>{faculty.name}</h2>
              {faculty.departments.map((dept, index2) => (
                <Programs key={index2} department={dept.slug} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        .faculties-container {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        }
        .heading-container{
          display:flex;
          align-items: center;
          justify-content: center;
        }
        .heading-title{
            margin-bottom: 50px;
            font-size: 35px;
            font-weight: normal;
            text-align: center;
            display: inline-block;
            border-bottom: 3px solid #890c25;
            padding-bottom: 0.3rem;
        }

        .faculty-card {
          background-color: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease;
        }

        .faculty-card:hover {
          transform: translateY(-5px);
        }

        .faculty-title {
          margin-bottom: 1rem;
          font-size: 2rem;
          border-bottom: 2px solid #e0e0e0;
          padding-bottom: 0.5rem;
          text-transform: capitalize;
        }

        .program-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-radius: 0.5rem;
          overflow-y: auto;        
          max-height: 380px;
        }

        .program-list li {
          padding: 0.6rem 1rem;
          color: #333;
        }
        .program-list li a{
          color:#310f15;
          font-size: 17px
        }

        .program-list li:nth-child(odd) {
          background-color: #f9f9f9;
        }

        .program-list li:nth-child(even) {
          background-color: #eaf3ff;
        }`}
      </style>
    </>
  );
};

export default FacultyProgramsSection;
