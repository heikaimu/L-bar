<template>
  <div class="welcome">
    <div class="ad"></div>
    <div class="actions">
      <router-link to="/login" class="grey">登录</router-link>
      <router-link to="/register" class="blue">新用户</router-link>
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
      this.isLogin && this.$router.push('/publish')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'
  .welcome
    width: 100%
    position: fixed
    top: 0px
    bottom: 0px
    .ad
      width: 100%
      position: absolute
      top: 0
      bottom: 60px
      background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1504582023&di=2567984e95c757e810c96205c6f17286&src=http://imgsrc.baidu.com/forum/pic/item/342ac65c103853431b4930a29313b07ecb8088ab.jpg') no-repeat center center
      background-size: cover
    .actions
      display: flex
      width 100%
      height: 60px
      background: $color-white
      position: absolute
      bottom: 0
      &>a
        flex: 1
        height: 60px
        background: $color-blue1
        text-align: center
        font-size: $size-large
        color: $color-white
        line-height: 60px
        letter-spacing: 3px
        &:nth-child(1)
          background: $color-green
</style>
