import Vue from 'vue'
// import VueRouter from 'vue-router'
// import routers from './routers'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // lang i18n
/* import locale from 'element-ui/lib/locale/lang/en' */
import locale from 'element-ui/lib/locale/lang/zh-CN'


import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'; /* 引入axios进行地址访问*/


import '@/icons' // icon
import '@/permission' // permission control

import './directive/preventReClick.js'
import Qs from 'qs'

import XLSX from 'xlsx'
import Viewer from 'v-viewer'

Vue.use(Viewer)

Vue.use(XLSX)


Vue.prototype.qs = Qs

Vue.prototype.$http = axios;

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}


Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
