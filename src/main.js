import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import XEUtils from 'xe-utils'
import VxeUIAll from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'
import axios from 'axios'

import '@/styles/index.scss'
import api from '@/api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VxeUIAll)
Vue.use(VxeUITable)

Vue.prototype.$axios = axios
Vue.prototype.$XEUtils = XEUtils
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
