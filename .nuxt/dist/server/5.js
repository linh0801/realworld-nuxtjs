exports.ids = [5];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=14c62dbb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign up' : 'Sign in'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":'/login'}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":'/register'}},[_vm._v("Need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,filed){return ((_vm._ssrList((messages),function(message,key){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(filed)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form><fieldset class=\"form-group\""+(_vm._ssrStyle(null,null, { display: (!_vm.isLogin) ? '' : 'none' }))+"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" minlength=\"8\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign up' : 'Sign in')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=14c62dbb&

// CONCATENATED MODULE: ./utils/requestMethod.js
/* harmony default export */ var requestMethod = ({
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch'
});
// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/user.js

const login = params => Object(request["b" /* request */])({
  method: params.method,
  url: '/api/users/login',
  data: params.data
});
const register = params => Object(request["b" /* request */])({
  method: params.method,
  url: '/api/users',
  data: params.data
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'loginOrRegister',
  middleware: 'notAuthenticated',

  data() {
    return {
      user: {
        "username": "",
        "email": "",
        "password": ""
      },
      errors: null
    };
  },

  methods: {
    async onsubmit() {
      try {
        const params = {};
        const data = {
          user: this.user
        };
        Object.assign(params, {
          data
        }, {
          method: requestMethod['POST']
        });

        if (this.isLogin) {
          const {
            data
          } = await login(params); // 记录用户的登录状态
          // 将用户数据共享到vuex容器中

          this.$store.commit('setUser', data.user); // 通过vuex共享user 一刷新页面就恢复为null
          // 因此需要引入cookie 来存放user 数据

          Cookie.set('user', data.user); // 跳转到首页

          this.$router.push('/');
        } else {
          const {
            data
          } = await register(params); // 跳到登录页

          this.$router.push('/login');
        }
      } catch (error) {
        console.dir(error);
        this.errors = error.response.data.errors;
      }
    }

  },
  computed: {
    isLogin() {
      return this.$route.path === '/login' ? true : false;
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0e03891e"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map