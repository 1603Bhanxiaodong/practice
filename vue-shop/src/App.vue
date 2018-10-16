<template>
  <div id="app">
    <Login v-if="isShow"/>
    <Back v-if="isShow"/>
    <router-view v-if="!isShow"/>
  </div>
</template>

<script>
import Login from '@/components/loading'
import Back from '@/common/back_bg'

export default {
  name: 'App',
  data () {
    return {
      isShow: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = false
    }, 1500);
  },
  components: {
    Login,
    Back
  }
}
</script>

<style lang="scss">
@import './assets/style/conmon.scss';
@import './assets/fonts/iconfont.css';
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
