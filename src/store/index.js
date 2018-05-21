import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const counter = {
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

  },
  getters: {

  }
}

const index = {
  state: {
    test: '我是首页测试vuex state的数据'
  },
  mutations: {

  },
  actions: {

  }
}

const log = {
  state: {

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
}

const store = new Vuex.Store({
  state: {
    test: 'test'
  },
  // mutations: {
  //   increment: (state) => {
  //     const obj = state
  //     obj.count += 1
  //   },
  //   decrement: (state) => {
  //     const obj = state
  //     obj.count -= 1
  //   }
  // },
  // actions: {
  //   async getData ({ commit }) {
  //     await setTimeout(() => {
  //       commit('test', 'actions commit test')
  //     }, 20000)
  //   }
  // },
  modules: {
    counter,
    index,
    log
  }
})

export default store
