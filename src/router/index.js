import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/Home'),
        name: 'Home',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/home/:path(.*)',
        component: () => import('@/views/home/Home')
      }
    ]
  },
  {
    path: '/system',
    name: 'EnumerateInfo',
    component: Layout,
    children: [
      {
        path: '/system/:path(.*)',
        component: () => import('@/views/system/EnumerateInfo')
      }
    ]
  },
  {
    path: '/dsq/inventory',
    name: 'Inventory',
    component: Layout,
    children: [
      {
        path: '/dsq/:path(.*)',
        component: () => import('@/views/dsq/Inventory')
      }
    ]
  },
  {
    path: '/dsq/recipe',
    name: 'Recipe',
    component: Layout,
    children: [
      {
        path: '/dsq/:path(.*)',
        component: () => import('@/views/dsq/Recipe')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
