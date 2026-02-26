import { apiFetch } from "./apiFetch";

//fetch all news
export async function fetchNews() {
  return await apiFetch("/news");
}

//fetch single news
export async function fetchSingleNews(id) {
  return await apiFetch(`/news/${id}`);
}
