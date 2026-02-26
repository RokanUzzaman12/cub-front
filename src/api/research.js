import { apiFetch } from "./apiFetch";

//fetch all research
export async function fetchResearch() {
  return await apiFetch("/researchPublications");
}

//fetch single research
export async function fetchSingleResearch(id) {
  return await apiFetch(`/researchPublications/${id}`);
}

//fetch faculty wise research
export async function fetchFacultyWiseResearch(slug) {
  return await apiFetch(`/faculty-wise-researchPublication/${slug}`);
}

//fetch department wise research
export async function fetchDepartmentWiseResearch(slug) {
  return await apiFetch(`/department-wise-researchPublication/${slug}`);
}
