exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getYourFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticleComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
 // 文章公共列表页

const getArticles = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: '/api/articles',
  params
}); // 文章详情

const getArticle = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: `/api/articles/${slug}`
}); // 获取用户关注的用户发布的文章

const getYourFeedArticle = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: '/api/articles/feed',
  params
}); //  添加点赞

const addFavorite = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'post',
  url: `/api/articles/${slug}/favorite`
}); //  取消点赞

const deleteFavorite = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'DELETE',
  url: `/api/articles/${slug}/favorite`
}); // 关注文章作者

const followUser = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'post',
  url: `/api/profiles/${username}/follow`
}); // 取消关注文章作者

const unfollowUser = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'delete',
  url: `/api/profiles/${username}/follow`
}); // 根据文章作者获取文章的信息

const getProfile = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: `/api/profiles/${username}`
}); // 获取文章评论列表

const getArticleComments = slug => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'get',
  url: `/api/articles/${slug}/comments`
}); // 文章评论

const addComponent = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'post',
  url: `/api/articles/${params.slug}/comments`,
  data: params.formData
}); // 删除文章评论

const deleteComponent = params => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'delete',
  url: `/api/articles/${params.slug}/comments/ ${params.id}`
}); // 发表文章

const createArticle = formData => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  method: 'post',
  url: '/api/articles',
  data: formData
});

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=f1789a42&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-coments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=f1789a42&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleMeta.vue?vue&type=template&id=ddde770c&
var articleMetavue_type_template_id_ddde770c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":("/profile/" + (_vm.article.author.username))}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (_vm.article.author.username))}},[_vm._v("\n          "+_vm._s(_vm.article.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createAt,'MMM dd, YYYY')))+"</span>")],2),_vm._ssrNode(" <button class=\"btn btn-sm btn-outline-secondary\""+(_vm._ssrStyle(null,null, { display: (!_vm.following) ? '' : 'none' }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n         \n        Follow "+_vm._s(_vm.article.author.username)+" \n        ")+"</button> <button class=\"btn btn-sm  btn-secondary\""+(_vm._ssrStyle(null,null, { display: (_vm.following) ? '' : 'none' }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n             \n            unfollow "+_vm._s(_vm.article.author.username)+" \n      ")+"</button>\n            \n      <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{'btn-primary': _vm.isFavorite,
                  'active': _vm.isFavorite,
                 'btn-outline-primary': _vm.isFavorite}))+"><i class=\"ion-heart\"></i>\n         \n        <span"+(_vm._ssrStyle(null,null, { display: (!_vm.isFavorite) ? '' : 'none' }))+">Favorite Post </span> <span"+(_vm._ssrStyle(null,null, { display: (_vm.isFavorite) ? '' : 'none' }))+">Unfavorite Post </span> <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.favoritesCount || _vm.article.favoritesCount)+")")+"</span></button>")],2)}
var articleMetavue_type_template_id_ddde770c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue?vue&type=template&id=ddde770c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleMeta.vue?vue&type=script&lang=js&
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


/* harmony default export */ var articleMetavue_type_script_lang_js_ = ({
  name: 'articleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.getProfile();
  },

  computed: { ...Object(external_vuex_["mapState"])(['following', 'favorited', 'favoritesCount']),

    isFavorite() {
      return this.favorited || this.article.favorited;
    }

  },
  methods: { ...Object(external_vuex_["mapMutations"])(['setFollowing', 'setFavoritesCount', 'setFavorite']),

    async getProfile() {
      const {
        data
      } = await Object(api_article["j" /* getProfile */])(this.article.author.username);
      this.setFollowing(data.profile.following);
    },

    async followUser() {
      const {
        data
      } = await Object(api_article["f" /* followUser */])(this.article.author.username); // this.following = data.profile.following

      this.setFollowing(data.profile.following);
    },

    async unfollowUser() {
      const {
        data
      } = await Object(api_article["l" /* unfollowUser */])(this.article.author.username); // this.following = data.profile.following

      this.setFollowing(data.profile.following);
    },

    async favoritedArticle() {
      let article = null;

      if (this.isFavorite) {
        const {
          data
        } = await Object(api_article["e" /* deleteFavorite */])(this.article.slug);
        article = data.article;
      } else {
        const {
          data
        } = await Object(api_article["b" /* addFavorite */])(this.article.slug);
        article = data.article;
      }

      this.setFavorite(article.favorited);
      this.setFavoritesCount(article.favoritesCount);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleMetavue_type_script_lang_js_ = (articleMetavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articleMetavue_type_script_lang_js_,
  articleMetavue_type_template_id_ddde770c_render,
  articleMetavue_type_template_id_ddde770c_staticRenderFns,
  false,
  injectStyles,
  null,
  "407129ce"
  
)

/* harmony default export */ var articleMeta = (component.exports);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleComment.vue?vue&type=template&id=e28e1266&
var articleCommentvue_type_template_id_e28e1266_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form action class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.formData.comment.body))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button type=\"button\" class=\"btn btn-sm btn-primary\">\n           Post Comment\n          </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: {
              userName: comment.author.username
            }
          }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n           \n          "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: {
              userName: comment.author.username
            }
          }}},[_vm._v("\n            "+_vm._s(comment.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span> "+((comment.author.username === _vm.user.username)?("<button type=\"button\" class=\"btn btn-sm btn-primary\" style=\"margin-left: 80px;\">\n            Delete Comment\n          </button>"):"<!---->"))],2)],2)})],2)}
var articleCommentvue_type_template_id_e28e1266_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleComment.vue?vue&type=template&id=e28e1266&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleComment.vue?vue&type=script&lang=js&
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


/* harmony default export */ var articleCommentvue_type_script_lang_js_ = ({
  name: 'articleComents',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      // 评论
      formData: {
        comment: {
          body: ''
        }
      },
      // 评论列表
      comments: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  created() {
    this.getComments();
  },

  methods: {
    async getComments() {
      const {
        data
      } = await Object(api_article["h" /* getArticleComments */])(this.article.slug);
      this.comments = data.comments;
    },

    async postComment() {
      const params = {};
      Object.assign(params, {
        slug: this.article.slug,
        formData: this.formData
      });

      try {
        const {
          data
        } = await Object(api_article["a" /* addComponent */])(params);
        this.comments.unshift(data.comment);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteComment(id) {
      const params = {
        slug: this.article.slug,
        id
      };
      await Object(api_article["d" /* deleteComponent */])(params);
      this.getComments();
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/articleComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleCommentvue_type_script_lang_js_ = (articleCommentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/articleComment.vue



function articleComment_injectStyles (context) {
  
  
}

/* normalize component */

var articleComment_component = Object(componentNormalizer["a" /* default */])(
  components_articleCommentvue_type_script_lang_js_,
  articleCommentvue_type_template_id_e28e1266_render,
  articleCommentvue_type_template_id_e28e1266_staticRenderFns,
  false,
  articleComment_injectStyles,
  null,
  "41d13afb"
  
)

/* harmony default export */ var articleComment = (articleComment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'articleIndex',
  components: {
    articleMeta: articleMeta,
    articleComents: articleComment
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["g" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const markdownIt = new external_markdown_it_default.a();
    article.body = markdownIt.render(article.body);
    return {
      article
    };
  },

  // 为了利于SEO 
  head() {
    return {
      title: `${this.article.title}-RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: `${this.article.description}`
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "1a7c7384"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map