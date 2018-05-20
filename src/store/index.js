import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  actions: {
    async getData ({ commit }) {
      await setTimeout(() => {
        commit('test', 'actions commit test')
      }, 20000)
    }
  }
})

export default store
