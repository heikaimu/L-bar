<template>
  <div class="publish">
    <VHeader :title="'推荐'" :backShow="false"></VHeader>
    <Bscroll class="post-bar-container" :data = "postBarList">
      <PostBarList :postBar = "postBarList"></PostBarList>
    </Bscroll>
    <Tab :currentTab = "1"></Tab>
  </div>
</template>

<script>
  import VHeader from '@/components/Common/Header/Header'
  import Tab from '@/components/Common/Tab/Tab'
  import PostBarList from '@/components/Common/PostBarList/PostBarList'
  import Bscroll from '@/base/Bscroll/Bscroll'
  import {getPostBarPublishList} from '@/api/postBar'

  export default {
    data() {
      return {
        postBarList: []
      }
    },
    created() {
      this._getPublishList()
    },
    methods: {
      async _getPublishList() {
        var res = await getPostBarPublishList()
        this.postBarList = res.data.post_bar
      }
    },
    components: {
      VHeader,
      Tab,
      PostBarList,
      Bscroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .publish
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: $color-white
    .post-bar-container
      width: 100%
      position: absolute
      top: 40px
      bottom: 50px
      overflow: hidden
</style>
