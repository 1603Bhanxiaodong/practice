<template>
  <div class="menu">
    <menu-top :seller="seller"></menu-top>
    <menu-list :goods="goods"></menu-list>
    <menu-footer :goods="goods"></menu-footer>
  </div>
</template>

<script>
import { MenuList } from '@/mock/shop'
import MenuTop from './MenuTop'
import MenuLists from './MenuList'
import Footer from './MenuFooter'

export default {
  name: 'Menu',
  data () {
    return {
      seller: MenuList.seller,
      goods: MenuList.goods
    }
  },
  components: {
    'menu-top': MenuTop,
    'menu-list': MenuLists,
    'menu-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
