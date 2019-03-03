<template>
  <div class="control">
    <p>End: {{ this.endTracker }}</p>
    <p>
      End Winner:
      <select v-model="selected">
        <option
          v-for="player in this.players"
          :key="players.indexOf(player)"
          :value="players.indexOf(player)"
        >{{player.name}}</option>
      </select>
    </p>
    <div class="score-container">
      <p>
        Score:
        <input type="number" min="0" max="5" v-model.number="score">
      </p>
    </div>
    <button type="submit" v-on:click.prevent="submitScore">Submit End Score</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // players:
      selected: 0,
      score: 0
    };
  },
  beforeMount: function() {
    console.log(this.players);
  },
  props: ["endTracker", "players"],
  methods: {
    submitScore: function() {
      this.$emit("submit-score", this.selected, this.score, this.endTracker);
    }
  }
};
</script>

<style lang="scss" scoped>
$vueGreen: #4ac08e;
p {
  display: block;
}
div.control {
  max-width: 250px;
  margin: auto;
  border: 1px solid $vueGreen;
}
input[type="number"] {
  max-width: 30px;
}
</style>