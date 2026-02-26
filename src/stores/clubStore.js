import { atom } from "nanostores";
// club list
export const clubList = atom([]);
export const clubListLoading = atom(false);
export const clubListError = atom(null);
// single club
export const singleClub = atom({});
export const singleClubLoading = atom(false);
export const singleClubError = atom(null);
// faculty wise clubs
export const facultyWiseClubs = atom([]);
export const facultyClubsLoading = atom(false);
export const facultyClubsError = atom(null);
// department wise clubs
export const departmentWiseClubs = atom([]);
export const departmentClubsLoading = atom(false);
export const departmentClubsError = atom(null);
