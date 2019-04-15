<template>
  <div>
    <h3>{{ name }}</h3>
    <p>Groups:</p>
    <select v-if="groups">
      <option v-for="group in groups" :key="group.id">{{group.name}}</option>
    </select>
    <table>
      <tbody>
        <tr class="headers">
          <th>High Score</th>
          <th>Low Score</th>
          <th>Games Won</th>
          <th>Games Lost</th>
        </tr>
        <tr>
          <th>{{high_score}}</th>
          <th>{{low_score}}</th>
          <th>{{games_won}}</th>
          <th>{{games_lost}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      groups: null,
      high_score: null,
      highest_end_score: null,
      lowest_end_score: null,
      low_score: null,
      games_won: null,
      games_lost: null,
      userId: null
    };
  },
  beforeMount() {
    axios
      .post("http://localhost:8080/api/users/login", {
        username: this.username,
        password: this.password
      })
      .then(response => {
        if (response.status === 200) {
          this.loginSuccess(response.data.authToken);
        }
      });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>