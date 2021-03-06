import devtools from "@vue/devtools";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";

if (process.env.NODE_ENV === "production") {
  devtools.connect("http://localhost", 8098);
}

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
