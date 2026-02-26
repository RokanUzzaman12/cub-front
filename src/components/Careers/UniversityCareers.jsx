import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { fetchDepartmentsAndFillStore } from "../../loaders/departmentsLoader";
import { careerList } from "../../stores/careerStore.js";

import { fetchCareersAndFillStore } from "../../loaders/careersLoader.js";
import { departmentList } from "../../stores/departmentsStore.js";
import { facultyList } from "../../stores/facultiesStore.js";
import { fetchFacultiesAndFillStore } from "../../loaders/facultiesLoader.js";
import UniversityJobs from "./UniversityJobs.jsx";
import DepartmentJobs from "./DepartmentJobs/DepartmentJobs.jsx";

const UniversityCareers = () => {
  const joblists = useStore(careerList) || [];
  const departments = useStore(departmentList) || [];
  const faculties = useStore(facultyList) || [];
  useEffect(() => {
    if (joblists.length == 0) {
      fetchCareersAndFillStore();
    }
    if (departments.length == 0) {
      fetchDepartmentsAndFillStore();
    }
    if (faculties.length == 0) {
      fetchFacultiesAndFillStore();
    }
  }, []);
  return (
    <>
      <UniversityJobs jobs={joblists} />
      <DepartmentJobs departments={departments} />
    </>
  );
};

export default UniversityCareers;
