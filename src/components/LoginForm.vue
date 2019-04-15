<template>
  <form id="app" @submit.prevent="checkForm" method="post">
    <input id="username" placeholder="username" v-model="username" type="text" name="username">
    <input placeholder="password" v-model="password" type="password" name="password">
    <input type="submit" value="Submit">
  </form>
</template>

<script>
import axios from "axios";

// axios.defaults.withCredentials = true;

export default {
  data() {
    return {
      username: "Brian Bc",
      password: "Testing123"
    };
  },
  beforeMount: function() {},
  methods: {
    checkForm: function() {
      axios
        .post("http://localhost:3000/api/users/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.status === 200) {
            this.loginSuccess(response.data);
          }
        });
    },
    loginSuccess(data) {
      // this.authToken = token;
      this.$store.commit("userLogin", data);
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style lang="scss" scoped>
$vueGreen: #4ac08e;
</style>