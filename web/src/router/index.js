import Vue from 'vue'
import Router from 'vue-router'
import Boot from '@/components/Welcome/Boot'
import Welcome from '@/components/Welcome/Welcome'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import Theme from '@/components/Theme/Theme'
import PostBar from '@/components/PostBar/PostBar'
import Reply from '@/components/Reply/Reply'
import Publish from '@/components/Publish/Publish'
import User from '@/components/User/User'
import CollectTheme from '@/components/CollectTheme/CollectTheme'
import HeadThumb from '@/components/HeadThumb/HeadThumb'
import ChangePwd from '@/components/ChangePwd/ChangePwd'
import ChangeNickname from '@/components/ChangeNickname/ChangeNickname'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Boot
    },
    {
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/theme',
      component: Theme
    },
    {
      path: '/post_bar/:id',
      component: PostBar
    },
    {
      path: '/reply/:id',
      component: Reply
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/publish',
      component: Publish
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/collect_theme',
      component: CollectTheme
    },
    {
      path: '/head_thumb',
      component: HeadThumb
    },
    {
      path: '/change_pwd',
      component: ChangePwd
    },
    {
      path: '/change_nickname',
      component: ChangeNickname
    }
  ]
})
