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
        hide (state) {
            state.isModalVisible = false
            state.showGif = false
        },
        showGif (state) {
            state.showGif = true
        },
        increment(state) {
            state.count++
        }
    },
    getters: {
        getModalStatus: state => state.isModalVisible
    },
    actions: {
        hideModal (context) {
            context.commit('hide')
        },
        showGif(context) {
            context.commit('showGif')
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