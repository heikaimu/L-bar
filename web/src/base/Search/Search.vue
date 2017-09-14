<template>
  <div class="search">
    <div class="search-wrapper">
      <label for="">
        <input type="text" v-model="keyword" placeholder="输入你想看的贴吧名" @focus="showSearch = true">
      </label>
      <button v-show="showSearch" @click="unSearch">取消</button>
    </div>
    <div class="history-wrapper" v-show="theme.length !== 0">
      <p class="history-item" v-for="item in theme" @click="$router.push({path: `/post_bar/${item.ID}`})">{{item.theme}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['theme'],
    data() {
      return {
        keyword: '',
        showSearch: false,
        showHistory: false,
        timer: ''
      }
    },
    methods: {
      search() {
        this.$emit('search', this.keyword)
      },
      unSearch() {
        this.showSearch = false
        this.keyword = ''
        this.$emit('unSearch', '')
      }
    },
    watch: {
      keyword() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$emit('search', this.keyword)
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'
.search
  width: 100%
  position: relative
  .search-wrapper
    display: flex
    padding: 10px
    background: $color-border
    &>label
      flex: 1
      margin-right: 5px
      transition: .3s
      &>input
        width: 100%
        height: 30px
        border-radius: 5px
        text-indent: 5px
        font-size: $size-middle
    &>button
      flex: 0 0 60px
      width: 60px
      height: 30px
      border-radius: 5px
      background: $color-orange
      border: none
      font-size: $size-middle
      color: $color-white
  .history-wrapper
    display: flex
    flex-wrap: wrap
    width: 100%
    min-height: 450px
    background: $color-white
    position: absolute
    top: 50px
    z-index: 3
    .history-item
      width 48%
      margin: 1%
      height: 40px
      text-indent: 10px
      background: $color-border
      font-size: $size-middle
      line-height: 40px
      overflow: hidden
</style>
