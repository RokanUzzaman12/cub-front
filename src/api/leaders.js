import { apiFetch } from './apiFetch';

//fetch all leaders
export async function fetchLeaders() {
  return await apiFetch('/leaders');
}

//fetch single leader
export async function fetchSingleLeader(id) {
  return await apiFetch(`/leaders/${id}`);
}

//fetch leader categories
export async function fetchLeaderCategories() {
  return await apiFetch('/leader_categories');
}

//fetch category wise leaders
export async function fetchCategoryWiseLeaders(slug) {
  return await apiFetch(`/leaders-by-category/${slug}`);
}
