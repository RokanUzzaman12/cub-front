import { apiFetch } from './apiFetch';

//fetch all faculties
export async function fetchFaculties() {
  return await apiFetch('/faculties');
}

//fetch single faculty
export async function fetchSingleFaculty(id) {
  return await apiFetch(`/faculties/${id}`);
}

//fetch single faculty by slug
export async function fetchFacultyBySlug(slug) {
  return await apiFetch(`/faculty-by-slug/${slug}`);
}
