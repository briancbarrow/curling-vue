<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1 class="title">Elit3 Curling</h1>
    <h2 class="subtitle">Tabletop Curling Web App</h2>
    <scorecard/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Scorecard from "./components/Scorecard.vue";

export default {
  name: "app",
  components: {
    // HelloWorld,
    Scorecard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
