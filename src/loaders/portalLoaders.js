import { fetchPortals } from "../api/portals.js";
import { portalList } from "../stores/portalStore.js";

//fetch all portals
export async function fetchPortalsAndFillStore() {
  try {
    const portals = await fetchPortals();
    portalList.set(portals);
  } catch (err) {
    console.error("Error fetching portals:", err);
  }
}
