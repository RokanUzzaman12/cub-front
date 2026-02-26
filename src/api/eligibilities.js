import { apiFetch } from "./apiFetch";

//fetch all common eligibilities
export async function fetchEligibilities() {
  return await apiFetch("/common-eligibilities");
}

//fetch single eligibility
export async function fetchSingleEligibility(id) {
  return await apiFetch(`/eligibilities/${id}`);
}
