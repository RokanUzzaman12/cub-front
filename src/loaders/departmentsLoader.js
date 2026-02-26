import { fetchDepartments, fetchSingleDepartment, fetchFacultyWiseDepartments, fetchDepartmentBySlug } from '../api/departments.js';
import { departmentList, singleDepartment, facultyWiseDepartments } from '../stores/departmentsStore.js';

//fetch all departments
export async function fetchDepartmentsAndFillStore() {
  try {
    const departments = await fetchDepartments();
    departmentList.set(departments.data);
  } catch (err) {
    console.error('Error fetching departments:', err);
  }
}
//fetch single department
export async function fetchSingleDepartmentAndFillStore(id) {
  try {
    const department = await fetchSingleDepartment(id);
    singleDepartment.set(department.data);
  } catch (err) {
    console.error('Error fetching single department:', err);
  }
}

//fetch single department by slug
export async function fetchDepartmentBySlugAndFillStore(slug) {
  try {
    const department = await fetchDepartmentBySlug(slug);
    singleDepartment.set(department.data);
    localStorage.setItem(
      'selectedDepartment',
      JSON.stringify({ slug: department.data.slug, contact_1: department.data.contact_info_1, contact_2: department.data.contact_info_2 })
    );
  } catch (err) {
    console.error('Error fetching single department:', err);
  }
}

// faculty wise department fetch
export async function fetchFacultyWiseDepartmentsAndFillStore(slug) {
  try {
    const departments = await fetchFacultyWiseDepartments(slug);
    facultyWiseDepartments.set(departments.data);
  } catch (err) {
    console.error('Error fetching faculty wise department:', err);
  }
}
