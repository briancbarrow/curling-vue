import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isModalVisible: true,
        count: 0,
        showGif: false
    },
    mutations: {
        toggle (state) {
            // state.isModalVisible = !state.isModalVisible
            state.showGif = !state.showGif
        },
        toggleGif (state) {
            state.showGif = !state.showGif
        },
        increment(state) {
            state.count++
        }
    },
    getters: {
        getModalStatus: state => state.isModalVisible
    },
    actions: {
        commitToggle (context) {
            context.commit('toggle')
        },
        toggleGif(context) {
            context.commit('toggleGif')
        }
    }
})

export default store;
//   export const store = new Vuex.Store({
//     state: {
//       flavor: ''
//     },
//     mutations: {
//       change(state, flavor) {
//         state.flavor = flavor
//       }
//     },
//     getters: {
//       flavor: state => state.flavor
//     }
//   })