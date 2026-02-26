import { fetchFaculties, fetchSingleFaculty, fetchFacultyBySlug } from '../api/faculties';
import { facultyList, singleFaculty } from '../stores/facultiesStore';

//fetch all faculties
export async function fetchFacultiesAndFillStore() {
  try {
    const faculties = await fetchFaculties();
    facultyList.set(faculties.data);
  } catch (err) {
    console.error('Error fetching faculties:', err);
  }
}

//fetch single faculty by slug
export async function fetchfacultyBySlugAndFillStore(slug) {
  try {
    const faculty = await fetchFacultyBySlug(slug);
    singleFaculty.set(faculty.data);
    localStorage.setItem('selectedFaculty', JSON.stringify({ slug: faculty.data.slug }));
  } catch (err) {
    console.error('Error fetching single faculty by slug:', err);
  }
}

//fetch single faculty
export async function fetchSingleFacultyAndFillStore(id) {
  try {
    const faculty = await fetchSingleFaculty(id);
    singleFaculty.set(faculty.data);
  } catch (err) {
    console.error('Error fetching single faculty:', err);
  }
}
