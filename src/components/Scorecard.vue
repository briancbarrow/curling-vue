<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>Players</th>
          <th v-for="end in ends" :key="end.endId">{{end.endId}}</th>
          <th>Total</th>
        </tr>
        <tr id="player1">
          <td class="playerName">
            <input v-model="player1.name">
          </td>
          <td class="score" v-for="end in ends" :key="end.endId">
            <p v-if="end.endWinner==0" class="scoreInput1">{{ end.score }}</p>
          </td>
          <td>{{ player1.total }}</td>
        </tr>
        <tr id="player2">
          <td class="playerName">
            <input v-model="player2.name">
          </td>
          <td class="score" v-for="end in ends" :key="end.endId">
            <p v-if="end.endWinner==1" class="scoreInput2">{{ end.score }}</p>
          </td>
          <td>{{ player2.total }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" v-on:click="addEnd">Add Extra End</button>
    <button type="button" v-on:click="removeEnd">Remove Extra End</button>
    <ScoreControl
      v-on:submit-score="addScore"
      :endTracker="endTracker"
      :players="[player1, player2]"
    ></ScoreControl>
  </div>
</template>

<script>
import ScoreControl from "./ScoreControl.vue";

export default {
  data() {
    return {
      endTracker: 1,
      endCount: 10,
      ends: [],
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
  created: function() {
    for (let index = 1; index <= this.endCount; index++) {
      this.ends.push({
        endId: index,
        score: 0,
        endWinner: null
      });
    }
  },
  components: {
    ScoreControl
  },
  methods: {
    addEnd() {
      this.endCount++;
      this.ends.push({
        endId: this.endCount,
        score: 0,
        endWinner: null
      });
    },
    removeEnd() {
      if (this.endCount >= 10) {
        this.endCount--;
        this.ends.pop();
      }
    },
    addScore(player, score, scoreEnd) {
      scoreEnd = scoreEnd - 1;
      this.ends[scoreEnd].score = score;
      this.ends[scoreEnd].endWinner = player;
      this.endTracker++;
      if (player === 0) {
        this.player1.total += score;
      } else {
        this.player2.total += score;
      }
    }
    // totalScore() {
    //   const player1Inputs = document.getElementsByClassName("scoreInput1");

    //   console.log(player1Inputs);
    //   const player2Inputs = document.getElementsByClassName("scoreInput2");
    //   this.player1.total = 0;
    //   this.player2.total = 0;

    //   for (let i = 0; i < player1Inputs.length; i++) {
    //     console.log(player1Inputs[i]);
    //     const inputValue = parseInt(player1Inputs[i].value);
    //     if (inputValue) {
    //       this.player1.total += parseInt(player1Inputs[i].value);
    //     }
    //   }
    //   for (let i = 0; i < player2Inputs.length; i++) {
    //     const inputValue = parseInt(player2Inputs[i].value);
    //     if (inputValue) {
    //       this.player2.total += parseInt(player2Inputs[i].value);
    //     }
    //   }
    // }
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
.playerName {
  input {
    max-width: 70px;
  }
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
.score {
  min-width: 20px;
}

tr {
  border: 1px solid black;
}

td:last-child {
  font-weight: bold;
  color: $vueGreen;
}
</style>
