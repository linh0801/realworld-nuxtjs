<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input type="text" v-model="formData.article.title" class="form-control form-control-lg" placeholder="Article Title">
            </fieldset>
            <fieldset class="form-group">
                <input type="text" v-model="formData.article.description" class="form-control" placeholder="What's this article about?">
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" v-model="formData.article.body" rows="8" placeholder="Write your article (in markdown)"></textarea>
            </fieldset>

            <fieldset class="form-group">
                <input type="text" v-model="formData.article.tagList" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onSubmit">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { createArticle } from '@/api/article'
export default {
  name: 'editArticle',
  // 在路由渲染组件之前会先执行中间件处理
  middleware: 'authenticated',
  data() {
    return {
      formData: {
       "article": {
        "title": "",
        "description": "",
        "body": "",
        "tagList": []
        }
      }
    }
  },
  methods: {
    async onSubmit() {
      const { data } = await createArticle(this.formData)
      const article = data.article
      if ( article ) {
        alert('文章发布成功')
      }
    }
  }
}
</script>

<style>

</style>