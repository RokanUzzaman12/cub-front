import { atom } from 'nanostores';
// program list
export const programList = atom([]);
export const programListLoading = atom(false);
export const programListError = atom(null);
// single program
export const singleProgram = atom({});
export const singleProgramLoading = atom(false);
export const singleProgramError = atom(null);
// department wise programs
export const departmentWisePrograms = atom([]);
export const departmentProgramsLoading = atom(false);
export const departmentProgramsError = atom(null);

// program type list
export const programTypeList = atom([]);
export const programTypeListLoading = atom(false);
export const programTypeListError = atom(null);

// single program type
export const singleProgramType = atom({});
export const singleProgramTypeLoading = atom(false);
export const singleProgramTypeError = atom(null);
