import { fetchBrands } from '../api/brands.js';
import { brandList } from '../stores/brandStore.js';

//fetch all brands
export async function fetchBrandsAndFillStore() {
  try {
    const brands = await fetchBrands();
    brandList.set(brands.data);
  } catch (err) {
    console.error('Error fetching brands:', err);
  }
}
