<template>
  <div class="user">
    <Warn></Warn>
    <span class="setting icon-cog" @click="isSliderBarShow=true"></span>
    <div class="black-board" v-show="isSliderBarShow" @click="isSliderBarShow=false"></div>
    <transition name="fade">
      <div class="slider-nav" v-show="isSliderBarShow">
        <p @click="$router.push('/head_thumb')">修改头像</p>
        <p @click="$router.push('/change_nickname')">修改昵称</p>
        <p @click="$router.push('/change_pwd')">修改密码</p>
        <p @click="logout">退出登录</p>
      </div>
    </transition>
    <BScroll class="user-container" :data = "postBarList">
      <div>
        <div class="user-face-wrapper" :style="faceBg">
          <div class="user-basic-wrapper">
            <div class="avatar" :style="avatar"></div>
            <div class="name-sex">
              <p class="name">{{userIfo.nickname}} <i class="sex" :class="[sex]"></i></p>
            </div>
            <p class="bar-age">吧龄：{{barAge}}</p>
          </div>
        </div>
        <div class="num-menu">
          <!--<div class="num-item">-->
            <!--<p class="num">10</p>-->
            <!--<p class="text">关注</p>-->
          <!--</div>-->
          <!--<div class="num-item">-->
            <!--<p class="num">10</p>-->
            <!--<p class="text">粉丝</p>-->
          <!--</div>-->
          <div class="num-item" @click="$router.push('/collect_theme')">
            <p class="num">{{collectBarNum}}</p>
            <p class="text">关注的吧</p>
          </div>
        </div>
        <PostBarList :postBar = "postBarList"></PostBarList>
      </div>
    </BScroll>
    <Tab :currentTab = '3'></Tab>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import VHeader from '@/components/Common/Header/Header'
  import Tab from '@/components/Common/Tab/Tab'
  import BScroll from '@/base/BScroll/BScroll'
  import Warn from '@/base/Warn/Warn'
  import PostBarList from '@/components/Common/PostBarList/PostBarList'
  import {getPostBarList} from '@/api/postBar'
  import {collectTheme} from '@/api/theme'
  import {getAge} from '@/common/js/time'
  export default {
    data() {
      return {
        postBarList: [],
        faceBgUrl: 'http://img1.gamersky.com/upimg/pic/2017/08/19/201708191154117385_small.jpg',
        collectBarNum: 0,
        isSliderBarShow: false
      }
    },
    computed: {
      ...mapGetters([
        'isLogin',
        'userIfo'
      ]),
      avatar() {
        return {
          background: `url(${this.userIfo.head_thumb}) no-repeat`,
          backgroundSize: 'cover'
        }
      },
      faceBg() {
        return {
          background: `url(${this.faceBgUrl}) no-repeat`,
          backgroundSize: 'cover'
        }
      },
      sex() {
        return this.userIfo.sex === 1 ? 'male' : 'female'
      },
      barAge() {
        return getAge(this.userIfo.add_time)
      }
    },
    created() {
      !this.isLogin && this.$router.push('/')
      this._getBarList()
      this._getCollectBarNum()
    },
    methods: {
      logout() {
        this.$store.commit('LOGOUT')
        this.$store.dispatch('openShowWarn', '退出成功，3s后回到首页')
        setTimeout(() => {
          this.$store.dispatch('openShowWarn', '退出成功，2s后回到首页')
        }, 1000)
        setTimeout(() => {
          this.$store.dispatch('openShowWarn', '退出成功，1s后回到首页')
        }, 2000)
        setTimeout(() => {
          this.$store.dispatch('closeShowWarn')
          this.$router.push('/Welcome')
        }, 2500)
      },
      async _getBarList() {
        const {data} = await getPostBarList(1)
        this.postBarList = data.post_bar
      },
      async _getCollectBarNum() {
        const {data} = await collectTheme(this.userIfo.ID)
        this.collectBarNum = data.theme_list.length
      }
    },
    components: {
      VHeader,
      Tab,
      PostBarList,
      BScroll,
      Warn
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .user
    width: 100%
    position: fixed
    top: 0
    bottom: 0
    background: $color-white
    .setting
      width: 60px
      height: 60px
      position: absolute
      right: 0px
      top: 0px
      text-align: center
      line-height: 60px
      font-size: 30px
      color: $color-title
      z-index: 233
    .black-board
      width: 100%
      position: fixed
      top: 0
      bottom: 0
      z-index: 222
      background: rgba(0,0,0,0.2)
    .slider-nav
      width: 60%
      position: fixed
      right: 0
      top: 0
      bottom: 0
      z-index: 234
      background: $color-title
      &.fade-enter-active, &.fade-leave-active
        transition: .5s
      &.fade-enter, &.fade-leave-to
        transform: translate3d(100px,0,0)
        opacity: 0
      &>p
        width: 100%
        height: 60px
        text-indent: 20px
        border-1px($color-text)
        line-height: 60px
        color: $color-white
        font-size: $size-middle-x
        letter-spacing: 1px
    .user-container
      width: 100%
      position: absolute
      top: 0
      bottom: 50px
      .user-face-wrapper
        display: flex
        align-items: center
        justify-content: center
        width: 100%
        height: 260px
        .user-basic-wrapper
          .avatar
            width: 80px
            height: 80px
            border: 2px solid $color-white
            border-radius: 50%
            overflow: hidden
          .name-sex
            padding-top: 10px
            text-align: center
            .name
              display: inline-block
              font-size: $size-large
              color: $color-white
              position: relative
              .sex
                display: block
                width 18px
                height: 18px
                position: absolute
                right: -25px
                top: 0
                &.male
                  background: url('./male.png')
                  background-size: 100%
                &.female
                  background: url('./female.png')
                  background-size: 100%
          .bar-age
            padding-top: 10px
            text-align: center
            font-size: $size-small
            color: $color-white
      .num-menu
        display: flex
        width: 100%
        height: 60px
        background: $color-white
        .num-item
          flex: 1
          border-1px($color-border)
          text-align: center
          .num
            padding: 12px 0 5px 0
            font-size: $size-large-x
            color: $color-title
          .text
            font-size: $size-small
            color: $color-text
</style>
