<template>
  <header>
    <span><i class="icon iconfont icon-xiangzuo"></i></span>
    <span>确认订单</span>
    <span><i class="icon iconfont icon-eyeoclose"></i></span>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';

header {
  width: 100%;
  height: pxTorem(44px);
  padding: 0 pxTorem(15px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: -webkit-linear-gradient( left, #01A4FF, #0079FE);
  span {
    height: 100%;
    line-height: pxTorem(44px);
    color: #fff;
    &:nth-of-type(1) {
      line-height: pxTorem(44px)
    }
    &:nth-of-type(2) {
      font-size: pxTorem(16px);
    }
    &:nth-of-type(3) {
      opacity: 0;
    }
  }
}
</style>
