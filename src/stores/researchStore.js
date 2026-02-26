import { atom } from "nanostores";
// research list
export const researchList = atom([]);
export const researchListLoading = atom(false);
export const researchListError = atom(null);
// single research
export const singleResearch = atom({});
export const singleResearchLoading = atom(false);
export const singleResearchError = atom(null);
// faculty wise research
export const facultyWiseResearch = atom([]);
export const facultyResearchLoading = atom(false);
export const facultyResearchError = atom(null);
// department wise research
export const departmentWiseResearch = atom([]);
export const departmentResearchLoading = atom(false);
export const departmentResearchError = atom(null);
