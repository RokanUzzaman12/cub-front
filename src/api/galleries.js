import { apiFetch } from './apiFetch';

//fetch all galleries
export async function fetchGalleries() {
  return await apiFetch('/galleries');
}

//fetch single gallery
export async function fetchSingleGallery(id) {
  return await apiFetch(`/galleries/${id}`);
}
