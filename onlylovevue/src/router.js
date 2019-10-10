import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( './views/Register.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import( './views/Personal.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import( './views/Shop.vue')
    },
    {
      path: '/hotSearch',
      name: 'hotSearch',
      component: () => import( './views/HotSearch.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import( './views/List.vue')
    },

  ]
})
