import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _183890ad = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _c627e1bc = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _00ce1d86 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4238b6f4 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _67b4292d = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _74a4305a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _093532ae = () => interopDefault(import('..\\pages\\article\\editorArticle.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _183890ad,
    children: [{
      path: "",
      component: _c627e1bc,
      name: "home"
    }, {
      path: "login",
      component: _00ce1d86
    }, {
      path: "register",
      component: _00ce1d86
    }, {
      path: "profile/:userName",
      component: _4238b6f4,
      name: "profile"
    }, {
      path: "settings",
      component: _67b4292d,
      name: "settings"
    }, {
      path: "article/:slug",
      component: _74a4305a,
      name: "article"
    }, {
      path: "editor",
      component: _093532ae,
      name: "editor"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
