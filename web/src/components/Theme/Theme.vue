<template>
  <div class="theme">
    <VHeader :title="'进吧'" :backShow="false"></VHeader>
    <BScroll class="theme-container">
      <div>
        <Search @search = "search" @unSearch = "unSearch" :theme = "searchTheme"></Search>
        <ThemeList :theme = "collectThemeList"></ThemeList>
      </div>
    </BScroll>
    <Tab :currentTab = '2'></Tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from '@/components/Common/Header/Header'
  import BScroll from '@/base/BScroll/BScroll'
  import Search from '@/base/Search/Search'
  import Tab from '@/components/Common/Tab/Tab'
  import ThemeList from '@/components/Common/ThemeList/ThemeList'
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
        'userIfo'
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
      _getCollectTheme() {
        const res = collectTheme(this.userIfo.ID)
        console.log(res)
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
      ThemeList
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
</style>
