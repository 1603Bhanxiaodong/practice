<template>
  <div class="menu-mask">
  </div>
</template>

<script>
export default {
  name: 'menuMask'
}
</script>

<style lang="scss" scoped>
.menu-mask {
  width: 100%;
  height: 90%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
}
iframe {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: pxTorem(50px);
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
