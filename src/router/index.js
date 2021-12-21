import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 路由表
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')// 默认会去找该目录下的index.vue
  }
]

const router = new VueRouter({
  routes
})

export default router
