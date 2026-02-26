import { atom } from "nanostores";
// activity list
export const activityList = atom([]);
export const activityListLoading = atom(false);
export const activityListError = atom(null);
// single activity
export const singleActivity = atom({});
export const singleActivityLoading = atom(false);
export const singleActivityError = atom(null);
// faculty wise activities
export const facultyWiseActivities = atom([]);
export const facultyActivitiesLoading = atom(false);
export const facultyActivitiesError = atom(null);
// department wise activities
export const departmentWiseActivities = atom([]);
export const departmentActivitiesLoading = atom(false);
export const departmentActivitiesError = atom(null);
