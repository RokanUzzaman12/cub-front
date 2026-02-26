import { apiFetch } from "./apiFetch";

//fetch all campus life data
export async function fetchCampusLife() {
  return await apiFetch("/campus_lives");
}

//fetch single Campus Life
export async function fetchSingleCampusLife(id) {
  return await apiFetch(`/campus_lives/${id}`);
}
