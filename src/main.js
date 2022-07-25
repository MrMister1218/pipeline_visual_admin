import Vue from 'vue'
import App from './App.vue'
import'@/utils/global.css'
import VueRouter from 'vue-router'
import router from '@/router'

import * as echarts from 'echarts';
Vue.prototype.$echarts=echarts

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
