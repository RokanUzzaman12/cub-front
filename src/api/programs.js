import { apiFetch } from './apiFetch';

//fetch all programs
export async function fetchPrograms() {
  return await apiFetch('/programs');
}

//fetch single program
export async function fetchSingleProgram(id) {
  return await apiFetch(`/programs/${id}`);
}

//fetch single program by slug
export async function fetchSingleProgramBySlug(slug) {
  return await apiFetch(`/program-by-slug/${slug}`);
}

//fetch department wise program
export async function fetchDepartmentWiseProgram(slug) {
  return await apiFetch(`/department-wise-program/${slug}`);
}

//fetch all programs
export async function fetchProgramsTypes() {
  return await apiFetch('/program_types');
}

//fetch single program type by id
export async function fetchSingleProgramType(id) {
  return await apiFetch(`/program_types/${id}`);
}
//fetch single program type slug
export async function fetchSingleProgramTypeBySlug(slug) {
  return await apiFetch(`/program-type-by-slug/${slug}`);
}

//fetch single program type slug
export async function fetchProgramByType(slug) {
  return await apiFetch(`/type-slug-wise-program/${slug}`);
}
