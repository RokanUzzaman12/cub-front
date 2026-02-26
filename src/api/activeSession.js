import { apiFetch } from "./apiFetch";

//fetch all Session data
export async function fetchActiveSessions() {
  return await apiFetch("/active_admission_seasons");
}
