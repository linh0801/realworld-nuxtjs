<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">王者荣耀,农药</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">
      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li v-if="user" class="nav-item">
              <nuxt-link class="nav-link"
              exact
              :class="{active: tab === 'Your Feed'}"
              :to="{
                name: 'home',
                query: {
                  tab: 'Your Feed',
                  tag
                }
              }">
              Your Feed
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link"
              exact
              :class="{active: tab === 'Global Feed'}"
              :to="{
                name: 'home',
                query: {
                  tag
                }
              }">
              Global Feed
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
              exact
              v-if ="tag"
              class="nav-link"
              :class="{active: tab === 'tag' }"
              :to="{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag
                }
              }">
              #{{tag}}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="article-preview" v-for="article of articles" :key="article.slug">
          <div class="article-meta">
            <nuxt-link :to="`/profile/${article.author.username}`"><img :src="article.image" /></nuxt-link>
            <div class="info">
              <nuxt-link class="author" :to="`/profile/${ article.author.username }`"> 
                {{ article.author.username }}
              </nuxt-link>
              <span class="date">{{ article.createdAt | date('MMMDD,YYYY')  }}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right"
            @click="onFavoritedClick(article)"
            :disabled="article.isDisabledAr"
            :class="{ active: article.favorited }">
              <i class="ion-heart"></i>  {{ article.favoritesCount }}
            </button>
          </div>
          <nuxt-link
            :to="`/article/${ article.slug }`"
            class="preview-link"
           >

            <h1> {{ article.title }} </h1>
            <p> {{ article.description }}</p>
            <span @click=" $router.push({
              name: 'article',
              params: {
                slug: article.slug
              } 
            })"
            >Read more...</span>
          </nuxt-link>
        </div>
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list" >
              <nuxt-link class="tag-pill tag-default"
              v-for="tag of tags" :key="tag"
              :to="{
                name: 'home',
                query: {
                  tag,
                  tab: 'tag',
                  page: 1
                }
              }">
              {{tag}}
              </nuxt-link>
            <!-- <a href="" class="tag-pill tag-default">{{ tag }}</a> -->
          </div>
        </div>
      </div>

    </div>
    <nav>
      <ul class="pagination">
        <li class="page-item"
          v-for="item in totalPageCount"
          :key="item"
          :class="{ active: page === item }"
        >
          <nuxt-link class="page-link" 
          :to="{
            name: 'home',
            query: {
              page: item,
              tag: $route.query.tag
            }
          }">{{ item }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>

</div>
</template>

<script>
import { getArticles, getYourFeedArticle, addFavorite, deleteFavorite } from '@/api/article'
import { getTags } from '@/api/tag'
import { mapState } from 'vuex'
export default {
  name: 'home',
  // 监听参数发生变化，重新调用asyncData()
  watchQuery: ['page', 'tag', 'tab'],
  async asyncData({ query }) {
   const limit = 20
   const page = parseInt( query.page || 1)
   const tag = query.tag
   const tab = query.tab || 'Global Feed'
   const loadArticles = tab === 'Global Feed' ? getArticles : getYourFeedArticle
   // 使用promise.all 并行执行任务，提高的速度
   const [articlesRes, tagsRes] =  await Promise.all([
     loadArticles ({ 
      limit,
      offset: ( page - 1 ) * limit,
      tag
     }),
     getTags()
   ])
  const {articles, articlesCount} = articlesRes.data
  articles.forEach(article => {
    article.isDisabledAr = false
  })
  const {tags} = tagsRes.data
   return {
     limit, // 每页显示条数
     page,  // 当前页码
     tab, // 选项页
     tag,   // 标签
     tags,  // 热门标签集合
     articles,  // 文章列表
     articlesCount, // 总记录数
   }
  },
  computed: {
    totalPageCount () {
      return Math.ceil( this.articlesCount / this.limit )
    },
    ...mapState(['user'])
  },
  methods: {
    async onFavoritedClick ( article ) {
      const { slug } = article
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite (slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加点赞
        await addFavorite (slug)
        article.favorited = true
        article.articlesCount += 1
      }
      article.isDisabledAr = false
    }
  }
}
</script>

<style>

</style>