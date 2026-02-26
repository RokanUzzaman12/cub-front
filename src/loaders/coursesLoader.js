import { fetchDepartmentProgramWiseCourses } from '../api/courses';
import { departmentProgramWiseCourses } from '../stores/coursesStore';

// department program wise course fetch
export async function fetchDepartmentProgramWiseCoursesAndFillStore(slug) {
  try {
    const courses = await fetchDepartmentProgramWiseCourses(slug);
    departmentProgramWiseCourses.set(courses.data);
  } catch (err) {
    console.error('Error fetching department program wise course:', err);
  }
}
