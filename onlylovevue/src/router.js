import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
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
          component: () => import( './views/Hotsearch.vue')
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
          path: 'friend',
          name: 'friend',
          component: () => import( './views/Friend.vue')
        },
        {
          path: 'users',
          name: 'users',
          component: () => import( './views/Users.vue')
        },
        {
          path: '/acticle',
          name: 'actilce',
          component: () => import( './views/Acticle.vue')
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
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: () => import( './views/Shopcart.vue')
    },
   
    {
      path: '/buy',
      name: 'buy',
      component: () => import( './views/Buy.vue')
    },
    {
      path: '/*',   //路由匹配不成功时
      name: 'notfound',
      component: () => import( './views/404.vue')
    }
    
  ]
})

//路由守卫
router.beforeEach((to,from,next) => {
  //除了login和register，其他的路由访问必须先登录
  let tokenIsExists = localStorage.getItem('mytoken') ? true : false //检查本地存储中是否有token
  if(to.path == '/login' || to.path == '/register' || to.path == '/' || to.path == '/index'){  //能不登录就可以访问的路由
    next()
  }else{
    if(tokenIsExists){
      next()//已经登录过并取得token，允许访问路由
    }else{
      next('/login')  //路由跳转到登录组件
    }
  }


})
export default router