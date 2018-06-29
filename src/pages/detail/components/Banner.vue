<!--  -->
<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" alt="">
    <div class="banner-info">
      <div class="banner-title">
        {{sightName}}
      </div>
      <div class="banner-number">        
        <span class='iconfont banner-icon'>&#xe692;</span>
        {{bannerImgs.length}}
      </div>
    </div>
  </div>
  <common-gallary 
    :imgs="imgs" 
    v-show="showGallary"
    @close="handleGallaryClose"
  ></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',

  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },

  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1412/e9/d5c72454d47eda983bd4e857c9c361d8.water.jpg_r_800x800_16eebf89.jpg',
        'http://img1.qunarzz.com/sight/p0/1512/12/1251d00f69a9e97c90.water.jpg_r_800x800_d60ba99d.jpg'
      ]
    };
  },

  created(){},

  mounted(){
    console.log('bannerImg: ', this.bannerImg)
  },

  watch: {},

  computed: {},

  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  },

  components: {
    CommonGallary
  }
}

</script>
<style lang='stylus' scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  .banner-title
    flex 1
    font-size .32rem
    padding 0 .2rem
  .banner-number
    height .4rem
    line-height .32rem
    margin-top .14rem
    padding 0 .4rem
    border-radius .2rem
    background rgba(0, 0, 0, .8)
    font-size .24rem
    .banner-icon
      font-size .24rem
</style>