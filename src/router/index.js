import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 路由表
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')// 默认会去找该目录下的index.vue
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
