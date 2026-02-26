import { fetchEligibilities, fetchSingleEligibility } from "../api/eligibilities.js";
import { eligibilityList, singleeligibility } from "../stores/eligibilities.js";

//fetch all eligibilites
export async function fetchEligibilitesAndFillStore() {
  try {
    const eligibilites = await fetchEligibilities();
    eligibilityList.set(eligibilites.data);
  } catch (err) {
    console.error("Error fetching eligibilites:", err);
  }
}
//fetch single eligibility
export async function fetchSingleEligibilityAndFillStore(id) {
  try {
    const eligibility = await fetchSingleEligibility(id);
    singleeligibility.set(eligibility.data);
  } catch (err) {
    console.error("Error fetching single eligibility:", err);
  }
}
