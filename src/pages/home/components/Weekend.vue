<!--  -->
<template>
<div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li 
      class="item border-bottom" 
      v-for="item of recommendList" 
      :key="item.id"
    >
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="">    
      </div>       
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>  
</template>

<script>
export default {
  name: 'HomeWeekend',

  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/5e/6e13db8af6ec30.jpg_r_640x214_5c1b0fa9.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/a4/df8543b6b8506d.jpg_r_640x214_660e1e3a.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/3d/f99f5c73b52c4d.jpg_r_640x214_4e60b24c.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1602/bf/a2ac57b8bfe7cd.jpg_r_640x214_406d4c7e.jpg',
        title: '三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士三亚海上观光巴士',
        desc: '亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园亚龙湾热带天堂森林公园'
      },{
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg',
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
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #eee
      ellipsis()
</style>