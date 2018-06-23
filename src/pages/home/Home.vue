<!--  -->
<template>
  <div>
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icons :list='iconList'></home-icons>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [
      //     {
      //   id: '0001',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
      // },{
      //   id: '0002',
      //   imgUrl: 'https://img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
      // },{
      //   id: '0003',
      //   imgUrl: 'https://img1.qunarzz.com/qs/1805/ed/6dd1d32e17ea8002.jpg'
      // },{
      //   id: '0004',
      //   imgUrl: 'https://img1.qunarzz.com/qs/1806/d1/5ab14bc92d8b2a02.jpg'
      // },{
      //   id: '0005',
      //   imgUrl: 'https://img1.qunarzz.com/qs/1805/79/895429b453f08002.jpg'
      // },{
      //   id: '0006',
      //   imgUrl: 'https://img1.qunarzz.com/qs/1805/95/f650b837b5246302.jpg'
      // }
      ],
      iconList: [
        // {
        //   id: '0001',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        //   desc: '景点门票景点门票景点门票'
        // },{
        //   id: '0002',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        //   desc: '滑雪季'
        // },{
        //   id: '0003',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
        //   desc: '景点门票'
        // },{
        //   id: '0004',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        //   desc: '景点门票'
        // },{
        //   id: '0005',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
        //   desc: '景点门票'
        // },{
        //   id: '0006',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        //   desc: '景点门票'
        // },{
        //   id: '0007',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        //   desc: '景点门票'
        // },{
        //   id: '0008',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        //   desc: '景点门票'
        // },{
        //   id: '0009',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
        //   desc: '景点门票'
        // },{
        //   id: '0010',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        //   desc: '景点门票'
        // },{
        //   id: '0011',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        //   desc: '景点门票'
        // },{
        //   id: '0012',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        //   desc: '景点门票'
        // },{
        //   id: '0013',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        //   desc: '景点门票'
        // },{
        //   id: '0014',
        //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        //   desc: '景点门票'
        // }
      ],
      recommendList: [],
      weekendList: []
    };
  },

  created(){},

  mounted(){    
    this.getHomeInfo()
  },

  watch: {},

  computed: {},

  methods: {
    getHomeInfo() {
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if(res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },

  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}

</script>
<style scoped>
</style>