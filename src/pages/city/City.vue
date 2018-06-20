<!--  -->
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import cityAlphabet from './components/Alphabet'
export default {
  name: 'City',

  data () {
    return {
      cities: {},
      hotCities: []
    };
  },

  created(){},

  mounted(){
    this.getCityInfo()
  },

  watch: {},

  computed: {},

  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      console.log(res)
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },

  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  }
}

</script>
<style lang="stylus" scoped>
</style>