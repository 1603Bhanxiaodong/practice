<template>
  <div class="wrap">
    <order-top></order-top>
    <order-list></order-list>
  </div>
</template>

<script>
import orderTop from './orderTop'
import orderList from './orderList'

export default {
  name: 'order',
  components: {
    'order-top': orderTop,
    'order-list': orderList
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: pxTorem(14px);
}
</style>
