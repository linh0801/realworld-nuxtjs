import { request } from '@/plugins/request'
// 文章公共列表页
export const getArticles = params => request({
  method: 'get',
  url: '/api/articles',
  params
  
})
// 文章详情
export const getArticle = slug => request ({
  method: 'get',
  url: `/api/articles/${ slug }`
})
// 获取用户关注的用户发布的文章
export const getYourFeedArticle = params => request({
  method: 'get',
  url: '/api/articles/feed',
  params,
  
})
//  添加点赞
export const addFavorite  = slug => request({
  method: 'post',
  url: `/api/articles/${ slug }/favorite`,
  
})
//  取消点赞
export const deleteFavorite  = slug => request({
  method: 'DELETE',
  url: `/api/articles/${ slug }/favorite`,
  
})
// 关注文章作者
export const followUser = username => request({
  method: 'post',
  url: `/api/profiles/${ username }/follow`
})
// 取消关注文章作者
export const unfollowUser = username => request({
  method: 'delete',
  url: `/api/profiles/${ username }/follow`
})
// 根据文章作者获取文章的信息
export const getProfile = username => request({
  method: 'get',
  url: `/api/profiles/${ username }`
})
// 获取文章评论列表
export const getArticleComments = slug => request({
  method: 'get',
  url: `/api/articles/${ slug }/comments`
})
// 文章评论
export const addComponent = params => request({
  method: 'post',
  url: `/api/articles/${ params.slug }/comments`,
  data: params.formData
})
// 删除文章评论
export const deleteComponent = params => request({
  method: 'delete',
  url: `/api/articles/${ params.slug }/comments/ ${ params.id}`,
})
// 发表文章
export const createArticle = formData => request({
  method: 'post',
  url: '/api/articles',
  data: formData
})