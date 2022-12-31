import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import EnumerateInfo from '@/views/system/EnumerateInfo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/enumerate',
      name: 'EnumerateInfo',
      component: EnumerateInfo,
    },
  ],
});
