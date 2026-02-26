import { apiFetch } from "./apiFetch";

//fetch all Sliders data
export async function fetchSliders() {
  return await apiFetch("/sliders");
}
