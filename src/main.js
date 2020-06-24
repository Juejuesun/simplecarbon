import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'

// 导入全局样式
import './assets/global.css'

import store from './store'
import './registerServiceWorker'

axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
