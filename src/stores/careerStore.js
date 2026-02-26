import { atom } from "nanostores";
// career list
export const careerList = atom([]);
export const careerListLoading = atom(false);
export const careerListError = atom(null);
// single career
export const singleCareer = atom({});
export const singleCareerLoading = atom(false);
export const singleCareerError = atom(null);
// faculty wise careers
export const facultyWiseCareers = atom([]);
export const facultyCareersLoading = atom(false);
export const facultyCareersError = atom(null);
// department wise careers
export const departmentWiseCareers = atom([]);
export const departmentCareersLoading = atom(false);
export const departmentCareersError = atom(null);
