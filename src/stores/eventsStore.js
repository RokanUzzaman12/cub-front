import { atom } from "nanostores";
// event list
export const eventList = atom([]);
export const eventListLoading = atom(false);
export const eventListError = atom(null);
// single event
export const singleEvent = atom({});
export const singleEventLoading = atom(false);
export const singleEventError = atom(null);
// faculty wise events
export const facultyWiseEvents = atom([]);
export const facultyEventsLoading = atom(false);
export const facultyEventsError = atom(null);
// department wise event
export const departmentWiseEvents = atom([]);
export const departmentEventsLoading = atom(false);
export const departmentEventsError = atom(null);
