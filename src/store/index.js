import Vue from 'vue'
import Vuex from 'vuex'
// import module
import counter from '@/store/counter/index'
import index from '@/store/index/index'
import log from '@/store/logs/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
    index,
    log
  }
})

export default store
