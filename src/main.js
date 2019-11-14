// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//import element-ui
import ElementUi from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUi)

//import axios
import axios from "axios"
// Vue.use(axios)
axios.defaults.baseURL = "http://taokanghua.cn:3000"
Vue.prototype.axios = axios

//import vue-awesome-swiper
// import VueAwesomeSwiper from "vue-awesome-swiper"
// Vue.use(VueAwesomeSwiper)
import "swiper/dist/css/swiper.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
