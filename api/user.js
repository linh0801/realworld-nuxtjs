import { request } from '@/plugins/request'
export const login = params => request({
  method: params.method,
  url: '/api/users/login',
  data: params.data
})
export const register = params => request({
  method: params.method,
  url: '/api/users',
  data: params.data
})