<template>
  <div class="login-register">
    <VWarn></VWarn>
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
        <p>我的简易贴吧,大家随便发言哦~~</p>
      </div>
    </div>
    <div class="main-content-wrapper">
      <div class="form-wrapper">
        <div class="form-list">
          <span class="icon icon-user"></span>
          <label class="">
            <input type="text" name="" placeholder = "账户" v-model = "user">
          </label>
        </div>
        <div class="form-list">
          <span class="icon icon-lock"></span>
          <label class="">
            <input type="password" name="" placeholder = "密码" v-model = "pwd">
          </label>
        </div>
        <div class="btn-box">
          <button @click="login">登 录</button>
        </div>
        <div class="text-box">
          <p>没有账号？</p>
          <router-link to="/register">去注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VWarn from '@/base/Warn/Warn'
  import {login} from '@/api/user'

  export default {
    data() {
      return {
        user: '',
        pwd: ''
      }
    },
    methods: {
      login() {
        const res = login({
          user: this.user,
          pwd: this.pwd
        })
        res.then((data) => {
          if (data.code === 0) {
            this.$store.dispatch('setShowWarn', '账户或密码错误')
          } else {
            const loginData = {
              loginStatus: {
                isLogin: data.is_login,
                userId: data.user_id
              },
              userIfo: data.user_ifo
            }
            this.$store.commit('SET_LOGIN', loginData)
            this.$router.push('/publish')
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
  .login-register
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: #3a3a3a
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
    .main-content-wrapper
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      position: fixed
      top: 0px
      bottom: 0
      .form-wrapper
        width: 200px
        &.fade-enter-active, &.fade-leave-active
          transition: all 0.5s
        &.fade-enter, &.fade-leave-active
          opacity: 0
          transform: scale(0)
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
