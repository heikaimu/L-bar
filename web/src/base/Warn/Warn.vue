<template>
  <transition name="slide">
    <p class="warn" v-show="isShow">{{message}}</p>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    computed: {
      isShow() {
        return this.$store.state.warn.isShow
      },
      message() {
        return this.$store.state.warn.message
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'
  .warn
    position: fixed
    top: 10px
    left: 10px
    right: 10px
    z-index: 235
    padding: 10px
    border-radius: 5px
    background: $color-white
    box-shadow: 0 0 6px $color-gray
    font-size: $size-middle
    color:$color-title
    line-height: 1.5
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s ease
    &.slide-enter, &.slide-leave-to
      transform: translate3d(0,-50px,0)
      opacity: 0
</style>
