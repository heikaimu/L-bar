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
      background: url('http://img5.duitang.com/uploads/item/201404/18/20140418223400_UhPn5.thumb.700_0.jpeg') no-repeat center center
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
