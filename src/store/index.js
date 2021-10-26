import Vue from "vue";
import Vuex from "vuex";

import auth from "@/store/modules/auth/auth";
import meal from "@/store/modules/meal/meal.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    meal,
  },
});
