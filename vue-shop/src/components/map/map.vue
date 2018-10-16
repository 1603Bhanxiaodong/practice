<template>
  <div class="maps">
    <iframe :src="url"></iframe>
  </div>
</template>
<script>
export default {
  name: 'maps',
  computed: {
    url () {
      const params = this.$route.params.location
      return `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${params.location.lat},${params.location.lng};title:${params.title};addr:${params.address}&key=NMKBZ-KSK3P-T2BDV-VFGBU-WCBS3-3JFST&referer=myapp`
    }
  }
}
</script>
<style lang="scss" scoped>
.maps {
  width: 100%;
  height: 100%;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
