<!--  -->
<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" alt="">     
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>  
</template>

<script>
export default {
  name: 'HomeRecommend',

  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/60/604aa493a5f1339190.img.jpg_200x200_a9fc0695.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/e9/d5c72454d47eda983bd4e857c9c361d8.water.jpg_200x200_5870d2ca.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/d8/eec44461ecfd83df9c1669e7846b1c53.water.jpg_200x200_c2941eec.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_200x200_84bd8f96.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/97/97a91e052b51aa9890.water.jpg_200x200_d49d6a26.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/43/1217ccf8106bca9a077b58bf56bb2598.water.jpg_200x200_318d0773.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/4e/4e7a704010c95d2490.water.jpg_200x200_f13f3ec7.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/4d/40465ead3ad3af57c08f593f484b5035.water.jpg_200x200_5f1de4ee.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0011',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/fe/faed12617349c5614f4b51f5eb991da8.water.jpg_200x200_6a28ad75.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0012',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/87/876ee78aa0781f7390.water.jpg_200x200_8a51e83b.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      }]
    };
  },

  created(){},

  mounted(){},

  watch: {},

  computed: {},

  methods: {},

  components: {}
}

</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #eee
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>