import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
  state,  // 共用数据
  // actions: {
  //   changeCity(ctx, city) {
  //     console.log(city)
  //     ctx.commit('gbCity', city)
  //   }
  // },
  mutations,
  getters: {    // 类似computed计算属性作用，需要根据state里的数据算出新的数据的时候可以用getters
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})  // 创建仓库
