import { apiFetch } from './apiFetch';

//fetch all partnerships
export async function fetchPartnerships() {
  return await apiFetch('/partnerships');
}

//fetch single partnership
export async function fetchSinglePartnership(id) {
  return await apiFetch(`/partnerships/${id}`);
}
