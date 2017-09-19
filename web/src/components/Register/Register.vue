<template>
  <div class="login-register">
    <VWarn></VWarn>
    <div class="main-content-wrapper">
      <div class="form-wrapper">
        <div class="form-list">
          <label class="">
            <input type="text" name="" placeholder = "账户" v-model = "user">
          </label>
          <p class="remind-ifo wrong" v-show="user !== '' && isRegister">账户已存在</p>
          <p class="remind-ifo right" v-show="user !== '' && !isRegister">账户可用</p>
        </div>
        <div class="form-list">
          <label class="">
            <input type="password" name="" placeholder = "密码" v-model = "pwd">
          </label>
        </div>
        <div class="form-list">
          <label class="">
            <input type="password" name="" placeholder = "确认密码" v-model = "pwdAgain">
          </label>
          <p class="remind-ifo wrong" v-show="pwdAgain !== '' && !isSamePwd">前后密码不一致</p>
        </div>
        <div class="form-list">
          <label class="">
            <input type="text" name="" placeholder = "昵称" v-model = "nickname">
          </label>
        </div>
        <div class="form-list">
          <div class="sex-wrapper">
            <span class="sex-item" :class="{active: sex === 1}" @click="sex = 1">男</span>
            <span class="sex-item" :class="{active: sex === 0}" @click="sex = 0">女</span>
          </div>
        </div>
        <div class="form-list">
          <label class="">
            <input type="date" name="" placeholder = "出生日期" v-model = "birth">
          </label>
        </div>
        <div class="btn-box">
          <button @click="register">注 册</button>
        </div>
        <div class="text-box">
          <p>已有账号？</p>
          <router-link to="/login">去登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VWarn from '@/base/Warn/Warn'
  import {register, isRegister, login} from '@/api/user'
  export default {
    data() {
      return {
        user: '',
        pwd: '',
        pwdAgain: '',
        nickname: '',
        sex: '',
        birth: '',
        timer: '',
        isRegister: false,
        isSamePwd: false
      }
    },
    methods: {
      _judgeIsRegister() {
        if (this.user !== '') {
          const res = isRegister({
            user: this.user
          })
          res.then((data) => {
            this.isRegister = !data
          })
        }
      },
      _comparePwd() {
        if (this.pwd !== this.pwdAgain) {
          this.isSamePwd = false
        } else {
          this.isSamePwd = true
        }
      },
      register() {
        if (!this.isRegister && this.isSamePwd) {
          if (this.user !== '' && this.pwd !== '' && this.sex !== '' && this.birth !== '') {
            this.callBack()
          } else {
            alert('内容不能有空')
          }
        } else {
          alert('信息有误')
        }
      },
      async callBack() {
        const {code} = await register({
          user: this.user,
          pwd: this.pwd,
          nickname: this.nickname,
          sex: this.sex,
          birth: this.birth
        })
        if (code === 1) {
          this.$store.dispatch('openShowWarn', '注册成功3秒后跳转')
          setTimeout(() => {
            this.$store.dispatch('openShowWarn', '注册成功2秒后跳转')
          }, 1000)
          setTimeout(() => {
            this.$store.dispatch('openShowWarn', '注册成功1秒后跳转')
          }, 2000)
          setTimeout(() => {
            this.login()
            this.$store.dispatch('closeShowWarn')
          }, 2500)
        } else {
          this.$store.dispatch('setShowWarn', '账户已存在')
        }
      },
      async login() {
        const {code, is_login, user_id, user_ifo} = await login({
          user: this.user,
          pwd: this.pwd
        })
        if (code === 0) {
          this.$store.dispatch('setShowWarn', '账户或密码错误')
        } else {
          const loginData = {
            loginStatus: {
              isLogin: is_login,
              userId: user_id
            },
            userIfo: user_ifo
          }
          this.$store.commit('SET_LOGIN', loginData)
          this.$router.push('/publish')
        }
      }
    },
    watch: {
      user() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this._judgeIsRegister()
        }, 500)
      },
      pwdAgain() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this._comparePwd()
        }, 500)
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
          margin-bottom: 20px
          position: relative
          .sex-wrapper
            display: flex
            justify-content: space-around
            width: 100%
            height: 40px
            .sex-item
              flex: 1
              height: 40px
              text-align: center
              line-height: 40px
              background: $color-text
              &:nth-child(odd)
                margin-right: 10px
              &.active
                background: $color-orange
                color: $color-white
          .remind-ifo
            position: absolute
            left: 0px
            bottom: -20px
            line-height: 20px
            font-size: $size-small
            &.wrong
              color: $color-red
            &.right
              color: $color-green
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
            &.disabled
              background: $color-text
              border: 1px solid $color-text
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
