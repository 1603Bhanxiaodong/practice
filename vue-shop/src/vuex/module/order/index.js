import {
  OBTAINSTOAGE
} from '../../mutations_type'
const order = {
  namespaced: true,
  state: {
    shopStoage: null
  },
  actions: {
    obtainStoage ({ commit }) {
      let result = JSON.parse(localStorage.getItem('menu'))
      commit('OBTAINSTOAGE', result)
    }
  },
  mutations: {
    [OBTAINSTOAGE] (state, payload) {
      state.shopStoage = payload
    }
  }
}

export default order
