<template>
  <div class="img-wrapper">
    <div class="img-item" v-for="(item, index) in imgList">
      <img :src="item" alt="">
      <span class="remove icon-remove" @click="removeImg(index)"></span>
    </div>
    <div class="upload-btn">
      <label for="img" class="icon-plus"><input type="file" id="img" v-show="false" @change="uploadImg"></label>
      <span class="loading" v-show="isShowLoading"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  const DOMAIN = 'http://ow97kusp4.bkt.clouddn.com/'
  const IMGSTYLE = '?imageslim'
  const TOKEN = 'Kve1h7nvbNMxeP-jnW490r71erSiEKORr0674zXY:PIrIu4rbdrHZ8MYOn3nDa3tMjnY=:eyJzY29wZSI6ImltZy11cGxvYWQyIiwiZGVhZGxpbmUiOjE1MDU1NzE0MTV9'
  export default {
    props: ['imgList'],
    data() {
      return {
        isShowLoading: false
      }
    },
    methods: {
      uploadImg(e) {
        this.faceShow = false
        this.isShowLoading = true
        let file = e.target.files[0]
        let param = new FormData()
        param.append('file', file)
        param.append('token', TOKEN)
        $.ajax({
          type: 'post',
          url: 'http://upload.qiniu.com/',
          data: param,
          contentType: false,
          processData: false,
          async: true,
          success: (res) => {
            const newHeadThumb = `${DOMAIN}${res.key}${IMGSTYLE}`
            this.$emit('imgUpload', newHeadThumb)
            this.isShowLoading = false
          }
        })
      },
      removeImg(index) {
        this.$emit('imgRemove', index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl';
  @import '../../common/stylus/mixin.styl';

  @import '../../common/stylus/variable.styl';
  @import '../../common/stylus/mixin.styl';
  .img-wrapper
    padding: 5px
    display: flex
    flex-wrap: wrap
    .img-item
      display: flex
      align-items: center
      justify-content: center
      width: 24%
      height: 80px
      margin: 2px .5%
      background: $color-border
      overflow: hidden
      position: relative
      border-radius: 5px
      &>img
        height: 100%
      .remove
        position: absolute
        right: 5px
        top: 5px
        width: 30px
        height: 30px
        background: red
        border-radius: 50%
        text-align: center
        line-height: 30px
        color: #fff
    .upload-btn
      width: 24%
      height: 80px
      margin: 2px .5%
      position: relative
      border-radius: 5px
      overflow: hidden
      &>label
        display: block
        width: 100%
        height: 100%
        background: $color-border
        text-align: center
        line-height: 80px
        font-size: 24px
        color: $color-title
      .loading
        position: absolute
        top: 0
        bottom: 0
        left: 0
        right: 0
        border: 1px solid $color-border
        background: url("./loading.gif") no-repeat center center $color-white
</style>
