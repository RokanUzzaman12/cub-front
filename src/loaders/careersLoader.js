import {
  fetchCareers,
  fetchSingleCareer,
  fetchFacultyWiseCareers,
  fetchDepartmentWiseCareers,
} from "../api/careers.js";
import {
  careerList,
  singleCareer,
  facultyWiseCareers,
  departmentWiseCareers,
} from "../stores/careerStore.js";

//fetch all careers
export async function fetchCareersAndFillStore() {
  try {
    const careers = await fetchCareers();
    careerList.set(careers.data);
  } catch (err) {
    console.error("Error fetching careers:", err);
  }
}
//fetch single career
export async function fetchSingleCareerAndFillStore(id) {
  try {
    const career = await fetchSingleCareer(id);
    singleCareer.set(career.data);
  } catch (err) {
    console.error("Error fetching single career:", err);
  }
}

//fetch faculty wise careers
export async function fetchFacultyWiseCareersAndFillStore(slug) {
  try {
    const careers = await fetchFacultyWiseCareers(slug);
    facultyWiseCareers.set(careers.data);
  } catch (err) {
    console.error("Error fetching faculty wise careers:", err);
  }
}

//fetch department wise careers
export async function fetchDepartmentWiseCareersAndFillStore(slug) {
  try {
    const careers = await fetchDepartmentWiseCareers(slug);
    departmentWiseCareers.set(careers.data);
  } catch (err) {
    console.error("Error fetching department wise careers:", err);
  }
}
