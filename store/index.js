// 由于服务端渲染只有一个实例
// 为了避免数据的污染，state 定义成了一个返回对象的函数

export const state = () => {
  return {
    user: null,
    following: null,
    favorited: null,
    favoritesCount: null
  }
}
export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setFollowing (state, following) {
    state.following = following
  },
  setFavorite (state, favorite) {
    state.favorited = favorite
  },
  setFavoritesCount(state, count) {
    state.favoritesCount = count
  }
}
const cookieparser = process.server ? require('cookieparser') : undefined
export const actions = {
  // 只有在服务端才会调用这个方法
  // 可以直接将服务端的数据存在store 中，提供给客户端直接使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      // 将请求头中的cookie解析成一个对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        // 将json字符串解析成对象
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}