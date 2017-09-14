<template>
  <div class="post-bar-detail">
    <h2 class="desc">{{details.desc}}</h2>
    <div class="author">
      <div class="avatar"><img v-lazy="details.head_thumb" alt=""></div>
      <div class="ifo">
        <p class="name">{{details.acount, details.nickname | nameJudge}} <i>楼主</i></p>
        <p class="add-time">{{details.add_time | timeCut}}</p>
      </div>
    </div>
    <div class="content">
      <TextContent :text="details.details"></TextContent>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TextContent from '@/base/TextContent/TextContent'
  import {getPostTime} from '@/common/js/time'
  export default {
    props: {
      details: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      timeCut(value) {
        return getPostTime(value)
      },
      nameJudge(acount, nickname) {
        if (nickname !== '') {
          return nickname
        } else {
          return acount
        }
      }
    },
    components: {
      TextContent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/variable.styl';
  @import '../../../common/stylus/mixin.styl';
  .post-bar-detail
    padding: 10px
    border-1px(#ddd)
    .desc
      font-size: $size-large-x
      font-weight: 900
      line-height: 1.8
      letter-spacing: 1px
      color: $color-title
    .author
      display: flex
      height: 80px
      align-items: center
      .avatar
        width: 30px
        height: 30px
        border-radius: 50%
        border: 1px solid #ddd
        overflow: hidden
        background: #666
        &>img
          width: 100%
          height: 100%
      .ifo
        padding-left: 5px
        .name
          font-size: $size-small
          &>i
            display: inline-block
            padding-left: 10px
            font-style: normal
            color: $color-blue1
        .add-time
          padding-top: 5px
          font-size: $size-small
    .content
      &>p
        line-height: 1.8
        font-size: $size-middle-x
        padding-bottom: 10px
</style>
