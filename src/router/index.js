import Vue from 'vue'
import Router from 'vue-router'
// import Create from '@/pages/Create'
// import Detail from '@/pages/Detail'
// import Edit from '@/pages/Edit'
// import Index from '@/pages/Index'
// import Login from '@/pages/Login'
// import My from '@/pages/My'
// import Register from '@/pages/Register'
// import User from '@/pages/User'
import store from '../store'

// 异步加载
const Create = () => import('@/pages/Create')
const Detail = () => import('@/pages/Detail')
const Edit = () => import('@/pages/Edit')
const Index = () => import('@/pages/Index')
const Login = () => import('@/pages/Login')
const My = () => import('@/pages/My')
const Register = () => import('@/pages/Register')
const User = () => import('@/pages/User')

Vue.use(Router)

// 路由懒加载
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/create',
      component: Create,
      meta: { requiresAuth: true }
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta: { requiresAuth: true }
    },
    {
      path: '/my',
      component: My,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: User
    }
  ]
})

// 路由权限控制
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // 用户是否登录
    store.dispatch('auth/checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
