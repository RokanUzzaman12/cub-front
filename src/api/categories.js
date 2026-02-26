import { apiFetch } from './apiFetch';

//fetch all categories of staff
export async function fetchCategories() {
  return await apiFetch('/staff_categories');
}

//fetch single category staff
export async function fetchSingleCategory(id) {
  return await apiFetch(`/staff_categories/${id}`);
}
