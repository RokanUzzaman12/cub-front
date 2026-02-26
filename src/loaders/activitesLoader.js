import {
  fetchActivities,
  fetchSingleActivity,
  fetchFacultyWiseActivities,
  fetchDepartmentWiseActivities,
} from "../api/activities.js";
import {
  activityList,
  singleActivity,
  facultyWiseActivities,
  departmentWiseActivities,
} from "../stores/activitiesStore.js";

//fetch all activities
export async function fetchActivitiesAndFillStore() {
  try {
    const activities = await fetchActivities();
    activityList.set(activities.data);
  } catch (err) {
    console.error("Error fetching activities:", err);
  }
}
//fetch single activity
export async function fetchSingleActivityAndFillStore(id) {
  try {
    const activity = await fetchSingleActivity(id);
    singleActivity.set(activity.data);
  } catch (err) {
    console.error("Error fetching single activity:", err);
  }
}

//fetch faculty wise activities
export async function fetchFacultyWiseActivitiesAndFillStore(slug) {
  try {
    const activities = await fetchFacultyWiseActivities(slug);
    facultyWiseActivities.set(activities.data);
  } catch (err) {
    console.error("Error fetching faculty wise activities:", err);
  }
}

//fetch department wise activities
export async function fetchDepartmentWiseActivitiesAndFillStore(slug) {
  try {
    const activities = await fetchDepartmentWiseActivities(slug);
    departmentWiseActivities.set(activities.data);
  } catch (err) {
    console.error("Error fetching department wise activities:", err);
  }
}
