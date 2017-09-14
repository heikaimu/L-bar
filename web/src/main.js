// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import Vueg from 'vueg'
import VueLazyLoad from 'vue-lazyload'
import 'vueg/css/transition-min.css'
import './common/stylus/index.styl'

Vue.config.productionTip = false
/* 使用axios获取数据 */
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
/* 使用vuex来共享组件状态 */
Vue.use(Vuex)
// vueg 转场动画
const options = {
  forwardAnim: 'fadeInRight',
  duration: 0.4
}
Vue.use(Vueg, router, options)
/* fastclick,解决移动端300ms延迟 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    fastClick.attach(document.body)
  }, false)
}
// 懒加载
Vue.use(VueLazyLoad, {
  loading: require('./common/image/cow.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
