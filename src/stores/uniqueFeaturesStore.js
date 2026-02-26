import { atom } from "nanostores";
// UniqueFeature list
export const uniqueFeatureList = atom([]);
export const uniqueFeatureListLoading = atom(false);
export const uniqueFeatureListError = atom(null);
// single UniqueFeature
export const singleUniqueFeature= atom({});
export const singleUniqueFeatureLoading = atom(false);
export const singleUniqueFeatureLoadingError = atom(null);
// faculty wise UniqueFeatures
export const facultyWiseUniqueFeatures = atom([]);
export const facultyUniqueFeaturesLoading = atom(false);
export const facultyUniqueFeaturesError = atom(null);
// department wise UniqueFeatures
export const departmentWiseUniqueFeatures = atom([]);
export const departmentUniqueFeaturesLoading = atom(false);
export const departmentUniqueFeaturesError = atom(null);
