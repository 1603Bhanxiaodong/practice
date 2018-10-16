<template>
  <div class="ment-top">
    <dl>
      <dt>
        <img src="../../assets/QQ图片20180918162734_03.jpg">
      </dt>
      <dd>
        <p>
          <span>{{ seller.name }}</span>
          <span>营业中</span>
        </p>
        <p>></p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'MenuTop',
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';

.ment-top {
  font-size: pxTorem(16px);
  border-bottom: 1px solid #ccc;
  dl {
    @include wh(100%, auto);
    display: flex;
    dt {
      @include wh(15%, auto);
      img {
        @include wh();
      }
    }
    dd {
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding-right: pxTorem(14px);
      margin-left: pxTorem(10px);
      p {
        &:nth-child(1) {
          span {
            display: block;
            &:nth-child(2) {
              color: #c1bfc0;
              margin-top: pxTorem(10px);
              font-size: pxTorem(14px);
            }
          }
        }
        &:nth-child(2) {
          font-family: '楷体';
          font-size: pxTorem(18px);
          margin-top: pxTorem(10px);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
