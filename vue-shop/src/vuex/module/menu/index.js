import {
  menu2stoage,
  menuInStoage,
  assignMenus
} from '@/utils/menu'
import { MenuList } from '@/mock/shop'
import {
  ADD,
  DEL,
  INITMENU
} from '../../mutations_type'

const menu = {
  namespaced: true,
  state: {
    total: 0,
    num: 0,
    goods: MenuList.goods
  },
  actions: {
    init ({ dispatch }) {
      dispatch('initShopCar')
      dispatch('initMenu')
      dispatch('add')
    },
    initShopCar () {
      console.log('initShopCar')
    },
    // 初始的时候取本地存储
    initMenu ({ commit }) {
      if (!localStorage.getItem('menu')) {
        commit('INITMENU', MenuList)
      } else {
        const result = assignMenus(MenuList.goods, JSON.parse(localStorage.getItem('menu')))
        MenuList.goods = result
        commit('INITMENU', MenuList)
      }
    },
    // count 加
    add ({ commit, state }, payload) {
      let { goods } = state;
      let total = 0;
      let num = 0;
      goods.map((v) => {
        v.children.map((val) => {
          if (val.name === payload) {
            val.count++
          }
          total += val.count * val.price
          num += val.count
        })
      })
      commit('ADD', { total, num })
      menuInStoage(menu2stoage(goods, payload))
    },
    // count 减
    del ({ commit, state }, payload) {
      let { goods } = state;
      let total = 0;
      let num = 0;
      goods.map((v) => {
        v.children.map((val) => {
          if (val.name === payload) {
            val.count--
          }
          total += val.count * val.price
          num += val.count
        })
      })
      commit('DEL', { total, num })
      menuInStoage(menu2stoage(goods, payload))
    }
  },
  mutations: {
    [ADD] (state, payload) {
      state.total = payload.total
      state.num = payload.num
    },
    [DEL] (state, payload) {
      state.total = payload.total
      state.num = payload.num
    },
    [INITMENU] (state, payload) {

    }
  }
}

export default menu
