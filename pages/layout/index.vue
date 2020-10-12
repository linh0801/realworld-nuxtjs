<template>
  <div>
    <!-- 头部导航菜单 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand"
        :to="'/'">
          conduit
        </nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
             <!-- exact开启精准路径匹配 -->
            <nuxt-link class="nav-link"
            :to="'/'"
            exact>
              Home
            </nuxt-link>
          </li>
          <template v-if="user">
          <li class="nav-item">
            
            <nuxt-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item">
          <nuxt-link class="nav-link" to="/profile/1">
           <img class="user-pic" src="https://static.productionready.io/images/smiley-cyrus.jpg">
            {{user.username}}
          </nuxt-link>
          </li>
          </template>
          <template v-else>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign in</nuxt-link>
          </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- /头部导航菜单 -->
    <!-- 动态渲染子路由 -->
    <nuxt-child />
    <!-- /动态渲染子路由 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "layoutIndex",
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>

</style>