import { apiFetch } from './apiFetch';

//fetch all departments
export async function fetchDepartments() {
  return await apiFetch('/departments');
}

//fetch single department
export async function fetchSingleDepartment(id) {
  return await apiFetch(`/departments/${id}`);
}

//fetch single department by slug
export async function fetchDepartmentBySlug(slug) {
  return await apiFetch(`/department-by-slug/${slug}`);
}

//fetch department wise departments
export async function fetchFacultyWiseDepartments(slug) {
  return await apiFetch(`/faculty-wise-department/${slug}`);
}
