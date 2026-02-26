import { apiFetch } from './apiFetch';

//fetch all scholarships
export async function fetchScholarships() {
  return await apiFetch('/scholarships');
}

//fetch single scholarship
export async function fetchSingleScholarship(id) {
  return await apiFetch(`/scholarships/${id}`);
}

//fetch scholarship categories
export async function fetchScholarshipCategories() {
  return await apiFetch('/scholarship_types');
}

//fetch category wise scholarships
// export async function fetchCategoryWisescholarships(slug) {
//   return await apiFetch(`/scholarships-by-category/${slug}`);
// }
