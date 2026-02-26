import { atom } from "nanostores";
// newsletter list
export const newsletterList = atom([]);
export const newsletterListLoading = atom(false);
export const newsletterListError = atom(null);
// single Newsletter
export const singleNewsletter = atom({});
export const singleNewsletterLoading = atom(false);
export const singleNewsletterError = atom(null);
// faculty wise Newsletter
export const facultyWiseNewsletter = atom([]);
export const facultyNewsletterLoading = atom(false);
export const facultyNewsletterError = atom(null);
// department wise Newsletter
export const departmentWiseNewsletter = atom([]);
export const departmentNewsletterLoading = atom(false);
export const departmentNewsletterError = atom(null);
