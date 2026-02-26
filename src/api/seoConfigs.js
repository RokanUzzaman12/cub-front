// api/seoConfigs.js
import { apiFetch } from "./apiFetch";

let seoDataCache = null;
let seoDataPromise = null;

//fetch all seos
export async function fetchSeo() {
  return await apiFetch("/seo-configs");
}

// Fetch all SEO data and cache it
export async function fetchAllSeo() {
  if (seoDataCache) {
    return seoDataCache;
  }

  // Prevent multiple simultaneous requests
  if (seoDataPromise) {
    return seoDataPromise;
  }

  seoDataPromise = (async () => {
    try {
      const res = await apiFetch("/seo-configs");
      if (res?.success) {
        // Convert array to object keyed by slug for easy lookup
        seoDataCache = res.data.reduce((acc, item) => {
          acc[item.page_slug] = item;
          return acc;
        }, {});
      }
      return seoDataCache;
    } catch (error) {
      console.error("Failed to fetch all SEO data:", error);
      return {};
    } finally {
      seoDataPromise = null;
    }
  })();

  return seoDataPromise;
}

export async function fetchSeoBySlug(slug) {
  try {
    // Get all SEO data at once
    const allSeo = await fetchAllSeo();

    return allSeo[slug] || null;
  } catch (error) {
    console.error("SEO fetch error:", error);
    return null;
  }
}
