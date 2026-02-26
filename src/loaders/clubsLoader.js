import {
  fetchClubs,
  fetchSingleClub,
  fetchFacultyWiseClubs,
  fetchDepartmentWiseClubs,
} from "../api/clubs.js";
import {
  clubList,
  singleClub,
  facultyWiseClubs,
  departmentWiseClubs,
} from "../stores/clubStore.js";

//fetch all clubs
export async function fetchClubsAndFillStore() {
  try {
    const clubs = await fetchClubs();
    clubList.set(clubs.data);
  } catch (err) {
    console.error("Error fetching clubs:", err);
  }
}
//fetch single club
export async function fetchSingleClubAndFillStore(id) {
  try {
    const club = await fetchSingleClub(id);
    singleClub.set(club.data);
  } catch (err) {
    console.error("Error fetching single club:", err);
  }
}

//fetch faculty wise clubs
export async function fetchFacultyWiseClubsAndFillStore(slug) {
  try {
    const clubs = await fetchFacultyWiseClubs(slug);
    facultyWiseClubs.set(clubs.data);
  } catch (err) {
    console.error("Error fetching faculty wise clubs:", err);
  }
}

//fetch department wise clubs
export async function fetchDepartmentWiseClubsAndFillStore(slug) {
  try {
    const clubs = await fetchDepartmentWiseClubs(slug);
    departmentWiseClubs.set(clubs.data);
  } catch (err) {
    console.error("Error fetching department wise clubs:", err);
  }
}
