import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home';
import EnumerateInfo from '@/views/system/EnumerateInfo';
import Inventory from '@/views/dsq/Inventory';
import Recipe from '@/views/dsq/Recipe';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/system/enumerate',
      name: 'EnumerateInfo',
      component: EnumerateInfo,
    },
    {
      path: '/dsq/inventory',
      name: 'Inventory',
      component: Inventory,
    },
    {
      path: '/dsq/recipe',
      name: 'Recipe',
      component: Recipe,
    },
  ],
});
