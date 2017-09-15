<template>
  <transition name="slide" mode="out-in">
    <ul class="tab-wrapper">
      <li class="tab-item" :class="{active: currentTab == 1}" @click="$router.push('/publish')">
        <span class="icon icon-home"></span>
        <p class="txt">推荐</p>
      </li>
      <li class="tab-item" :class="{active: currentTab == 2}" @click="$router.push('/theme')">
        <span class="icon icon-comments"></span>
        <p class="txt">进吧</p>
      </li>
      <li class="tab-item" :class="{active: currentTab == 3}" @click="$router.push('/user')">
        <span class="icon icon-user"></span>
        <p class="txt">我的</p>
      </li>
      <!--<li class="tab-item" :class="{active: currentTab == 4}" @click="$router.push('/publish')">-->
        <!--<span class="icon icon-pencil"></span>-->
        <!--<p class="txt">总结</p>-->
      <!--</li>-->
    </ul>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['currentTab'],
    data() {
      return {
        ifShow: true
      }
    },
    created() {},
    methods: {},
    watch: {
      '$route'() {
        this._chargeShow()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/variable.styl'
  .tab-wrapper
    width: 100%
    position: fixed
    bottom: 0
    left: 0
    display: flex
    height: 50px
    background: $color-tab-bg
    &.slide-enter-active
      transition: all 0.5s
    &.slide-leave-active
      transition: all 0.5s
    &.slide-enter
      transform: translate3d(0,10px,0)
      opacity: 0
    &.slide-leave-active
      transform: translate3d(0,10px,0)
      opacity: 0
    .tab-item
      flex: 1
      &.active
        background: $color-orange
        .icon
          opacity: 1;
        .txt
          opacity: 1;
      .icon
        display: block
        width: 100%
        padding: 8px 0 3px 0
        text-align: center
        font-size: $size-large-x
        color: $color-white
        opacity: .5;
      .txt
        display: block
        width: 100%
        text-align: center
        font-size: $size-small-x
        color: $color-white
        opacity: .5;
</style>
