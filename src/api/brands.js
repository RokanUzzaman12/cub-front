import { apiFetch } from './apiFetch';

//fetch all brands
export async function fetchBrands() {
  return await apiFetch('/partnerships');
}
