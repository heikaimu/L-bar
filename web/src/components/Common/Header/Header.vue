<template>
  <div class="header">
    <transition name="slide" mode="out-in">
      <span @click="$router.back()" class="icon left-icon icon-angle-left" v-show="backShow"></span>
    </transition>
    <h2 class="title">{{title}}</h2>
    <!--<router-link to="/loginRegister" class="icon right-icon icon-comment-alt"></router-link>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {},
      backShow: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    created() {},
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/variable.styl';
  @import '../../../common/stylus/mixin.styl';
  .header
    height: 40px
    background: $color-header-bg
    border-1px($color-border)
    .title
      line-height: 40px
      padding: 0 40px
      text-align: center
      color: $color-white
      font-size: $size-middle
      letter-spacing: 1px
    .icon
      display: block
      width: 40px
      height: 40px
      background: $color-gray
      position: absolute
      top: 0
      text-align: center
      line-height: 40px
      font-size: $size-middle-x
      color: $color-white
      &.slide-enter-active
        transition: all 0.5s
      &.slide-leave-active
        transition: all 0.5s
      &.slide-enter
        transform: translate3d(10px,0,0)
        opacity: 0
      &.slide-leave-active
        transform: translate3d(10px,0,0)
        opacity: 0
      &.left-icon
        left: 0
      &.right-icon
        right: 0

</style>
