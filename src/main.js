import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./registerServiceWorker";

import UserDashboard from "./components/user/UserDashboard.vue";
import Scorecard from "./components/Scorecard.vue";
import LoginForm from "./components/LoginForm.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    component: UserDashboard
  },
  {
    path: "/scorecard",
    component: Scorecard
  },
  {
    path: "/login",
    component: LoginForm,
    name: "login"
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
