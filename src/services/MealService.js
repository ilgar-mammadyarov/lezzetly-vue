import $http from "./BaseService";

const getMeals = async () => {
  return $http.get("meals/");
};

const getMeal = async (id) => {
  return $http.get("meal/" + id);
};

const getSearchedMeals = async (searchStr) => {
  return $http.get("meals/?search=" + searchStr);
};

const getMealCategories = async () => {
  return $http.get("categories/");
};

const getMealOptions = async () => {
  return $http.get("mealoptions/");
};

export default {
  getMeals,
  getMeal,
  getSearchedMeals,
  getMealCategories,
  getMealOptions,
};
