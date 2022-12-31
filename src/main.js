// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/vuex/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import XEUtils from 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/index.css';
import axios from 'axios';

import api from '@/api';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VXETable);

Vue.prototype.$axios = axios;
Vue.prototype.$XEUtils = XEUtils;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
