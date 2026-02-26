import { apiFetch } from './apiFetch';

//fetch department and program wise courses
export async function fetchDepartmentProgramWiseCourses(query) {
  return await apiFetch(`/department-and-program-wise-course?${query}`);
}
