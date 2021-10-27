import $http from "./BaseService";

const register = async (data) => {
  return $http.post("register/", data);
};

const login = async (data) => {
  return $http.post("login/", data);
};
export default {
  register,
  login,
};
