exports.ids = [3];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=4036ae1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">王者荣耀</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'Your Feed'},attrs:{"exact":"","to":{
                name: 'home',
                query: {
                  tab: 'Your Feed',
                  tag: _vm.tag
                }
              }}},[_vm._v("\n              Your Feed\n              ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'Global Feed'},attrs:{"exact":"","to":{
                name: 'home',
                query: {
                  tag: _vm.tag
                }
              }}},[_vm._v("\n              Global Feed\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[(_vm.tag)?_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'tag' },attrs:{"exact":"","to":{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: _vm.tag
                }
              }}},[_vm._v("\n              #"+_vm._s(_vm.tag)+"\n              ")]):_vm._e()],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":("/profile/" + (article.author.username))}},[_c('img',{attrs:{"src":article.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (article.author.username))}},[_vm._v(" \n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMMDD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.isDisabledAr))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("  "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":("/article/" + (article.slug))}},[_c('h1',[_vm._v(" "+_vm._s(article.title)+" ")]),_vm._v(" "),_c('p',[_vm._v(" "+_vm._s(article.description))]),_vm._v(" "),_c('span',{on:{"click":function($event){return _vm.$router.push({
              name: 'article',
              params: {
                slug: article.slug
              } 
            })}}},[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tag: tag,
                  tab: 'tag',
                  page: 1
                }
              }}},[_vm._v("\n              "+_vm._s(tag)+"\n              ")])}),1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPageCount),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: _vm.page === item }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
            name: 'home',
            query: {
              page: item,
              tag: _vm.$route.query.tag
            }
          }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=4036ae1c&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/tag.js
 // 获取标签

const getTags = params => Object(request["b" /* request */])({
  method: 'get',
  url: '/api/tags'
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'home',
  // 监听参数发生变化，重新调用asyncData()
  watchQuery: ['page', 'tag', 'tab'],

  async asyncData({
    query
  }) {
    const limit = 20;
    const page = parseInt(query.page || 1);
    const tag = query.tag;
    const tab = query.tab || 'Global Feed';
    const loadArticles = tab === 'Global Feed' ? api_article["i" /* getArticles */] : api_article["k" /* getYourFeedArticle */]; // 使用promise.all 并行执行任务，提高的速度

    const [articlesRes, tagsRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articlesRes.data;
    articles.forEach(article => {
      article.isDisabledAr = false;
    });
    const {
      tags
    } = tagsRes.data;
    return {
      limit,
      // 每页显示条数
      page,
      // 当前页码
      tab,
      // 选项页
      tag,
      // 标签
      tags,
      // 热门标签集合
      articles,
      // 文章列表
      articlesCount // 总记录数

    };
  },

  computed: {
    totalPageCount() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async onFavoritedClick(article) {
      const {
        slug
      } = article;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["e" /* deleteFavorite */])(slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api_article["b" /* addFavorite */])(slug);
        article.favorited = true;
        article.articlesCount += 1;
      }

      article.isDisabledAr = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a3013a9a"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map