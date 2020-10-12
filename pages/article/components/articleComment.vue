<template>
  <div>
    <form class="card comment-form" action="" >
          <div class="card-block">
            <textarea class="form-control" v-model="formData.comment.body" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img :src="user.image" class="comment-author-img" />
            <button class="btn btn-sm btn-primary" type="button" @click="postComment">
             Post Comment
            </button>
          </div>
    </form>
        
        <div class="card" v-for="comment in comments" :key="comment.id">
          <div class="card-block">
            <p class="card-text">{{comment.body}}</p>
          </div>
          <div class="card-footer">
            <nuxt-link class="comment-author"
            :to="{
              name: 'profile',
              params: {
                userName: comment.author.username
              }
            }">
              <img :src="comment.author.image" class="comment-author-img" />
            </nuxt-link>
            &nbsp;
            <nuxt-link class="comment-author"
            :to="{
              name: 'profile',
              params: {
                userName: comment.author.username
              }
            }">
              {{ comment.author.username }}
            </nuxt-link>
            <span class="date-posted">{{comment.createdAt | date('MMM DD, YYYY')}}</span>
            <button v-if="comment.author.username === user.username"
            class="btn btn-sm btn-primary"
            style="margin-left: 80px;"
            type="button"
            @click="deleteComment(comment.id)"
            >
              Delete Comment
            </button>
          </div>
        </div>

  </div>

</template>

<script>
import { getArticleComments, addComponent, deleteComponent } from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'articleComents',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // 评论
      formData: {
        comment: {
          body: ''
        }
      },
      // 评论列表
      comments: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.getComments()
  },
  methods: {
    async getComments () {
      const { data } = await getArticleComments (this.article.slug)
      this.comments = data.comments
    },
    async postComment () {
      
      const params = {}
      Object.assign(params, {slug: this.article.slug, formData: this.formData})
      try {
        const { data } = await addComponent(params)
        this.comments.unshift(data.comment)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment(id) {
      const params = {
        slug: this.article.slug,
        id
      }
      await deleteComponent( params )
      this.getComments()
    }

  }
}
</script>

<style>

</style>