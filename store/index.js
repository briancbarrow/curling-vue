import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    jwt: "",
    isLoggedIn: false
  },
  mutations: {
    userLogin(state, newJwt) {
      state.jwt = newJwt;
      state.isLoggedIn = true;
    },
    userLogout(state) {
      state.isLoggedIn = false;
    }
  }
});
export default store;
