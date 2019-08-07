<template>
  <div v-show="isModalVisible" id="best-player-modal">
    <div class="modal-content">
      <h1>Is Brian Barrow Still the Best?</h1>
      <div class="button-container">
        <button v-on:click="hideModal">Yes</button>
        <button v-on:click="showGif">No</button>
      </div>
      <div class="gif-audio" v-if="isGifVisible">
        <img src="https://media0.giphy.com/media/5ftsmLIqktHQA/source.gif">
        <audio id="beep" loop autoplay>
          <source src="http://wavcentral.com/sounds/movies/jurassic/jurass01.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
  },
  computed: {
    isModalVisible() {
      return this.$store.state.isModalVisible;
    },
    isGifVisible() {
      return this.$store.state.showGif
    }
  },
  methods: {
    ...mapActions([
      'hideModal',
      'showGif'
    ]),
    // playSound () {
    //   this.toggleGif()
    //     var audio = new Audio("http://wavcentral.com/sounds/movies/jurassic/jurass01.mp3");
    //     audio.loop = true;
    //     audio.play();
    // }
  }
}
</script>

<style lang="scss" scoped>
#best-player-modal {
  position: absolute;
  top: 0px;
  background-color: #17161636;
  padding: 20px;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9fafa;
}
</style>