<template>
  <div class="ment-list">
    <!-- 左边部分 -->
    <div class="ment-left">
      <ul>
        <li
          v-for="(item, index) in goods"
          :key="index"
          :class="currentIndex === index ? 'active': ''"
          @click="selectMenu(index, $event)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- 右边部分 -->
    <div class="ment-right" ref="ment-right">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="food-list" ref="food-list">
          <h3>{{ item.name }}</h3>
          <menu-item :listData="item.children"></menu-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import BScroll from 'better-scroll'

export default {
  name: 'MenuList',
  data () {
    return {
      listHeight: [],
      scrollY: 0
    }
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    currentIndex () {
      // 找到对应的下标位置
      let index = this.listHeight.findIndex((item) => item >= this.scrollY)
      // 找到之后再初始化的时候是-1, 0 所以修改bug
      index = (index === -1) ? this.listHeight.length : index
      // 修改一个是bug不会影响代码的下标
      index = index && (index - 1)
      return index
    }
  },
  methods: {
    selectMenu (index, event) {
      let foodList = this.$refs['food-list']
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    },
    // 初始化BScroll，获取scrollY的值
    _initScroll () {
      this.foodsScroll = new BScroll(this.$refs['ment-right'], {
        probeType: 3,
        click: true
      });
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    // 获取加滚动条节点的高度
    _calculateHeight () {
      let foodList = this.$refs['food-list']
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    }
  },
  mounted () {
    this.$nextTick()
      .then(this._initScroll)
      .then(this._calculateHeight)
  },
  components: {
    'menu-item': MenuItem
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';
ul {
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
h3 {
  margin-block-start: 0;
}
.ment-list {
  width: 100%;
  height: 100%;
  font-size: pxTorem(16px);
  display: flex;
  overflow: hidden;
}
.ment-left {
  @include wh(20%, 100%);
  background: #f4f4f4;
  ul {
    @include wh();
    li {
      height: pxTorem(80px);
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #ccc;
      color: #636363;
      &:last-child {
        border: 0;
      }
    }
  }
}
.ment-right {
  flex: 1;
  margin-left: pxTorem(15px);
  ul {
    li {
      h3 {
        font-size: pxTorem(14px);
        color: #858a84;
        margin-top: pxTorem(5px);
        &:before {
          content: '|';
          width: pxTorem(5px);
          background: $green;
          display: inline-block;
          margin-right: pxTorem(5px);
          color: $green;
        }
      }
    }
  }
}
.active {
  background: #fafafa;
}
</style>
