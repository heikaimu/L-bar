<template>
  <div class="head-thumb-wrapper">
    <VWarn></VWarn>
    <div class="back-btn icon-angle-left" @click="$router.push('/user')"></div>
    <div class="avatar-wrapper">
      <div class="avatar">
        <img :src="userIfo.head_thumb" alt="">
        <span class="loading" v-show="isShowLoading"></span>
      </div>
    </div>
    <div class="avatar-btn">
      <label for="file" class="btn">选择上传图片</label>
      <input type="file" @change="upload" id="file" v-show="false">
    </div>
  </div>
</template>

<script>
  import VWarn from '@/base/Warn/Warn'
  import {mapGetters} from 'vuex'
  import {changeHeadThumb} from '@/api/user'
  import $ from 'jquery'
  const DOMAIN = 'http://ow97kusp4.bkt.clouddn.com/'
  const IMGSTYLE = '?imageView2/5/w/200/h/200/q/100|imageslim'
  const TOKEN = 'Kve1h7nvbNMxeP-jnW490r71erSiEKORr0674zXY:PIrIu4rbdrHZ8MYOn3nDa3tMjnY=:eyJzY29wZSI6ImltZy11cGxvYWQyIiwiZGVhZGxpbmUiOjE1MDU1NzE0MTV9'
  export default {
    data() {
      return {
        isShowLoading: false
      }
    },
    computed: {
      ...mapGetters([
        'userIfo'
      ])
    },
    methods: {
      upload(e) {
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
            const result = changeHeadThumb(newHeadThumb)
            result.then((data) => {
              this.isShowLoading = false
              const {code, msg} = data
              if (code === 1) {
                this.$store.commit('SET_HEAD_THUMB', newHeadThumb)
                this.$store.dispatch('setShowWarn', '头像修改成功~')
              } else {
                this.$store.dispatch('setShowWarn', msg)
              }
            })
          }
        })
      }
    },
    components: {
      VWarn
    }
  }
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
        position: relative
        &>img
          width: 100%
          height: 100%
        .loading
          width: 100%
          height: 100%
          border-radius: 50%
          position: absolute
          top: 0
          left: 0
          background: url("./loading.gif") no-repeat center center $color-white
    .avatar-btn
      display: flex
      position: absolute
      bottom: 0
      width: 100%
      background: $color-white
      .btn
        flex: 1
        height: 50px
        margin: 5px
        border: none
        background: $color-orange
        text-align: center
        line-height: 50px
        font-size: $size-large-x
        letter-spacing: 2px
        color: $color-white
        &:active
          margin: 4px
</style>
