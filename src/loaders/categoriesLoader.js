import { fetchCategories, fetchSingleCategory } from '../api/categories.js';
import { categoryList, singleCategory } from '../stores/categoryStore.js';

//fetch all categories
export async function fetchCategoriesAndFillStore() {
  try {
    const categories = await fetchCategories();
    categoryList.set(categories.data);
  } catch (err) {
    console.error('Error fetching staff categories:', err);
  }
}
//fetch single category
export async function fetchSingleCategoryAndFillStore(id) {
  try {
    const category = await fetchSingleCategory(id);
    singleCategory.set(category.data);
  } catch (err) {
    console.error('Error fetching single category:', err);
  }
}
