import { apiFetch } from "./apiFetch";

//fetch all pages
export async function fetchPages() {
  return await apiFetch("/pages");
}

//fetch single page
export async function fetchSinglePage(id) {
  return await apiFetch(`/pages/${id}`);
}
