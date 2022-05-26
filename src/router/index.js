import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home'
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    beforeEnter: (to, from, next) => {
      // 如果用户已登陆重定向至首页
      const isLogin = localStorage.getItem('isLogin')
      isLogin ? next('home') : next()
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register'),
    beforeEnter: (to, from, next) => {
      // 如果用户已登陆重定向至首页
      const isLogin = localStorage.getItem('isLogin')
      isLogin ? next('home') : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')
  if (isLogin || to.path === '/login' || to.path === '/register') {
    next()
  } else {
    next({ name: 'login' })
  }
})
export default router
