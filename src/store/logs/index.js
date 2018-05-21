const log = {
  state: {
    test: '我是模块log的test state'
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

export default log
