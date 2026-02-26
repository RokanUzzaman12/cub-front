import { apiFetch } from "./apiFetch";

//fetch all seos
export async function fetchSeo() {
  return await apiFetch("/seo-configs");
}

//fetch single seo
export async function fetchSeoBySlug(slug) {
  return await apiFetch(`/seo-by-slug/${slug}`);
}
