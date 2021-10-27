import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cook from "../views/Cook.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import CourierDashboard from "../views/Dashboard/courier/CourierDashboard.vue";
import CookDashboard from "../views/Dashboard/cook/CookDashboard.vue";
import ClientDashboard from "../views/Dashboard/client/ClientDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cook/:id",
    name: "Cook",
    component: Cook,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cookdashboard",
    name: "CookDashboard",
    component: CookDashboard,
  },
  {
    path: "/courierdashboard",
    name: "CourierDashboard",
    component: CourierDashboard,
  },
  {
    path: "/clientdashboard",
    name: "ClientDashboard",
    component: ClientDashboard,
  },
];

// .then(() => {
//   this.$router.push({name: dashboard})
// })

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
