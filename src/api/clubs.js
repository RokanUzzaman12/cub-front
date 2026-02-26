import { apiFetch } from "./apiFetch";

//fetch all clubs
export async function fetchClubs() {
  return await apiFetch("/clubs");
}

//fetch single club
export async function fetchSingleClub(id) {
  return await apiFetch(`/clubs/${id}`);
}

//fetch faculty wise clubs
export async function fetchFacultyWiseClubs(slug) {
  return await apiFetch(`/faculty-wise-club/${slug}`);
}

//fetch department wise clubs
export async function fetchDepartmentWiseClubs(slug) {
  return await apiFetch(`/department-wise-club/${slug}`);
}
