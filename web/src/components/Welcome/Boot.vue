<template>
  <div class="boot">
    <div class="ad"></div>
    <div class="title-wrapper">
      <p class="title"><b>小</b><b>贴</b><b>吧</b></p>
      <p class="desc">给你不一样的精彩</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    created() {
      setTimeout(() => {
        this.isLogin ? this.$router.push('/publish') : this.$router.push('/welcome')
      }, 3000)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .boot
    width: 100%
    position: fixed
    top: 0px
    bottom: 0px
    .ad
      width: 100%
      position: absolute
      top: 0
      bottom: 60px
      background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504582944339&di=524a7e10a0ce0c648e222a60d8dd010b&imgtype=0&src=http%3A%2F%2Fpic3.duowan.com%2Fmh%2F1104%2F166024836174%2F166024877138.jpg') no-repeat center center
      background-size: cover
    .title-wrapper
      display: flex
      align-items: center
      width: 100%
      background: $color-white
      position: absolute
      bottom: 0
      height: 60px
    .title
      text-indent: 10px
      font-size: $size-large-x
      color: $color-title
      letter-spacing: 5px
      &>b
        font-weight: 900
        &:nth-child(1)
          color: $color-blue1
        &:nth-child(2)
          color: $color-red
        &:nth-child(2)
          color: $color-red
    .desc
      padding: 8px 0 0 20px
      font-size: $size-small-x
</style>
