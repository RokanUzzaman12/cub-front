import {
  fetchResearch,
  fetchSingleResearch,
  fetchFacultyWiseResearch,
  fetchDepartmentWiseResearch,
} from "../api/research.js";
import {
  researchList,
  singleResearch,
  facultyWiseResearch,
  departmentWiseResearch,
} from "../stores/researchStore.js";

//fetch all research
export async function fetchResearchAndFillStore() {
  try {
    const researches = await fetchResearch();
    researchList.set(researches.data);
  } catch (err) {
    console.error("Error fetching research:", err);
  }
}
//fetch single research
export async function fetchSingleResearchAndFillStore(id) {
  try {
    const data = await fetchSingleResearch(id);
    singleResearch.set(data.data);
  } catch (err) {
    console.error("Error fetching single research:", err);
  }
}

//fetch faculty wise research
export async function fetchFacultyWiseResearchAndFillStore(slug) {
  try {
    const researches = await fetchFacultyWiseResearch(slug);
    facultyWiseResearch.set(researches.data);
  } catch (err) {
    console.error("Error fetching faculty wise research:", err);
  }
}

//fetch department wise research
export async function fetchDepartmentWiseResearchAndFillStore(slug) {
  try {
    const researches = await fetchDepartmentWiseResearch(slug);
    departmentWiseResearch.set(researches.data);
  } catch (err) {
    console.error("Error fetching department wise research:", err);
  }
}
