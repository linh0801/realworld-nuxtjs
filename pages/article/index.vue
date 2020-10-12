<template>
  <div class="article-page">

  <div class="banner">
    <div class="container">
      <h1>{{article.title}}</h1>
      <article-meta :article="article"></article-meta>
    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
      </div>
    </div>

    <hr />

    <div class="article-actions">
      <article-meta :article="article"></article-meta>
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">
        <article-coments :article="article"></article-coments>
      </div>

    </div>

  </div>

</div>
</template>

<script>
import { getArticle } from '@/api/article'
import articleMeta from './components/articleMeta'
import MarkdownIt from 'markdown-it'
import articleComents from './components/articleComment'
export default {
  name: 'articleIndex',
  components: {
    articleMeta,
    articleComents
  },
  async asyncData ({ params }) {
    const { data } = await getArticle(params.slug)
    const { article } = data
    const markdownIt = new MarkdownIt()
    article.body = markdownIt.render(article.body)
    return {
      article
    }
  },
  // 为了利于SEO 
  head() {
      return {
        title: `${this.article.title}-RealWorld`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${this.article.description}`
          }
        ]
      }
    }
}
</script>

<style>

</style>