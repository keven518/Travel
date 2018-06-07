<!--  -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, i) in swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",

  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination', // 分页
        loop: true   // 循环
      },
    swiperList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
    },{
      id: '0002',
      imgUrl: 'https://img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
    },{
      id: '0003',
      imgUrl: 'https://img1.qunarzz.com/qs/1805/ed/6dd1d32e17ea8002.jpg'
    },{
      id: '0004',
      imgUrl: 'https://img1.qunarzz.com/qs/1806/d1/5ab14bc92d8b2a02.jpg'
    },{
      id: '0005',
      imgUrl: 'https://img1.qunarzz.com/qs/1805/79/895429b453f08002.jpg'
    },{
      id: '0006',
      imgUrl: 'https://img1.qunarzz.com/qs/1805/95/f650b837b5246302.jpg'
    }]
    };
  },

  created() {},

  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },

  watch: {},

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

  methods: {},

  components: {}
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
.wrapper
  overflow: hidden
  width: 100%
  height 0
  padding-bottom: 28.57%
  background: #eee  
  .swiper-img
    width: 100%
</style>