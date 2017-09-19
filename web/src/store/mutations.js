import * as types from './mutation-types'

export const state = {
  loginStatus: JSON.parse(sessionStorage.getItem('loginStatus') || '{}'),
  userIfo: JSON.parse(sessionStorage.getItem('userIfo') || '{}')
}

export const mutations = {
  [types.SET_LOGIN](state, {loginStatus, userIfo}) {
    state.loginStatus = loginStatus
    state.userIfo = userIfo
    sessionStorage.setItem('loginStatus', JSON.stringify(state.loginStatus))
    sessionStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  },
  [types.LOGOUT](state) {
    state.loginStatus = {}
    state.userIfo = {}
    sessionStorage.setItem('loginStatus', JSON.stringify(state.loginStatus))
    sessionStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  },
  [types.SET_HEAD_THUMB](state, imgSrc) {
    state.userIfo.head_thumb = imgSrc
    sessionStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  },
  [types.SET_NICKNAME](state, nickname) {
    state.userIfo.nickname = nickname
    sessionStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  }
}
