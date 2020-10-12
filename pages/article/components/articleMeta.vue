<template>
  <div class="article-meta">
        <nuxt-link :to="`/profile/${article.author.username}`">
          <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
          <nuxt-link class="author" :to="`/profile/${article.author.username}`">
            {{article.author.username}}
          </nuxt-link>
          <span class="date">{{ article.createAt | date('MMM dd, YYYY') }}</span>
        </div>
        <button v-show="!following" class="btn btn-sm btn-outline-secondary" @click="followUser">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow {{article.author.username}} 
          <!-- <span class="counter">(10)</span> -->
        </button>
        <button v-show="following"
        class="btn btn-sm  btn-secondary" @click="unfollowUser">
             <i class="ion-plus-round"></i>
              &nbsp;
              unfollow {{article.author.username}} 
        </button>
            &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary"
          :class="{'btn-primary': isFavorite,
                    'active': isFavorite,
                   'btn-outline-primary': isFavorite}"
          @click="favoritedArticle"
        >
          <i class="ion-heart"></i>
          &nbsp;
          <span v-show="!isFavorite">Favorite Post </span>
          <span v-show="isFavorite">Unfavorite Post </span>
          <span class="counter">({{favoritesCount || article.favoritesCount}})</span>
        </button>
      </div>
</template>

<script>
import { followUser, unfollowUser, getProfile, addFavorite, deleteFavorite } from '@/api/article'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'articleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.getProfile()
  },
  computed : {
    ...mapState(['following', 'favorited', 'favoritesCount']),
    isFavorite () {
      return this.favorited || this.article.favorited
    }
  },
  methods: {
    ...mapMutations(['setFollowing', 'setFavoritesCount', 'setFavorite']),
    async getProfile () {
      const { data } = await getProfile(this.article.author.username)
      this.setFollowing(data.profile.following)
    },
    async followUser () {
      const { data } = await followUser(this.article.author.username)
      // this.following = data.profile.following
      this.setFollowing(data.profile.following)
    },
    async unfollowUser () {
      const { data } = await unfollowUser(this.article.author.username)
      // this.following = data.profile.following
      this.setFollowing(data.profile.following)
    },
    async favoritedArticle () {
      let article = null
      if (this.isFavorite ) {
        const { data } = await deleteFavorite(this.article.slug)
        article = data.article
      } else {
        const { data } =  await addFavorite(this.article.slug)
        article = data.article
      }
      this.setFavorite(article.favorited)
      this.setFavoritesCount(article.favoritesCount)
    }
  }
}
</script>

<style>

</style>