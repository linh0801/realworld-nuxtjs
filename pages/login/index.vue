<template>
  <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin ? 'Sign up' : 'Sign in'}}</h1>
        <p class="text-xs-center">
          <!-- <a href="">Have an account?</a> -->
          <nuxt-link v-if="!isLogin" :to="'/login'">Have an account?</nuxt-link>
          <nuxt-link v-else :to="'/register'">Need an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <template v-for="(messages, filed) in errors" >
            <li  v-for="(message, key) in messages" :key="key + 1" >
              {{filed}} {{message}}
            </li>
          </template>
          
        </ul>

        <form @submit.prevent="onsubmit">
          <fieldset class="form-group" v-show="!isLogin">
            <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group" >
            <input class="form-control form-control-lg" v-model="user.email" type="email" placeholder="Email">
          </fieldset>
          <fieldset class="form-group" >
            <input class="form-control form-control-lg" v-model="user.password" type="password" minlength="8" placeholder="Password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin ? 'Sign up' : 'Sign in'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import METHOD from '@/utils/requestMethod'
import { login, register } from '@/api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'loginOrRegister',
  middleware: 'notAuthenticated',
  data () {
    return {
      user: {
        "username": "",
        "email": "",
        "password": ""
      },
      errors: null
    }
  },
  methods: {
    async onsubmit () {
      try {
        const params = {}
        const data = { user: this.user }
        Object.assign(params, { data }, { method: METHOD['POST'] })
        if (this.isLogin) {
          const { data } = await login (params)
          // 记录用户的登录状态
          // 将用户数据共享到vuex容器中
          this.$store.commit('setUser', data.user)
          // 通过vuex共享user 一刷新页面就恢复为null
          // 因此需要引入cookie 来存放user 数据
          Cookie.set('user', data.user)
          // 跳转到首页
          this.$router.push('/')
        } else {
          const { data } = await register (params)
          // 跳到登录页
          this.$router.push('/login')
        }
        
      } catch (error) {
        console.dir(error)
        this.errors = error.response.data.errors
      }
      
    }
  },
  computed: {
    isLogin () {
      return this.$route.path === '/login' ? true : false
    }
  }
}
</script>

<style>

</style>