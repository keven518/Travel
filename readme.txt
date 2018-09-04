2-4 mvp和mvvm设计模式
m-v-p
model：数据层
presenter：呈现层，业务逻辑控制层
view：视图层

2-5 组件化
2-6 使用组件化思想修改TodoList
2-7 简单的组件间传值
2-8 本章小结

3-1 Vue实例
app.$destroy() 销毁调这个vue实例的
销毁以后双向数据绑定功能已经失效，但事件还存在

3-2 vue实例的生命周期钩子

3-3 vue的模板语法


3-4 计算属性，方法和侦听器
计算属性内置缓存的， 依赖的值没改变时计算属性只计算一次，否则重新计算

3-5 计算属性的setter和getter
重新改变函数名的值，set才执行，函数依赖的值变化时get才执行

3-6 Vue中的样式绑定
1、:class="{activated: isActivated}"
2、:class="[activated]"

3-7 Vue中的条件渲染
加key值（key不同）就不会复用表情，否则会复用

3-8 Vue中的列表渲染
vue只对push pop shift unshift splice sort reverse这几个数组的操作具有响应式效果，此外不会响应式
template模板占位符不会渲染
可以改变数据引用

3-9 Vue中的set
全局：Vue.set(app.userInfo, 'address3', '北京')
数组：Vue.set(app.list, 2, {id: '0101032',
 text:'柯文'})

4.1 Vue组件使用中的细节点
1、html规定tbody里面必须是tr否则会渲染出去，因此<tr is='row'></tr> 表示tr标签使用的是row的模板
2、子组件定义data是，data必须是一个函数
3、this.total = this.$refs.one.num + this.$refs.tow.num

4.2 父子组件的数据传递
1、父组件可以向子组件随意传递数据，单子组件不能随意修改父组件传递过来的数据，子组件只能用父组件传递过来的值，那么这个值可以赋给
子组件data里的一个变量。也就是传递过来的参数子组件不能够直接的修改，而是要克隆复制出来一个副本，更改这个副本才行。

4.3 组件参数校验与非props特性

4.4 给组件绑定原生事件
@click.native

4.5 非父子组件间的传值
1、vuex
2、总线机制

4.6 Vue中使用插槽

4.7 在Vue中的作用域插槽

4.8 动态组件与v-once指令
v-once 档动态组件使用了v-once以后，一旦被渲染将被缓存，下次再用时就是用缓存的。不会重新渲染这个动态组件。否则就会每次重新渲染这个组件。这样v-once会大大降低开销

5.1 Vue中css动画原理

5.2 在Vue中使用Animate.css库

5.3 在Vue中同时使用过渡和动画
type="transition" 动画时间已transition为主
:duration='10000' 动画时长为10秒

5.4 vue中的js动画与Velocity.js的结合

5.5 Vue中多个元素或数组的过渡

5.6 Vue中的列表过渡

5.7 Vue中的动画封装

6.1 安装node、 git

6.2 项目代码结构介绍

6.3 单文件组件与Vue中的路由

6.4 多页应用 vs 单页应用

6.5 初始化项目

7.1 首页header区域开发
安装stylus
cnpm i stylus -S
cnpm i stylus-loader -S

1rem :  px/font-size = 50px
rem = 页面大小/body字体大小

7.2 iconfont的使用和代码优化

7.3 首页轮播
穿透
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important

.wrapper[data-v-01f4d902] .swiper-pagination-bullet-active {
  background: #f00 !important;
}

否则
.wrapper .swiper-pagination-bullet-active[data-v-01f4d902] {
  background: #f00 !important;
}

git merge origin/index-swiper
把线上index-swiper分支的代码合并到本地分支上面

7.4 首页图标区域页面布局

7.5 图标区域逻辑实现
computed: 如何把iconList拆分成二维数组

7.6 推荐组件开发
css min-height： 0

7.7 周末游组件开发

7.8 Ajax获取首页数据
static 是可访问的， src 是不可访问的

7.9 首页父子组件数据传递
为什么swiper 默认为最后一张照片

8.1 城市选择页面路由配置

8.2 搜索框布局

8.3 列表布局
.button-list[data-v-610a4ef1] {
    overflow: hidden;
    padding: 0.1rem;
}加上overflow: hidden;
城市显示，否则不现实

8.4 Better-scroll的使用及字母表布局

8.5 页面的动态数据渲染

8.6 兄弟组件间联动

clientY 和 offsetTop的区别

8.7 列表切换性能优化 重点 触摸截流

8.8 搜索功能实现

8.9 使用Vuex实现数据共享

      this.$router.push('/')

8-10 Vuex的高级使用及localStorage

import { mapState, mapMutations } from 'vuex'   // 简便方法

1、mapState
computed: {
    ...mapState({
      currentCity: 'city'
    })  // 这里可以是对象也可以是数组
  },  {{this.currentCity}}
或者
computed: {
    ...mapState(['city']),  // 把state里的city映射到city里，以后只需要用this.city 代替 this.$store.state.city即可
  },  {{this.city}}

2、mapMutations
methods: {
...mapMutations(['changeCity'])
},

// this.$store.commit('changeCity', city)
      this.changeCity(city)


8-11 使用keep-alive优化网页性能
使用keep-alive，会有activated生命周期钩子函数，利用这个钩子可以进行判断是否请求接口

9-1 详情页动态路由及banner布局

弹窗出来了轮播图出问题，一下解决方案（显示的时候计算宽度有问题）
observeParents: true,	// 监听父元素
observer: true   		// 监听自身元素

是要监听到父元素和自身元素发生dom元素变化的时候，会自动自我刷新一次，通过自我刷新可以解决宽度计算问题

9-2 公用图片画廊组件拆分

9-3 实现Header渐隐渐显效果

9-4 对全局事件的解绑
使用keep-alive是，离开组件页面会有deactivated周期钩子函数

9-5 使用递归组件实现详情列表

9-6 使用Ajax获取动态数据
让detail页面不被缓存
<keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

解决滚动多个页面互相影响
scrollBehavior (to, from, savedPosition) {
    return { x: 0, y:100 }
  }
让每次切换页面的时候回到顶部

