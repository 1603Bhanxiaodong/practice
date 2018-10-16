<template>
  <div class="footer">
    <div class="shopIcon" @click="changConversion">
      <i class="icon iconfont icon-gouwuche">
        <i v-if="num">{{ num }}</i>
      </i>
      <p>￥{{ total }}</p>
    </div>
    <div class="shopConfirm" @click="jump">
      选好了
    </div>
    <menu-mask v-if="conversion"></menu-mask>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MenuMask from './MenuMask'

export default {
  name: 'Footer',
  data () {
    return {
      conversion: false
    }
  },
  computed: {
    ...mapState({
      total: state => state.menu.total,
      num: state => state.menu.num
    })
  },
  methods: {
    jump () {
      this.$router.push('/order')
    },
    changConversion () {
      this.conversion = !this.conversion
    }
  },
  components: {
    'menu-mask': MenuMask
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';

.footer {
  width: 100%;
  height: pxTorem(45px);
  background: #404040;
  font-size: pxTorem(14px);
  display: flex;
  justify-content: space-between;
  position: relative;
}
.shopIcon {
  display: flex;
  align-items: center;
  i.icon {
    width: pxTorem(50px);
    height: pxTorem(50px);
    color: $white;
    background: $green;
    border-radius: pxTorem(50px);
    text-align: center;
    line-height: pxTorem(50px);
    font-size: pxTorem(25px);
    position: absolute;
    left: pxTorem(5px);
    top: pxTorem(-25px);
    i {
      width: pxTorem(20px);
      height: pxTorem(20px);
      position: absolute;
      left: pxTorem(30px);
      top: pxTorem(-6px);
      font-size: pxTorem(16px);
      background: $red;
      text-align: center;
      line-height: pxTorem(20px);
      font-style: normal;
      border-radius: pxTorem(20px)
    }
  }
  p {
    margin-left: pxTorem(60px);
    color: $white;
    font-size: pxTorem(18px);
  }
}
.shopConfirm {
  @include wh(30%, 100%);
  background: $green;
  color: $white;
  text-align: center;
  line-height: pxTorem(45px);
  font-size: pxTorem(18px);
}
</style>
