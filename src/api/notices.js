import { apiFetch } from './apiFetch';

//fetch all notices
export async function fetchNotices() {
  return await apiFetch('/notices');
}

//fetch single notice
export async function fetchSingleNotice(id) {
  return await apiFetch(`/notices/${id}`);
}

//fetch faculty wise notiecs
export async function fetchFacultyWiseNotices(slug) {
  return await apiFetch(`/faculty-wise-notice/${slug}`);
}

//fetch department wise notiecs
export async function fetchDepartmentWiseNotices(slug) {
  return await apiFetch(`/department-wise-notice/${slug}`);
}
