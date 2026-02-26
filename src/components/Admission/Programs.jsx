import { useEffect, useState } from 'react';
import { fetchDepartmentWiseProgramAndFillStore } from '../../loaders/programsLoader';

const Programs = ({ department }) => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const result = await fetchDepartmentWiseProgramAndFillStore(department);
      setPrograms(result || []);
    };
    fetchPrograms();
  }, [department]);

  return (
    <ul className='program-list'>
      {programs.map((program, idx) => (
        <li key={idx}>
          <a href={`/departments/${program.dept_id}/${program.slug}`}>{program.program_name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Programs;
