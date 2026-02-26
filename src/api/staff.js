import { apiFetch } from './apiFetch';

//fetch all staff
export async function fetchStaff() {
  return await apiFetch('/staff');
}

//fetch single staff
export async function fetchSingleStaff(id) {
  return await apiFetch(`/staff/${id}`);
}

//fetch department wise staffs
export async function fetchDepartmentWiseStaffs(slug) {
  return await apiFetch(`/department-wise-staff/${slug}`);
}

//fetch faculty wise staffs
export async function fetchFacultyWiseStaffs(slug) {
  return await apiFetch(`/faculty-wise-staff/${slug}`);
}

//fetch faculty and Category wise staffs
export async function fetchFacultyCategoryWiseStaffs(faculty, category) {
  return await apiFetch(`/faculty-and-category-wise-staff?faculty=${faculty}&category=${category}`);
}

//fetch department and Category wise staffs
export async function fetchDepartmentCategoryWiseStaffs(department, category) {
  return await apiFetch(`/department-and-category-wise-staff?department=${department}&category=${category}`);
}
