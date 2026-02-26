import { apiFetch } from "./apiFetch";

//fetch all seos
export async function fetchSeo() {
  return await apiFetch("/seo-configs");
}

export async function fetchSeoBySlug(slug) {
  try {
    const res = await apiFetch(`/seo-by-slug/${slug}`);

    if (res?.success) {
      return res.data;
    }

    return null;
  } catch (error) {
    console.error("SEO fetch error:", error);
    return null;
  }
}
