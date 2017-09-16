<template>
  <div class="post-bar-wrapper">
  <div v-for = "(item, index) in postBar" class="post-bar-item">
    <div class="author-wrapper">
      <div class="author-avatar"><img v-lazy="item.head_thumb"></div>
      <div class="text">
        <p class="name">{{item.acount, item.nickname | nameJudge}}</p>
        <p class="add-time">{{item.add_time | timeCut}}</p>
      </div>
    </div>
    <div class="content-wrapper">
      <h2 class="desc" @click="$router.push(`/reply/${item.ID}`)">{{item.title}}</h2>
      <div class="content" @click="$router.push(`/reply/${item.ID}`)">
        <TextContent :text="item.details"></TextContent>
      </div>
      <div class="img-box" v-if="item.img">
        <div class="img-item" v-for="(imgSrc, index) in item.img" v-if="index < 2"><img :src="imgSrc" alt=""></div>
      </div>
      <div class="other-icon">
        <p class="bar-name">{{item.theme || ''}}</p>
        <span class="icon icon-comment">{{item.count || 0}}</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import TextContent from '@/base/TextContent/TextContent'
    import {getPostTime} from '@/common/js/time'
    export default {
      props: ['postBar'],
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
  .post-bar-wrapper
    padding: 15px
    background: #fff
    .post-bar-item
      padding: 10px 0
      border-1px($color-border)
      .author-wrapper
        display: flex
        align-items: center
        height: 40px
        .author-avatar
          width: 30px
          height: 30px
          border-radius: 50%
          overflow: hidden
          background: #666
          &>img
            width: 100%
            height: 100%
        .text
          padding: 0 10px
          .name
            padding-top: 3px
            font-size: $size-small-x
            &>i
              display: inline-block
              padding-left: 10px
              font-style: normal
              color: $color-blue
          .add-time
            padding-top: 5px
            font-size: $size-small-x
      .content-wrapper
        padding-top: 0px
        .desc
          font-size: $size-large
          color: $color-title
          padding-bottom: 5px
          line-height: 1.5
          font-weight: 900
        .content
          &>p
            font-size: $size-small-x
            color: $color-text
            line-height: 1.5
        .img-box
          display: flex
          width: 100%
          margin-top: 15px
          .img-item
            display: flex
            align-items: center
            justify-content: center
            flex: 1
            height: 150px
            margin: 0 2px
            background: $color-title
            overflow: hidden
            &>img
              max-height: 100%
        .other-icon
          height: 30px
          display: flex
          align-items: center
          justify-content: space-between
          .bar-name
            font-size: $size-small-x
            color: $color-title
          .icon
            font-size: $size-small-x
            color: $color-text
            margin: 0 10px
            &:before
              margin-right: 5px
</style>
