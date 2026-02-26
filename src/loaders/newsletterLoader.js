import {
  fetchNewsletter,
  fetchSingleNewsletter,
  fetchFacultyWiseNewsletter,
  fetchDepartmentWiseNewsletter,
} from "../api/newsletter.js";
import {
  newsletterList,
  singleNewsletter,
  facultyWiseNewsletter,
  departmentWiseNewsletter,
} from "../stores/newsletter.js";

//fetch all newsletter
export async function fetchNewsletterAndFillStore() {
  try {
    const newsletter = await fetchNewsletter();
    newsletterList.set(newsletter.data);
  } catch (err) {
    console.error("Error fetching newsletter:", err);
  }
}
//fetch single newsletter
export async function fetchSingleNewsletterAndFillStore(id) {
  try {
    const newsletter = await fetchSingleNewsletter(id);
    singleNewsletter.set(newsletter.data);
  } catch (err) {
    console.error("Error fetching single newsletter:", err);
  }
}

//fetch faculty wise newsletter
export async function fetchFacultyWiseNewsletterAndFillStore(slug) {
  try {
    const newsletter = await fetchFacultyWiseNewsletter(slug);
    facultyWiseNewsletter.set(newsletter.data);
  } catch (err) {
    console.error("Error fetching faculty wise newsletter:", err);
  }
}

//fetch department wise newsletter
export async function fetchDepartmentWiseNewsletterAndFillStore(slug) {
  try {
    const newsletter = await fetchDepartmentWiseNewsletter(slug);
    departmentWiseNewsletter.set(newsletter.data);
  } catch (err) {
    console.error("Error fetching department wise newsletter:", err);
  }
}
