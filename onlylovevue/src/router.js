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
      component: Home,
      redirect:'/index',
      children:[
        {
          path: 'index',
          name: 'index',
          component: () => import( './views/Index.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import( './views/Search.vue')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import( './views/Personal.vue')
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import( './views/Shop.vue')
        },
        {
          path: 'hotSearch',
          name: 'hotSearch',
          component: () => import( './views/HotSearch.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import( './views/List.vue')
        },
        
        {
          path: 'contact',
          name: 'contact',
          component: () => import( './views/Contact.vue')
        },
        {
          path: 'condition',
          name: 'condition',
          component: () => import( './views/Condition.vue')
        },
        {
          path: 'message',
          name: 'message',
          component: () => import( './views/Message.vue')
        },
        {
          path: 'users',
          name: 'users',
          component: () => import( './views/Users.vue')
        }
      ]
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
    }
    
  ]
})
