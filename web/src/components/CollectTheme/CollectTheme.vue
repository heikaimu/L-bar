<template>
  <div class="my-collect-theme">
    <VHeader :backShow = "true" :title = "'我关注的吧'"></VHeader>
    <div class="my-collect-theme-container">
      <div>
        <LeftDelete :index="item.ID" @deleteItem="deleteItem" v-for="item in themeList">
          <div class="theme-item">
            <div class="avatar" @click="$router.push({path:`/post_bar/${item.theme_id}`})"><img v-lazy="item.head_thumb" alt=""></div>
            <h2 class="name" @click="$router.push({path:`/post_bar/${item.theme_id}`})">{{item.theme}}</h2>
          </div>
        </LeftDelete>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from '@/components/Common/Header/Header'
  import BScroll from '@/base/BScroll/BScroll'
  import LeftDelete from '@/base/LeftDelete/LeftDelete'
  import {mapGetters} from 'vuex'
  import {collectTheme} from '@/api/theme'
  export default {
    data() {
      return {
        themeList: []
      }
    },
    computed: {
      ...mapGetters([
        'userIfo'
      ])
    },
    created() {
      this._getCollectTheme()
    },
    methods: {
      deleteItem(index) {
        alert(index)
      },
      _getCollectTheme() {
        const res = collectTheme(this.userIfo.ID)
        res.then((result) => {
          const {data} = result
          this.themeList = data.theme_list
          console.log(this.themeList)
        })
      }
    },
    components: {
      VHeader,
      BScroll,
      LeftDelete
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .my-collect-theme
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: $color-white
    .my-collect-theme-container
      width: 100%
      position: absolute
      top: 40px
      bottom: 0
      overflow: hidden
      .theme-item
        display: flex
        align-items: center
        width: 100%
        background: $color-white
        border-1px($color-border)
        .avatar
          width: 50px
          height: 50px
          margin: 10px
          overflow: hidden
          background: $color-text
          &>img
            width: 100%
            height: 100%
        .name
          padding-left: 10px
          font-size: $size-middle

</style>
