import { apiFetch } from "./apiFetch";

//fetch all creatives
export async function fetchCreatives() {
  return await apiFetch("/creatives");
}

//fetch single creatives
export async function fetchSingleCreatives(id) {
  return await apiFetch(`/creatives/${id}`);
}

//fetch department wise creatives
export async function fetchDepartmentWiseCreatives(slug) {
  return await apiFetch(`/department-wise-creative/${slug}`);
}

//fetch faculty wise creatives
export async function fetchFacultyWiseCreatives(slug) {
  return await apiFetch(`/faculty-wise-creative/${slug}`);
}

//send page view data
export async function sendPageView(data) {
  return await apiFetch(`/creatives/page-view/${data}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
