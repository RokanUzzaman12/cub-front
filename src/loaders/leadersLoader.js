import { fetchCategoryWiseLeaders, fetchLeaderCategories, fetchLeaders, fetchSingleLeader } from '../api/leaders.js';
import { leaderList, singleLeader, leaderCategories, categoryWiseLeaders } from '../stores/leadersStore.js';

//fetch all leaders
export async function fetchLeadersAndFillStore() {
  try {
    const leaders = await fetchLeaders();
    leaderList.set(leaders.data);
  } catch (err) {
    console.error('Error fetching leaders:', err);
  }
}
//fetch single leader
export async function fetchSingleLeaderAndFillStore(id) {
  try {
    const leader = await fetchSingleLeader(id);
    singleLeader.set(leader.data);
  } catch (err) {
    console.error('Error fetching single leader:', err);
  }
}

//fetch leader categories
export async function fetchLeaderCategoriesAndFillStore() {
  try {
    const leader_categories = await fetchLeaderCategories();
    leaderCategories.set(leader_categories.data);
  } catch (err) {
    console.error('Error fetching leader categories:', err);
  }
}

//fetch categories wise leaders
export async function fetchCategoryWiseLeadersAndFillStore(slug) {
  try {
    const leaders = await fetchCategoryWiseLeaders(slug);
    categoryWiseLeaders.set(leaders.data);
  } catch (err) {
    console.error('Error fetching  category wise leaders:', err);
  }
}
