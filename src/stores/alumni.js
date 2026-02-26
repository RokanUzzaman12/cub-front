import { atom } from "nanostores";
// alumni list
export const alumniList = atom([]);
export const alumniListLoading = atom(false);
export const alumniListError = atom(null);
// single Alumni
export const singleAlumni = atom({});
export const singleAlumniLoading = atom(false);
export const singleAlumniError = atom(null);
// faculty wise Alumni
export const facultyWiseAlumni = atom([]);
export const facultyAlumniLoading = atom(false);
export const facultyAlumniError = atom(null);
// department wise Alumni
export const departmentWiseAlumni = atom([]);
export const departmentAlumniLoading = atom(false);
export const departmentAlumniError = atom(null);
