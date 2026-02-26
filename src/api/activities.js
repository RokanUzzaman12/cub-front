import { apiFetch } from "./apiFetch";

//fetch all activities
export async function fetchActivities() {
  return await apiFetch("/activities");
}

//fetch single activity
export async function fetchSingleActivity(id) {
  return await apiFetch(`/activities/${id}`);
}

//fetch faculty wise activities
export async function fetchFacultyWiseActivities(slug) {
  return await apiFetch(`/faculty-wise-activity/${slug}`);
}

//fetch department wise activities
export async function fetchDepartmentWiseActivities(slug) {
  return await apiFetch(`/department-wise-activity/${slug}`);
}
