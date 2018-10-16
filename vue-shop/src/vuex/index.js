import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './module'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {},
  modules
})
Store.dispatch('menu/init')
export default Store
