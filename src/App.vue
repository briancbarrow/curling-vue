<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <h1 class="title">Elit3 Curling</h1> -->
    <img class="stone-image" src="./assets/Curling_stone.svg" alt="curling stone">
    <h2 class="subtitle">Tabletop Curling Web App</h2>
    <scorecard/>
    <p class="attribution">
      Hammer image attribution: By
      <a
        href="//commons.wikimedia.org/wiki/User:MDBR"
        title="User:MDBR"
      >MDBR</a> -
      <span class="int-own-work" lang="en">Own work</span>,
      <a
        href="https://creativecommons.org/licenses/by-sa/3.0"
        title="Creative Commons Attribution-Share Alike 3.0"
      >CC BY-SA 3.0</a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=31149012">Link</a>
    </p>
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
}

.stone-image {
  max-width: 100px;
}
.subtitle {
  margin-top: 0;
}
p.attribution {
  font-size: 0.7rem;
  margin-top: 30px;
}
</style>
