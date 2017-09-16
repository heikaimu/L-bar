<template>
  <div class="post-bar">
    <Warn></Warn>
    <VHeader :backShow = "true" :title = "details.theme"></VHeader>
    <BScroll class="post-bar-container" :data="postBar">
      <div>
        <ThemeDetail :details="details" :isCollect="isCollect" @collect="collect"></ThemeDetail>
        <PostBarList :postBar = "postBar"></PostBarList>
      </div>
    </BScroll>
    <ArticleSend @sub-article="submit" v-show="isShowPostArticle"></ArticleSend>
    <div class="edit-btn" @click="isShowPostArticle = !isShowPostArticle"><span class="icon-edit"></span></div>
  </div>
</template>

<script>
  import VHeader from '@/components/Common/Header/Header'
  import BScroll from '@/base/BScroll/BScroll'
  import PostBarList from '@/components/Common/PostBarList/PostBarList'
  import ThemeDetail from '@/components/common/ThemeDetail/ThemeDetail'
  import ArticleSend from '@/base/ArticleSend/ArticleSend'
  import Warn from '@/base/Warn/Warn'
  import {getPostBarList, submitPostBar} from '@/api/postBar'
  import {getThemeDetails, collect, isCollect} from '@/api/theme'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        details: {},
        postBar: [],
        isShowPostArticle: false,
        isCollect: 0
      }
    },
    computed: {
      ...mapGetters([
        'userIfo'
      ])
    },
    created() {
      this._getDetail()
      this._getThemeList()
      this._checkIsCollect()
    },
    methods: {
      async submit(data) {
        data.themeId = this.$route.params.id
        console.log(data)
        const {code, msg} = await submitPostBar(data)
        if (code === 1) {
          this.$store.dispatch('setShowWarn', '发帖成功~O(∩_∩)O')
          this._getThemeList()
        } else {
          this.$store.dispatch('setShowWarn', msg)
        }
        this.isShowPostArticle = false
      },
      async collect() {
        const {code} = await collect({
          themeId: this.$route.params.id,
          userId: this.userIfo.ID
        })
        if (code === 1) {
          this.$store.dispatch('setShowWarn', '关注成功~O(∩_∩)O')
          this._checkIsCollect()
        }
      },
      async _checkIsCollect() {
        const {code} = await isCollect({
          themeId: this.$route.params.id,
          userId: this.userIfo.ID
        })
        this.isCollect = code
      },
      async _getDetail() {
        const {data} = await getThemeDetails(this.$route.params.id)
        this.details = data.theme_details
      },
      async _getThemeList() {
        const {data} = await getPostBarList(this.$route.params.id)
        for (let i = 0; i < data.post_bar.length; i++) {
          const imgStr = data.post_bar[i].img
          data.post_bar[i].img = JSON.parse(imgStr)
        }
        this.postBar = data.post_bar
      }
    },
    components: {
      VHeader,
      BScroll,
      PostBarList,
      ThemeDetail,
      ArticleSend,
      Warn
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .post-bar
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: $color-body-bg
    .post-bar-container
      width: 100%
      position: absolute
      top: 40px
      bottom: 0
      overflow: hidden
    .edit-btn
      position: fixed
      right: 20px
      bottom: 20px
      width: 40px
      height: 40px
      background: $color-blue1
      border-radius: 50%
      text-align: center
      line-height: 40px
      color: $color-white
      font-size: $size-large-x
      &:active
        background: $color-blue2
</style>
