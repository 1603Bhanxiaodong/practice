import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/container/menu'
import Order from '@/container/order'
import Maps from '@/components/map'
import TenxunMap from '@/components/map/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/menu'
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/map',
      name: 'map',
      component: Maps
    },
    {
      path: '/maps',
      name: 'maps',
      component: TenxunMap
    }
  ]
})
