import { fetchSeo,fetchSingleSeo } from "../api/portals.js";
import { seoList,singleSeo } from "../stores/seoconfigStore.js";

//fetch all seoconfigs
export async function fetchSeoconfigAndFillStore() {
  try {
    const seos = await fetchSeo();
    seoList.set(seos);
  } catch (err) {
    console.error("Error fetching seoconfigs:", err);
  }
}

//fetch single seoconfigs
export async function fetchSingleSeoAndFillStore(id) {
  try {
    const seo = await fetchSingleSeo(id);
    singleSeo.set(seo.data);
  } catch (err) {
    console.error('Error fetching seoconfig:', err);
  }
}
