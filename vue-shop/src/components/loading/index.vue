<template>
  <div class="loading">
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  >p {
    width: 95px;
    height: 96px;
    background: url('../../assets/QQ图片20180919190909.png') no-repeat;
    background-position: 0 -100px;
    animation: Leftname 0.8s infinite;
  }
}
@keyframes Leftname {
  10% {
    transform: translateY(-50px);
  }
}
</style>
