import {
  fetchPrograms,
  fetchSingleProgram,
  fetchDepartmentWiseProgram,
  fetchSingleProgramBySlug,
  fetchProgramsTypes,
  fetchSingleProgramType,
  fetchSingleProgramTypeBySlug,
  fetchProgramByType,
} from '../api/programs.js';
import {
  programList,
  singleProgram,
  departmentWisePrograms,
  programListLoading,
  programListError,
  singleProgramLoading,
  singleProgramError,
  programTypeList,
  singleProgramType,
} from '../stores/programsStore.js';

//fetch all programs
export async function fetchProgramsAndFillStore() {
  try {
    programListLoading.set(true);
    programListError.set(null);
    const programs = await fetchPrograms();
    programList.set(programs.data);
  } catch (err) {
    programListError.set(err);
    console.error('Error fetching programs:', err);
  } finally {
    programListLoading.set(false);
  }
}
//fetch single program
export async function fetchSingleProgramAndFillStore(id) {
  try {
    const program = await fetchSingleProgram(id);
    singleProgram.set(program.data);
  } catch (err) {
    console.error('Error fetching single program:', err);
  }
}

//fetch single program by slug
export async function fetchSingleProgramBySlugAndFillStore(slug) {
  try {
    const program = await fetchSingleProgramBySlug(slug);
    singleProgram.set(program.data);
  } catch (err) {
    console.error('Error fetching single program by slug:', err);
  }
}

//fetch department wise program
export async function fetchDepartmentWiseProgramAndFillStore(slug) {
  try {
    const program = await fetchDepartmentWiseProgram(slug);
    departmentWisePrograms.set(program.data);
    return program.data;
  } catch (err) {
    console.error('Error fetching department wise program:', err);
  }
}

//fetch all program Types
export async function fetchProgramTypesAndFillStore() {
  try {
    const programs = await fetchProgramsTypes();
    programTypeList.set(programs.data);
  } catch (err) {
    console.error('Error fetching program types:', err);
  }
}
//fetch single program type
export async function fetchSingleProgramTypeAndFillStore(id) {
  try {
    const program = await fetchSingleProgramType(id);
    singleProgramType.set(program.data);
  } catch (err) {
    console.error('Error fetching single program type:', err);
  }
}

//fetch single program type by slug
export async function fetchSingleProgramTypeBySlugAndFillStore(slug) {
  try {
    const program = await fetchSingleProgramTypeBySlug(slug);
    singleProgramType.set(program.data);
  } catch (err) {
    console.error('Error fetching single program type by slug:', err);
  }
}

//fetch  program  by type
export async function fetchProgramsByTypeAndFillStore(slug) {
  try {
    const programs = await fetchProgramByType(slug);
    programList.set(programs.data);
    return programs.data;
  } catch (err) {
    console.error('Error fetching  program by type :', err);
  }
}
