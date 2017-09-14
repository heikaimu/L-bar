<template>
  <div class="reply-wrapper">
    <div v-for="item in reply" class="reply-group">
      <div class="reply-author">
        <div class="avatar"><img v-lazy="item.head_thumb" alt=""></div>
        <div class="ifo">
          <p class="name">{{item.acount, item.nickname, details.acount | nameJudge}} <i v-if = "item.acount === details.acount">楼主</i></p>
          <p class="add-time"><i>第{{item.floor}}楼</i> {{item.add_time | timeCut}}</p>
        </div>
      </div>
      <div class="reply-content">
        <TextContent :text="item.details"></TextContent>
        <!--<div class="sub-reply-wrapper" v-if = "item.sub_reply.length !== 0">-->
          <!--<p class="sub-reply-text" v-for="item in item.sub_reply">-->
            <!--<i>{{item.acount, item.nickname | nameJudge}}</i>-->
            <!--<i v-if = "item.acount === detail.acount">楼主</i>:-->
            <!--{{item.details}}-->
          <!--</p>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import TextContent from '@/base/TextContent/TextContent'
    import {getPostTime} from '@/common/js/time'
    export default {
      props: {
        reply: {
          type: Array,
          default: []
        },
        details: {
          type: Object,
          default: {}
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
  .reply-wrapper
    padding: 0 10px
    .reply-group
      padding-bottom: 20px
      border-1px(#ddd)
      .reply-author
        display: flex
        height: 60px
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
            &>i
              font-style: normal
              display: inline-block
              margin-right: 10px
      .reply-content
        padding-left: 35px
        .reply-text
          font-size: $size-middle-x
          line-height: 1.5
        .sub-reply-wrapper
          padding: 10px
          background: $color-background
          .sub-reply-text
            font-size: $size-small-x
            line-height: 2
            &>i
              font-style: normal
              color: $color-blue
</style>
