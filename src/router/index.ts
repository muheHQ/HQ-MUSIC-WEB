import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Vue from 'vue'
import axios from 'axios'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },  
  {
    path: '/', // 根路径
    redirect: '/manage' // 重定向到登录页面
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/ManageView.vue'),
    redirect: '/manage/home',  // 重定向
    children: [
      { path: 'home', name: "Home", component: () => import('../views/HomeView.vue') },
      { path: 'singer', name: "Singer", component: () => import('../views/SingerView.vue') },
    ]
  },
  {
    path: '/error',
    name: 'error',
    component: () => import( '../views/errorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach(async (to, from, next) => {
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('token')
    next()
  } else {
    const tokenString = window.localStorage.getItem('token');
    if (!tokenString) {
      next('/login')
    } else {
      try {
        const token = JSON.parse(tokenString).data.token;
        const response = await axios.get('http://localhost:8080/checkToken', {
          headers: { token }
        });
        if (response.data) {
          next()
        } else {
          console.log('令牌不合法，校验失败');
          next('/login');
        }
      } catch (error) {
        console.error('发生错误：', error);
        next('/error');
      }
    }
  }
})
export default router
