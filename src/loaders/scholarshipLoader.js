import { fetchScholarshipCategories, fetchScholarships, fetchSingleScholarship } from '../api/scholarships.js';
import { scholarshipCategories, scholarshipList, singleScholarship } from '../stores/scholarships.js';

//fetch all scholarships
export async function fetchScholarshipsAndFillStore() {
  try {
    const scholarships = await fetchScholarships();
    scholarshipList.set(scholarships.data);
  } catch (err) {
    console.error('Error fetching scholarships:', err);
  }
}
//fetch single scholarship
export async function fetchSingleScholarshipAndFillStore(id) {
  try {
    const scholarship = await fetchSingleScholarship(id);
    singleScholarship.set(scholarship.data);
  } catch (err) {
    console.error('Error fetching single scholarship:', err);
  }
}

//fetch scholarship categories
export async function fetchScholarshipCategoriesAndFillStore() {
  try {
    const scholarship_categories = await fetchScholarshipCategories();
    scholarshipCategories.set(scholarship_categories.data);
  } catch (err) {
    console.error('Error fetching scholarship categories:', err);
  }
}

//fetch categories wise scholarships
// export async function fetchCategoryWiseLeadersAndFillStore(slug) {
//   try {
//     const leaders = await fetchCategoryWiseLeaders(slug);
//     categoryWiseLeaders.set(leaders.data);
//   } catch (err) {
//     console.error('Error fetching  category wise leaders:', err);
//   }
// }
