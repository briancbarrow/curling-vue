<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>Players</th>
          <th v-for="index in ends" :key="index">{{index}}</th>
          <th>Total</th>
        </tr>
        <tr>
          <td class="playerName">
            <input v-model="player1.name">
          </td>
          <td v-for="index in ends" :key="index">
            <input class="scoreInput1" type="number" v-on:keyup="totalScore">
          </td>
          <td>{{ player1.total }}</td>
        </tr>
        <tr>
          <td class="playerName">
            <input v-model="player2.name">
          </td>
          <td v-for="index in ends" :key="index">
            <input class="scoreInput2" type="number" v-on:keyup="totalScore">
          </td>
          <td>{{ player2.total }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" v-on:click="addEnd">Add Extra End</button>
    <button type="button" v-on:click="removeEnd">Remove Extra End</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ends: 10,
      player1: {
        total: 0,
        name: "Player 1"
      },
      player2: {
        total: 0,
        name: "Player 2"
      }
    };
  },
  methods: {
    addEnd() {
      this.ends++;
    },
    removeEnd() {
      if (this.ends >= 10) {
        this.ends--;
      }
    },
    totalScore() {
      const player1Inputs = document.getElementsByClassName("scoreInput1");
      const player2Inputs = document.getElementsByClassName("scoreInput2");
      this.player1.total = 0;
      this.player2.total = 0;

      for (let i = 0; i < player1Inputs.length; i++) {
        const inputValue = parseInt(player1Inputs[i].value);
        if (inputValue) {
          this.player1.total += parseInt(player1Inputs[i].value);
        }
      }
      for (let i = 0; i < player2Inputs.length; i++) {
        const inputValue = parseInt(player2Inputs[i].value);
        if (inputValue) {
          this.player2.total += parseInt(player2Inputs[i].value);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$vueGreen: #4ac08e;

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

input {
  max-width: 40px;
  height: 40px;
  text-align: center;
  font-size: 0.9rem;
}
table {
  margin: auto;
}
button {
  display: block;
  margin: 10px auto;
  border-style: outset;
  border-radius: 5px;
  padding: 4px 15px 5px;
  font-size: 0.7rem;
  background-color: $vueGreen;
}
</style>
