// 请求模块
import axios from 'axios'
import store from '../store'
const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/'//接口的基准地址
  //   baseURL: 'http://toutiao-app.itheima.net/'// 接口的基准地址
  baseURL: 'http://api-toutiao-web.itheima.net'// 接口的基准地址
})

// 请求拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  // console.log(config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 响应拦截器

export default request
