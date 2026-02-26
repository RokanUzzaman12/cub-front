import {
  fetchAlumni,
  fetchSingleAlumni,
  fetchFacultyWiseAlumni,
  fetchDepartmentWiseAlumni,
} from "../api/alumni.js";
import {
  alumniList,
  singleAlumni,
  facultyWiseAlumni,
  departmentWiseAlumni,
} from "../stores/alumni.js";

//fetch all alumni
export async function fetchAlumniAndFillStore() {
  try {
    const alumni = await fetchAlumni();
    alumniList.set(alumni.data);
  } catch (err) {
    console.error("Error fetching alumni:", err);
  }
}
//fetch single alumni
export async function fetchSingleAlumniAndFillStore(id) {
  try {
    const alumni = await fetchSingleAlumni(id);
    singleAlumni.set(alumni.data);
  } catch (err) {
    console.error("Error fetching single alumni:", err);
  }
}

//fetch faculty wise alumni
export async function fetchFacultyWiseAlumniAndFillStore(slug) {
  try {
    const alumni = await fetchFacultyWiseAlumni(slug);
    facultyWiseAlumni.set(alumni.data);
  } catch (err) {
    console.error("Error fetching faculty wise alumni:", err);
  }
}

//fetch department wise alumni
export async function fetchDepartmentWiseAlumniAndFillStore(slug) {
  try {
    const alumni = await fetchDepartmentWiseAlumni(slug);
    departmentWiseAlumni.set(alumni.data);
  } catch (err) {
    console.error("Error fetching department wise alumni:", err);
  }
}
