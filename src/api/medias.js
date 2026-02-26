import { apiFetch } from "./apiFetch";

//fetch all medias
export async function fetchMedias() {
  return await apiFetch("/medias");
}

//fetch single medias
export async function fetchSingleMedias(id) {
  return await apiFetch(`/medias/${id}`);
}

//fetch faculty wise medias
export async function fetchFacultyWiseMedias(slug) {
  return await apiFetch(`/faculty-wise-media/${slug}`);
}

//fetch department wise medias
export async function fetchDepartmentWiseMedias(slug) {
  return await apiFetch(`/department-wise-media/${slug}`);
}
