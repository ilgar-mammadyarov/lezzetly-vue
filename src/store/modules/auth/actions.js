import AuthService from "@/services/AuthService";

export default {
  postRegister({ commit }, data) {
    return new Promise((resolve, reject) => {
      AuthService.register(data)
        .then((response) => {
          commit("SET_TOKEN", response.data);
          resolve(response);
        })
        .catch((error) => {
          // console.log(error);
          reject(error);
        });
    });
  },
  postLogin({ commit }, loginMod) {
    return new Promise((resolve, reject) => {
      AuthService.login(loginMod)
        .then((response) => {
          commit("SET_TOKEN", response.data);
          resolve(response);
        })
        .catch((error) => {
          // console.log(error);
          reject(error);
        });
    });
  },
};
