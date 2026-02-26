import { apiFetch } from "./apiFetch";

//fetch all portals
export async function fetchPortals() {
  return await apiFetch("/portals");
}
