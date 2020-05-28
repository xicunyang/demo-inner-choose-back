import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: 'this is token',
  },
  getters,
  actions,
  mutations,
})

export default store
