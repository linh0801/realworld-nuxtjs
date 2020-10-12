import { request } from '@/plugins/request'
// 获取标签
export const getTags = params => request({
  method: 'get',
  url: '/api/tags'
})
