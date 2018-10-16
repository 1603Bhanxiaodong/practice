<template>
	<div class="hd-dialog">
		<button class="hd-dialog-close" v-if="diglogClose" @click="close">X</button>
    <div class="hd-dialog-title" v-if="title">{{title}}</div>
		<div class="hd-dialog-contanier" v-html="message"></div>
		<div class="hd-dialog-button">
			<button class="hd-dialog-cancel" v-if="cancle" @click="close">{{diglogCancel}}</button>
			<button class="hd-dialog-confim" v-if="confim" @click="callback">{{diglogConfim}}</button>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Tips',
  data () {
    return {
      message: '',
      duration: 0,
			onClose: null,
      timer: null,
			diglogClose: false,
			title: null,
			cancle: false,
			confim: false,
			diglogCancel: '取消',
			diglogConfim: '确定'
    }
  },
  mounted () {
    // 开始定时器
    this.stratTimer()
		// 获取esc
		document.addEventListener('keydown', (e) => {
			if (e.keyCode === 27) {
				this.close()
			}
		})
  },
  methods: {
		async callback () {
			if (typeof this.confirmCallback === 'function') {
				await this.confirmCallback()
				console.log('start destroy')
				this.close()
			}
		},
    stratTimer () {
      // 判断定时器
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.duration);
      }
    },
    close () {
			clearTimeout(this.timer)
			if (typeof this.onClose === 'function') {
				this.onClose()
			}
      // 清除data属性数据
      this.$destroy(true)
      // 删除页面的节点
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style scoped>
.hd-dialog{
	width: 250px;
	height: 200px;
	background: #fff;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -125px;
  margin-top: -100px;
	text-align: center;
}
.hd-dialog-contanier{
	margin: 20px;
}
</style>
