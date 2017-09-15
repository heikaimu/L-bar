<template>
  <div class="theme">
    <VWarn></VWarn>
    <VHeader :title="'进吧'" :backShow="false"></VHeader>
    <BScroll class="theme-container">
      <div>
        <Search @search = "search" @unSearch = "unSearch" :theme = "searchTheme"></Search>
        <h2 class="title">我的收藏</h2>
        <ThemeList :theme = "collectThemeList"></ThemeList>
      </div>
    </BScroll>
    <Tab :currentTab = '2'></Tab>
    <div class="create-bar" @click="createBar">建吧+</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from '@/components/Common/Header/Header'
  import BScroll from '@/base/BScroll/BScroll'
  import Search from '@/base/Search/Search'
  import Tab from '@/components/Common/Tab/Tab'
  import ThemeList from '@/components/Common/ThemeList/ThemeList'
  import VWarn from '@/base/Warn/Warn'
  import {mapGetters} from 'vuex'
  import {getThemeListByKeyword, collectTheme} from '@/api/theme'

  export default {
    data() {
      return {
        collectThemeList: [],
        searchTheme: [],
        timer: ''
      }
    },
    computed: {
      ...mapGetters([
        'userIfo',
        'isLogin'
      ])
    },
    created() {
      this._getCollectTheme()
    },
    methods: {
      search(keyword) {
        clearTimeout(this.timer)
        setTimeout(() => {
          if (keyword === '') return false
          var res = getThemeListByKeyword(keyword)
          res.then((result) => {
            const {data} = result
            this.searchTheme = data.theme_list
          })
        }, 50)
      },
      unSearch() {
        this.searchTheme = []
      },
      createBar() {
        if (this.isLogin) {
          this.$router.push('/create_bar')
        } else {
          this.$store.dispatch('setShowWarn', '请登录~')
          setTimeout(() => {
            this.$router.push('/welcome')
          }, 2000)
        }
      },
      _getCollectTheme() {
        const res = collectTheme(this.userIfo.ID)
        res.then((result) => {
          const {data} = result
          this.collectThemeList = data.theme_list
        })
      }
    },
    components: {
      VHeader,
      Tab,
      BScroll,
      Search,
      ThemeList,
      VWarn
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'
  .theme
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: $color-white
    .theme-container
      width: 100%
      position: fixed
      top: 40px
      bottom: 50px
      .title
        border-1px($color-border)
        text-align: center
        line-height: 60px
        font-size: $size-large
        font-weight: 900
    .create-bar
      width: 60px
      height: 60px
      border-radius: 50%
      background: $color-blue1
      box-shadow: 0 0 6px $color-text
      position: fixed
      bottom: 70px
      right: 20px
      text-align: center
      line-height: 60px
      color: $color-white
</style>
