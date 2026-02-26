import { fetchCampusLife, fetchSingleCampusLife } from '../api/campusLife.js';
import {
  campusLifeList,
  campusLifeListError,
  singlecampusLife,
  campusLifeListLoading,
  singlecampusLifeLoading,
  singlecampusLifeError,
} from '../stores/campusLife.js';

//fetch all Campus Life
export async function fetchCampusLifeAndFillStore() {
  try {
    campusLifeListLoading.set(true);
    campusLifeListError.set(null);
    const campus_life_list = await fetchCampusLife();
    campusLifeList.set(campus_life_list.data);
  } catch (err) {
    campusLifeListError.set(err);
    console.error('Error fetching campus life:', err);
  } finally {
    campusLifeListLoading.set(false);
  }
}
//fetch single campusLife
export async function fetchSingleCampusLifeAndFillStore(id) {
  try {
    singlecampusLifeLoading.set(true);
    singlecampusLifeError.set(null);
    const campusLife = await fetchSingleCampusLife(id);
    singlecampusLife.set(campusLife.data);
  } catch (err) {
    singlecampusLifeError.set(err);
    console.error('Error fetching single campus life:', err);
  } finally {
    singlecampusLifeLoading.set(false);
  }
}
