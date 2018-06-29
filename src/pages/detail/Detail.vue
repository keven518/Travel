<!--  -->
<template>
  <div>
    <detail-banner
      :sightName = "sightName"
      :bannerImg = "bannerImg"
      :bannerImgs = "gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="contain"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner"
import DetailHeader from "./components/Header"
import DetailList from "./components/List"
import axios from 'axios'
export default {
  name: "Detail",

  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    };
  },

  created() {},

  mounted() {
    this.getDetailInfo()
  },

  watch: {},

  computed: {},

  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSuss)
    },
    handleGetDataSuss (res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        console.log('this.gallaryImgs: ', this.gallaryImgs)
        this.categoryList = data.categoryList
      }
    }
  },

  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>
<style lang='stylus' scoped>
.contain {
  height: 50rem;
}
</style>