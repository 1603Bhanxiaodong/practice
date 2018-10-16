<template>
  <section>
    <div class="top-info">
      <p>订单配送至</p>
      <h4>选择收货地址<i class="icon iconfont icon-angle-right"></i></h4>
    </div>
    <div class="payment">
      <div class="delivery-timer">
        <span>送达时间<strong>蜂鸟转送</strong></span>
        <span>尽快送达（15:20送达）<i class="icon iconfont icon-angle-right"></i></span>
      </div>
      <div class="payment-way">
        <span>支付方式</span>
        <span>在线支付</span>
      </div>
    </div>
    <div class="place-cont">
      <h4>西贝莜面村<span>（北京六里桥店）</span></h4>
      <ul>
        <li v-for="(val, item, key) in shopStoage" :key="key">
          <dl>
            <dt>
              <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=110680581,1899119421&fm=173&app=25&f=JPEG?w=218&h=146&s=692326D1185362DC432041350300C044" alt="">
            </dt>
            <dd>{{ item }}</dd>
          </dl>
          <span class='num'>{{ val[0] }}</span>
          <span class='price'>￥{{ val[1] }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'order',
  computed: {
    ...mapState({
      shopStoage: state => state.order.shopStoage
    })
  },
  methods: {
    ...mapActions({
      obtainStoage: 'order/obtainStoage'
    })
  },
  mounted () {
    this.obtainStoage()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';

section {
  flex: 1;
  padding: 0 pxTorem(10px);
  box-sizing: border-box;
  background: -webkit-linear-gradient( left, #01A4FF, #0079FE);
  .top-info {
    width: 100%;
    padding: 0 pxTorem(5px);
    box-sizing: border-box;
    p {
      width: 100%;
      height: pxTorem(30px);
      font-size: pxTorem(12px);
      line-height: pxTorem(30px);
      display: flex;
      color: #78EBFF;
    }
    h4 {
      color: #fff;
      font-size: pxTorem(16px);
      height: pxTorem(44px);
      line-height: pxTorem(44px);
    }
  }
  .payment {
    width: 100%;
    height: pxTorem(100px);
    background: #fff;
    padding: 0 pxTorem(5px);
    box-sizing: border-box;
      .delivery-timer {
        display: flex;
        height: pxTorem(70px);
        justify-content: space-between;
        align-items: center;
        span {
          color: #3D84B2;
          &:nth-of-type(1) {
            color: #666;
            position: relative;
            strong {
              position: absolute;
              width: pxTorem(60px);
              padding: pxTorem(1px) 0;
              background: blue;
              color: #fff;
              left: 0;
              top: pxTorem(20px);
              font-size: pxTorem(12px);
              text-align: center;
              background: -webkit-linear-gradient( left, #01A4FF, #0079FE);
            }
          }
          i.icon {
            color: #999;
          }
        }
    }
    .payment-way {
      display: flex;
      justify-content: space-between;
      color: #3D84B2;
      span {
        &:nth-of-type(1) {
          color: #000;
        }
      }
    }
  }
  .place-cont {
    width: 100%;
    background: #fff;
    margin-top: pxTorem(10px);
    padding: 0 pxTorem(5px);
    box-sizing: border-box;
    h4 {
      height: pxTorem(40px);
      line-height: pxTorem(40px);
      font-size: pxTorem(14px);
      border-bottom: pxTorem(1px) solid #eee;
      span {
        font-weight: 400;
      }
    }
    ul {
      li {
        height: pxTorem(50px);
        display: flex;
        align-items: center;
        border-bottom: 0.5px solid #ccc;
        dl {
          width: pxTorem(190px);
          display: flex;
          flex-shrink: 0;
          dt {
            width: pxTorem(30px);
            height: pxTorem(30px);
            img {
              width: 100%;
              height: 100%;
            }
          }
          dd {
            margin-left: pxTorem(10px);
          }
        }
        span {
          flex: 1;
          text-align: right;
          margin-right: pxTorem(10px)
        }
      }
    }
  }
}
</style>
