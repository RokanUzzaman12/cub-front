import {
  fetchStaff,
  fetchSingleStaff,
  fetchDepartmentWiseStaffs,
  fetchFacultyWiseStaffs,
  fetchFacultyCategoryWiseStaffs,
  fetchDepartmentCategoryWiseStaffs,
} from '../api/staff.js';
import {
  staffList,
  singleStaff,
  departmentWiseStaffs,
  facultyWiseStaffs,
  facultyCategoryWiseStaffs,
  departmentCategoryWiseStaffs,
} from '../stores/staffStore.js';

//fetch all staff
export async function fetchStaffAndFillStore() {
  try {
    const staff = await fetchStaff();
    staffList.set(staff.data);
  } catch (err) {
    console.error('Error fetching staff:', err);
  }
}
//fetch single staff
export async function fetchSingleStaffAndFillStore(id) {
  try {
    const staff = await fetchSingleStaff(id);
    singleStaff.set(staff.data);
  } catch (err) {
    console.error('Error fetching single staff:', err);
  }
}

//fetch department wise staff
export async function fetchDepartmentWiseStaffsAndFillStore(slug) {
  try {
    const staff = await fetchDepartmentWiseStaffs(slug);
    departmentWiseStaffs.set(staff.data);
  } catch (err) {
    console.error('Error fetching department wise staff:', err);
  }
}

//fetch faculty wise staff
export async function fetchFacultyWiseStaffsAndFillStore(slug) {
  try {
    const staff = await fetchFacultyWiseStaffs(slug);
    facultyWiseStaffs.set(staff.data);
  } catch (err) {
    console.error('Error fetching faculty wise staff:', err);
  }
}

//fetch faculty and category wise staff
export async function fetchFacultyCategoryWiseStaffsAndFillStore(faculty, category) {
  try {
    const staff = await fetchFacultyCategoryWiseStaffs(faculty, category);
    const current = facultyCategoryWiseStaffs.get();
    const key = `${faculty}:${category}`;
    facultyCategoryWiseStaffs.set({
      ...current,
      [key]: staff.data,
    });
  } catch (err) {
    console.error('Error fetching faculty and category wise staff:', err);
  }
}

//fetch department and category wise staff
export async function fetchDepartmentCategoryWiseStaffsAndFillStore(department, category) {
  try {
    const staff = await fetchDepartmentCategoryWiseStaffs(department, category);
    const current = departmentCategoryWiseStaffs.get();
    const key = `${department}:${category}`;
    departmentCategoryWiseStaffs.set({
      ...current,
      [key]: staff.data,
    });
  } catch (err) {
    console.error('Error fetching department and category wise staff:', err);
  }
}
