<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Players</th>
          <th v-for="end in ends" :key="end.endId">{{end.endId}}</th>
          <th>Total</th>
        </tr>
        <tr id="player1">
          <td>
            <img src="../assets/Curling-hammer.svg" alt="curling hammer" v-if="player1.hasHammer">
          </td>
          <td class="playerName">
            <input v-model="player1.name">
          </td>
          <td class="score" v-for="end in ends" :key="end.endId">
            <p v-if="end.endWinner==0" class="scoreInput1">{{ end.score }}</p>
          </td>
          <td>{{ player1.total }}</td>
        </tr>
        <tr id="player2">
          <td>
            <img src="../assets/Curling-hammer.svg" alt="curling hammer" v-if="player2.hasHammer">
          </td>
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
    <button type="button" v-on:click="previousEnd">Go To Previous End</button>
    <ScoreControl
      v-on:submit-score="addScore"
      :endTracker="endTracker"
      :players="[player1, player2]"
    ></ScoreControl>
    <BestPlayerModal></BestPlayerModal>
  </div>
</template>

<script>
import ScoreControl from "./ScoreControl.vue";
import BestPlayerModal from "./BestPlayerModal"

export default {
  data() {
    return {
      endTracker: 1,
      endCount: 10,
      ends: [],
      player1: {
        total: 0,
        name: "Player 1",
        hasHammer: true
      },
      player2: {
        total: 0,
        name: "Player 2",
        hasHammer: false
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
    ScoreControl,
    BestPlayerModal
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
      if (this.endCount > 10) {
        this.endCount--;
        this.ends.pop();
      }
    },
    previousEnd() {
      this.endTracker--;
      let previousEnd = this.ends[this.endTracker - 1];
      let previousScore = previousEnd.score;
      let previousEndWinner = previousEnd.endWinner;
      if (previousEndWinner === 0) {
        this.player1.total -= previousScore;
      } else {
        this.player2.total -= previousScore;
      }
    },
    addScore(player, score, scoreEnd) {
      scoreEnd = scoreEnd - 1;
      this.ends[scoreEnd].score = score;
      this.ends[scoreEnd].endWinner = player;
      this.endTracker++;
      // this.ends[endTracker].hasHammer = !player;
      if (player === 0) {
        this.player1.total += score;
        this.player1.hasHammer = false;
        this.player2.hasHammer = true;
      } else {
        this.player2.total += score;
        this.player2.hasHammer = false;
        this.player1.hasHammer = true;
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

img {
  max-width: 20px;
  margin-right: 10px;
}
td:last-child {
  font-weight: bold;
  color: $vueGreen;
}
</style>
