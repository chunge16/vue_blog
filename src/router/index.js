import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/pages/Create'
import Detail from '@/pages/Detail'
import Edit from '@/pages/Edit'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import My from '@/pages/My'
import Register from '@/pages/Register'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    }
  ]
})
