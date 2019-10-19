import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SeeInfo from './components/SeeInfo.vue'

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
          component: () => import( './views/Personal.vue'),
          redirect:'personal/seeinfo',
          children:[
            {
              path: 'seeinfo',
              name: 'seeinfo',
              component: SeeInfo
            },
            {
              path: 'setting',
              name: 'setting',
              component: () => import( './components/Setting.vue')
            },
            
            {
              path: 'edit',
              name: 'userinfo',
              component: () => import( './components/Userinfo.vue')
            },
            {
              path: 'identification',
              name: 'identification',
              component: () => import( './components/Identification.vue')
            }
          ]
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
        // 自己看自己主页
        {
          path: 'condition',
          name: 'condition',
          component: () => import( './views/Condition.vue')
        },
        //我看他人主页
        {
          path: 'otherCondition',
          name: 'otherCondition',
          component: () => import( './views/Othercondition.vue')
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
        },
        {
          path: '/member',
          name: 'member',
          component: () => import( './views/Member.vue')
        },
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
      path: '/forget',
      name: 'forget',
      component: () => import( './views/Forgetpassword.vue')
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
  // console.log('topath')
  // console.log(to.path)
  if(to.path === '/login' || to.path == '/register' || to.path == '/' || to.path == '/index' || to.path == '/forget'){  //能不登录就可以访问的路由
    next()
  }
  else{
    if(tokenIsExists){
      next()//已经登录过并取得token，允许访问路由
    }
    else{
      next('/login')  //路由跳转到登录组件
    }
  }


})
export default router