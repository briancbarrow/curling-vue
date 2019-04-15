<template>
  <div>
    <h3>{{ this.userName }}</h3>
    <p class="inline">
      Groups:
      <span v-if="!groups">N/A</span>
    </p>
    <select v-if="groups">
      <option v-for="group in groups" :key="group.id">{{group.name}}</option>
    </select>
    <!-- <p v-if="!groups" class="no-groups">No Assigned Groups</p> -->
    <table>
      <tbody>
        <tr class="headers">
          <th>High Score</th>
          <th>Low Score</th>
          <th>Games Won</th>
          <th>Games Lost</th>
        </tr>
        <tr>
          <td>{{userData.high_score}}</td>
          <td>{{userData.low_score}}</td>
          <td>{{userData.games_won}}</td>
          <td>{{userData.games_lost}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // name: null,
      // email: null,
      // groups: null,
      // high_score: null,
      // highest_end_score: null,
      // lowest_end_score: null,
      // low_score: null,
      // games_won: null,
      // games_lost: null,
      // userId: null
      userData: {}
    };
  },
  beforeMount() {},
  updated() {},
  created() {
    if (this.userId) {
      axios
        .get(`http://localhost:3000/api/user/${this.userId}`)
        .then(response => {
          this.userData = response.data;
        });
    }
  },
  methods: {},
  computed: {
    userId() {
      return this.$store.state.user.userId;
    },
    userName() {
      return this.$store.state.user.name;
    }
    // userData() {
    //   let data = axios
    //     .post(`http://localhost:3000/api/user/${this.userId}`)
    //     .then(response => {
    //       // console.log(response);
    //       return response;
    //     });
    //   return data;
    // }
  }
};
</script>

<style lang="scss" scoped>
table {
  margin: auto;
  border-collapse: collapse;
}
tr {
  border-spacing: 0px;
}
th,
td {
  border: 1px solid black;
  padding: 2px 7px;
}

p.inline {
  display: inline-block;
}
</style>