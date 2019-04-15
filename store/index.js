import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authToken: "",
    user: {
      userId: null,
      name: null,
      email: null
    },
    isLoggedIn: false
  },
  mutations: {
    userLogin(state, data) {
      state.authToken = data.authToken;
      state.user = data.user;
      state.isLoggedIn = true;
    },
    userLogout(state) {
      state.isLoggedIn = false;
    }
  }
});
export default store;
