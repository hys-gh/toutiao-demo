// 获取文章列表
import request from '../utils/request'

export const getArticles = params => {
  return request({
    url: '/v1_1/articles',
    method: 'GET',
    params
  })
}
