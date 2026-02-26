import { apiFetch } from "./apiFetch";

//fetch all newsletter
export async function fetchNewsletter() {
  return await apiFetch("/newsletters");
}

//fetch single newsletters
export async function fetchSingleNewsletter(id) {
  return await apiFetch(`/newsletters/${id}`);
}

//fetch faculty wise newsletters
export async function fetchFacultyWiseNewsletter(slug) {
  return await apiFetch(`/faculty-wise-newsletters/${slug}`);
}

//fetch department wise newsletters
export async function fetchDepartmentWiseNewsletter(slug) {
  return await apiFetch(`/department-wise-newsletters/${slug}`);
}
