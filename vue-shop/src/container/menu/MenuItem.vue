<template>
  <ul>
    <li v-for="(item, index) in listData" :key="index">
      <dl>
        <dt><img src="../../assets/QQ图片20180918162734_03.jpg"></dt>
        <dd>
          <p>{{ item.name }}</p>
          <p>
            <span>￥{{ item.price }} <b>/元</b></span>
            <span v-if="item.count === 0" class="shopInit" @click="Add(item.name)">选规格</span>
            <span v-else class="shopComputed">
              <button @click="Del(item.name)">-</button>
              <b>{{ item.count }}</b>
              <button @click="Add(item.name)">+</button>
            </span>
          </p>
        </dd>
      </dl>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MenuItem',
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions({
      'add': 'menu/add',
      'del': 'menu/del'
    }),
    Add (name) {
      this.add(name)
    },
    Del (name) {
      this.del(name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';
dl {
  width: 100%;
  height: auto;
  margin-block-start: 0;
  margin-block-end: 0;
  display: flex;
  margin-top: pxTorem(10px);
  border-bottom: 1px solid #ccc;
  dd {
    width: 100%;
    margin-left: pxTorem(10px);
    p {
      &:nth-child(1) {
        width: 70%;
        @include ellipsis();
      }
      &:nth-child(2) {
        margin: pxTorem(10px) 0;
        display: flex;
        justify-content: space-between;
        padding-right: pxTorem(14px);
        span {
          &:nth-child(1) {
            color: red;
            b {
              font-weight: normal;
              color: #c2c3bd;
              font-size: pxTorem(14px);
            }
          }
        }
        .shopInit {
            width: pxTorem(60px);
            height: pxTorem(30px);
            background: $green;
            border-radius: pxTorem(20px);
            color: $white;
            text-align: center;
            line-height: pxTorem(30px);
          }
          .shopComputed {
            width: pxTorem(80px);
            height: pxTorem(30px);
            background: $white;
            display: flex;
            button {
              width: pxTorem(25px);
              height: pxTorem(25px);
              background: $white;
              border-radius: pxTorem(20px);
              border: 0;
              outline: 0;
              border: 1px solid $green;
              font-size: pxTorem(20px);
              &:nth-of-type(2) {
                background: $green;
                color: $white;
              }
            }
            b {
              font-weight: normal;
              margin: 0 pxTorem(10px);
            }
          }
      }
    }
  }
}
</style>
