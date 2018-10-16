<template>
  <div class="wrap">
    
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/conmon.scss";
.wrap,
.home_section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-size: pxTorem(14px);
  box-sizing: border-box;
  background: red;
}
.home_header {
  width: 100%;
  height: pxTorem(50px);
  > dl {
    @include wh();
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    align-items: center;
    border-bottom: 1px solid #c4c4c4;
    dd {
      flex: 1;
      margin-inline-start: 0;
      display: flex;
      justify-content: space-between;
      margin-left: pxTorem(10px);
      p {
        &:nth-child(1) {
          span {
            display: block;
          }
        }
        &:nth-child(2) {
          font-family: "楷体";
          font-size: pxTorem(20px);
          font-weight: bold;
          padding: 0 14px;
          color: #c4c4c4;
        }
      }
    }
  }
}
.home_footer {
  width: 100%;
  height: 44px;
  background: blue;
}
</style>
