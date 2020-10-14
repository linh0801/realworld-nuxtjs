module.exports = {
  router: {
    // 激活nuxt-link 链接跳转
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 由于nuxt 默认是按照pages/layout/index.vue 这种方式来路由的，不是很符合自身的路由规则
      // 因此在这清空掉默认的路由规则
      routes.splice(0)
      // console.log(routes)
      routes.push(...[{
        name: '',
        path: '/',
        component: resolve(__dirname, 'pages/layout'),
        children: [
          {
            name: 'home',
            path: '', //  默认子路由
            component: resolve(__dirname, 'pages/home')
          },
          {
            path: 'login',
            component: resolve(__dirname, 'pages/login')
          },
          {
            path: 'register',
            component: resolve(__dirname, 'pages/login')
          },
          {
            name: 'profile',
            path: 'profile/:userName',
            component: resolve(__dirname, 'pages/profile')
          },
          {
            name: 'settings',
            path: 'settings',
            component: resolve(__dirname, 'pages/setting')
          },
          {
            name: 'article',
            path: 'article/:slug',
            component: resolve(__dirname, 'pages/article')
          },
          {
            name: 'editor',
            path: 'editor',
            component: resolve(__dirname, 'pages/article/editorArticle.vue')
          }
        ]
      }])
    }
  },
  server: {
    // 表示监听所有的IP地址
    host: '0.0.0.0',
    port: 3000
  },
  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}