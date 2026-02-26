import { apiFetch } from './apiFetch';

//fetch all events
export async function fetchEvents() {
  return await apiFetch('/events');
}

//fetch single event
export async function fetchSingleEvent(id) {
  return await apiFetch(`/events/${id}`);
}

//fetch faculty wise events
export async function fetchFacultyWiseEvents(slug) {
  return await apiFetch(`/faculty-wise-event/${slug}`);
}

//fetch department wise events
export async function fetchDepartmentWiseEvents(slug) {
  return await apiFetch(`/department-wise-event/${slug}`);
}
