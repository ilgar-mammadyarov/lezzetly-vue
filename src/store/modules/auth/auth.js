import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    token: null,
    error: null,
  }),
  mutations,
  actions,
  getters,
};
