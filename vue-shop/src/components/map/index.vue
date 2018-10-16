<template>
  <div class="map">
    <header>
      <p>附件的店</p>
    </header>
    <section>
      <ul>
        <router-link
          v-for="(item, key) in pois"
          :key="key"
          :to="{name: 'maps', params: {location: item}}"
        >
          <li>
            <p>
              {{ item.title }}
              <span>{{ item._distance }}米</span>
            </p>
            <p>{{ item.address }}</p>
          </li>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'maps',
  data () {
    return {
      listData: {},
      pois: []
    }
  },
  mounted () {
    const geolocation = new qq.maps.Geolocation('OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77', 'myapp')
    console.log(geolocation)
    geolocation.getIpLocation((pos) => {
      fetch(`http://47.94.7.105:8082/api/location?lat=${pos.lat}&lng=${pos.lng}`)
        .then(res => res.json())
        .then(result => {
          this.listData = result.result
        })
    })
    setTimeout(() => {
      this.pois = this.listData.pois
      console.log(this.pois)
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/conmon.scss';

* {
  font-size: pxTorem(14px);
}
header {
  width: 100%;
  height: pxTorem(44px);
  background: $green;
  text-align: center;
  line-height: pxTorem(44px);
  position: relative;
  p {
    font-size: pxTorem(20px);
    color: #fff;
  }
  &:before {
    content: '>';
    width: 10%;
    height: 10%;
    position: absolute;
    left: 0;
    top: 0;
    font-family: '楷体';
    font-size: pxTorem(20px);
    color: #fff;
    font-weight: bold;
  }
}

section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
ul {
  width: 100%;
  height: 100%;
  a {
    color: #000;
  }
  li {
    width: 100%;
    height: pxTorem(60px);
    border-bottom: 1px solid #ccc;
    p {
      width: 100%;
      height: 50%;
      line-height: pxTorem(30px);
      &:nth-child(1) {
        text-align: center;
        span {
          margin-left: pxTorem(30px);
        }
      }
      &:nth-child(2) {
        margin-left: pxTorem(10px);
      }
    }
  }
}
</style>
