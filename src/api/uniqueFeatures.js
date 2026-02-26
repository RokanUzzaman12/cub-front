import { apiFetch } from "./apiFetch";

//fetch all uniqueFeatures
export async function fetchUniqueFeatures() {
  return await apiFetch("/uniqueFeatures");
}

//fetch single uniqueFeatures
export async function fetchSinglefetchUniqueFeature(id) {
  return await apiFetch(`/uniqueFeatures/${id}`);
}

//fetch faculty wise uniqueFeatures
export async function fetchFacultyWiseUniqueFeature(slug) {
  return await apiFetch(`/faculty-wise-uniqueFeatures/${slug}`);
}

//fetch department wise uniqueFeatures
export async function fetchDepartmentWiseUniqueFeature(slug) {
  return await apiFetch(`/department-wise-uniqueFeatures/${slug}`);
}
