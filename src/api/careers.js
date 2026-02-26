import { apiFetch } from "./apiFetch";

//fetch all careers
export async function fetchCareers() {
  return await apiFetch("/careers");
}

//fetch single career
export async function fetchSingleCareer(id) {
  return await apiFetch(`/careers/${id}`);
}

//fetch faculty wise careers
export async function fetchFacultyWiseCareers(slug) {
  return await apiFetch(`/faculty-wise-career/${slug}`);
}

//fetch department wise careers
export async function fetchDepartmentWiseCareers(slug) {
  return await apiFetch(`/department-wise-career/${slug}`);
}
