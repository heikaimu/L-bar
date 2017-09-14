<template>
  <div class="head-thumb-wrapper">
    <div class="back-btn icon-angle-left" @click="$router.push('/user')"></div>
    <div class="avatar-wrapper">
      <div class="avatar"><img :src="userIfo.head_thumb" alt=""></div>
    </div>
    <div class="avatar-btn">
      <button>选择图片</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .head-thumb-wrapper
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: $color-text
    .back-btn
      display: block
      width: 60px
      height: 60px
      text-align: center
      line-height: 60px
      font-size: 24px
      color: $color-white
    .avatar-wrapper
      display: flex
      justify-content: center
      align-items: center
      position: absolute
      width: 100%
      top: 60px
      bottom: 60px
      .avatar
        width: 200px
        height: 200px
        border: 3px solid $color-white
        background: $color-border
        border-radius: 50%
        overflow: hidden
        &>img
          width: 100%
          height: 100%
    .avatar-btn
      display: flex
      position: absolute
      bottom: 0
      width: 100%
      background: $color-white
      &>button
        flex: 1
        height: 50px
        margin: 5px
        border: none
        background: $color-orange
        font-size: $size-large-x
        letter-spacing: 2px
        color: $color-white
        &:active
          margin: 4px
</style>
