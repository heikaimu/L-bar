<template>
  <div class="login-register">
    <VWarn></VWarn>
    <div class="back-btn icon-angle-left" @click="$router.push('/user')"></div>
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
        <p>写一个炫酷的名字吧~</p>
      </div>
    </div>
    <div class="change-main-content-wrapper">
      <div class="form-wrapper">
        <div class="form-list">
          <label class="">
            <input type="text" name="" v-model = "nickname">
          </label>
        </div>
        <div class="btn-box">
          <button @click="editNickname">修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VWarn from '@/base/Warn/Warn'
  import {changeNickname} from '@/api/user'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        nickname: ''
      }
    },
    computed: {
      ...mapGetters([
        'userIfo'
      ])
    },
    created() {
      this.nickname = this.userIfo.nickname
    },
    methods: {
      async editNickname() {
        const {code, msg} = await changeNickname({
          nickname: this.nickname
        })
        if (code === 1) {
          this.$store.commit('SET_NICKNAME', this.nickname)
          this.$store.dispatch('setShowWarn', '修改成功~')
        } else {
          this.$store.dispatch('setShowWarn', msg)
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
