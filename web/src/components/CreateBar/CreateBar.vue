<template>
  <div class="login-register">
    <VWarn></VWarn>
    <div class="back-btn icon-angle-left" @click="$router.push('/theme')"></div>
    <div class="logo">
      <div class="title">
        <p>
          <i>P</i>
          <i>O</i>
          <i>S</i>
          <i>T</i>
        </p>
        <p>
          <i>B</i>
          <i>A</i>
          <i>R</i>
        </p>
      </div>
      <div class="sub-title">
        <p>创建一个你想要的贴吧~</p>
      </div>
    </div>
    <div class="change-main-content-wrapper">
      <div class="form-wrapper">
        <div class="pic-form">
          <p class="desc">点击上传图片</p>
          <img :src="barImg" alt="">
          <label for="pic" class="pic"></label>
          <div class="loading" v-show="isShowLoading"></div>
          <input type="file" id="pic" v-show="false" @change="upload">
        </div>
        <div class="form-list">
          <label class="">
            <input type="text" name="" v-model = "barName" placeholder="贴吧名字">
          </label>
        </div>
        <div class="btn-box">
          <button @click="createBar">创建</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VWarn from '@/base/Warn/Warn'
  import {createNewBar} from '@/api/theme'
  import $ from 'jquery'
  import {mapGetters} from 'vuex'
  const DOMAIN = 'http://ow99hkq6k.bkt.clouddn.com/'
  const IMGSTYLE = '?imageView2/5/w/200/h/200/q/100|imageslim'
  const TOKEN = 'Kve1h7nvbNMxeP-jnW490r71erSiEKORr0674zXY:BhUc4-caxAPcrc-qzC2hPiIIJgk=:eyJzY29wZSI6InBvc3QtYmFyIiwiZGVhZGxpbmUiOjE1MDU4Mjc4Mzh9'
  export default {
    data() {
      return {
        barName: '',
        barImg: '',
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
            this.isShowLoading = false
            this.barImg = newHeadThumb
          }
        })
      },
      async createBar() {
        if (this.barName !== '' && this.barImg !== '') {
          const {code, msg} = await createNewBar({
            barName: this.barName,
            barImg: this.barImg
          })
          if (code === 1) {
            this.$store.dispatch('openShowWarn', '创建成功,3秒后返回')
            setTimeout(() => {
              this.$store.dispatch('openShowWarn', '创建成功,2秒后返回')
            }, 1000)
            setTimeout(() => {
              this.$store.dispatch('openShowWarn', '创建成功,1秒后返回')
            }, 2000)
            setTimeout(() => {
              this.$store.dispatch('closeShowWarn')
              this.$router.push('/theme')
            }, 2500)
          } else {
            this.$store.dispatch('setShowWarn', msg)
          }
        } else {
          this.$store.dispatch('setShowWarn', '请将信息填写完整后再提交~')
        }
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
  .login-register
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: #3a3a3a
    .back-btn
      display: block
      width: 60px
      height: 60px
      text-align: center
      line-height: 60px
      font-size: 24px
      color: $color-white
    .logo
      padding-top: 70px
      .title
        display: flex
        justify-content: center
        &>p
          padding: 0 10px
          &>i
            font-style: normal
            font-size: 40px
            text-shadow: 0px 1px 1px #333
            color: #4ba1ea
      .sub-title
        display: flex
        padding-top 10px
        justify-content: center
        &>p
          font-size: $size-middle
          color: $color-white
          text-shadow: 0px 1px 1px #666
          letter-spacing: 2px
    .change-main-content-wrapper
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      position: absolute
      top: 60px
      bottom: 0
      .form-wrapper
        width: 200px
        &.fade-enter-active, &.fade-leave-active
          transition: all 0.5s
        &.fade-enter, &.fade-leave-active
          opacity: 0
          transform: scale(0)
        .pic-form
          width: 200px
          height: 200px
          margin-bottom: 20px
          background: $color-white
          position: relative
          .desc
            width: 100%
            height: 100%
            position: absolute
            left: 0
            top: 0
            text-align: center
            line-height: 200px
            z-index: 1
            color: $color-blue1
          .pic
            display: block
            width: 100%
            height: 100%
            position: absolute
            left: 0
            top: 0
            z-index: 3
          &>img
            width: 100%
            position: absolute
            left: 0
            top: 0
            bottom: 0
            z-index: 2
          .loading
            width: 100%
            position: absolute
            left: 0
            top: 0
            bottom: 0
            z-index: 4
            background: url("./loading.gif") no-repeat center center $color-white
        .form-list
          display: flex
          width: 100%
          height: 40px
          align-items: center
          margin-bottom: 15px
          .icon
            flex: 0 0 40px
            width: 40px
            height: 40px
            text-align: center
            line-height: 40px
            font-size: $size-large-x
            color: $color-text
            background: #262a2d
          &>label
            flex: 1
            height: 40px
            background: #3a4149
            &>input
              text-indent: 1em
              border: none
              width: 100%
              height: 100%
              background: transparent
              color: #cfd2d9
              font-size: 14px
              letter-spacing: 1px
              outline: none
              &:focus
                background: $color-title
        .btn-box
          &>button
            width: 100%
            height: 40px
            background: #4ba1ea
            border: 1px solid #1f3a57
            color: $color-white
            font-size: $size-middle
            letter-spacing: 1px
            text-shadow:1px 1px 2px #666
            position: relative;
            &:active
              box-shadow: 0 0 3px #111
              top: 1px
        .text-box
          display: flex
          justify-content: space-around
          &>p, &>a
            padding: 15px 0
            font-size: $size-middle
            color: $color-white
</style>
