// 请求模块
import axios from 'axios'
const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/'//接口的基准地址
//   baseURL: 'http://toutiao-app.itheima.net/'// 接口的基准地址
  baseURL: 'http://api-toutiao-web.itheima.net'// 接口的基准地址
})

// 请求拦截器

// 响应拦截器

export default request
