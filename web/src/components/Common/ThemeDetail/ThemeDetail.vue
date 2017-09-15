<template>
  <div class="theme-desc">
    <div class="theme-ifo">
      <div class="avatar"><img :src="details.head_thumb" alt=""></div>
      <h2 class="name">{{details.theme}}</h2>
    </div>
    <div class="sign-collect">
      <p class="btn" v-if="!isCollect" @click="collect">关注</p>
      <p class="btn" v-else>已关注</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      details: {
        type: Object,
        default() {
          return {}
        }
      },
      isCollect: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    methods: {
      collect() {
        this.$emit('collect')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/variable.styl'
  @import '../../../common/stylus/mixin.styl'

  .theme-desc
    display: flex
    background: $color-white
    padding: 10px
    margin-bottom: 10px
    .theme-ifo
      flex: 1
      display: flex
      align-items: center
      .avatar
        width: 60px
        height: 60px
        background: $color-text
        &>img
          width: 100%
          height: 100%
      .name
        padding-left: 10px
        color: $color-title
    .sign-collect
      display: flex
      align-items: center
      justify-content: center
      flex: 0 0 80px
      width: 80px
      .btn
        width: 60px
        height: 30px
        border-radius: 3px
        border: 1px solid $color-red
        text-align: center
        line-height: 30px
        font-size: $size-middle
        color: $color-red
</style>
