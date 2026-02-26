import { apiFetch } from "./apiFetch";

//fetch all alumni
export async function fetchAlumni() {
  return await apiFetch("/alumnis");
}

//fetch single alumni
export async function fetchSingleAlumni(id) {
  return await apiFetch(`/alumnis/${id}`);
}

//fetch faculty wise alumni
export async function fetchFacultyWiseAlumni(slug) {
  return await apiFetch(`/faculty-wise-alumnis/${slug}`);
}

//fetch department wise alumni
export async function fetchDepartmentWiseAlumni(slug) {
  return await apiFetch(`/department-wise-alumnis/${slug}`);
}
