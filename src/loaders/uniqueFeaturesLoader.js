import { fetchUniqueFeatures,fetchSinglefetchUniqueFeature,fetchDepartmentWiseUniqueFeature,fetchFacultyWiseUniqueFeature } from '../api/uniqueFeatures.js';
import { uniqueFeatureList, singleUniqueFeature, facultyWiseUniqueFeatures, departmentWiseUniqueFeatures } from '../stores/uniqueFeaturesStore.js';

//fetch all uniqueFeatures
export async function fetchUniqueFeaturesAndFillStore() {
  try {
    const uniqueFeatures = await fetchUniqueFeatures();
    uniqueFeatureList.set(uniqueFeatures.data);
  } catch (err) {
    console.error('Error fetching uniqueFeatures:', err);
  }
}
//fetch single uniqueFeatures
export async function fetchSingleUniqueFeatureAndFillStore(id) {
  try {
    const uniqueFeature = await fetchSinglefetchUniqueFeature(id);
    singleUniqueFeature.set(uniqueFeature.data);
  } catch (err) {
    console.error('Error fetching single uniqueFeature:', err);
  }
}

//fetch faculty wise uniqueFeature
export async function fetchFacultyWiseUniqueFeatureAndFillStore(slug) {
  try {
    const uniqueFeature = await fetchFacultyWiseUniqueFeature(slug);
    facultyWiseUniqueFeatures.set(uniqueFeature.data);
  } catch (err) {
    console.error('Error fetching faculty wise uniqueFeature:', err);
  }
}

//fetch department wise uniqueFeature
export async function fetchDepartmentWiseUniqueFeatureAndFillStore(slug) {
  try {
    const uniqueFeature = await fetchDepartmentWiseUniqueFeature(slug);
    departmentWiseUniqueFeatures.set(uniqueFeature.data);
    console.log('Fetched department wise uniqueFeature:');
  } catch (err) {
    console.error('Error fetching department wise uniqueFeature:', err);
  }
}
