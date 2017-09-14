import * as types from '../mutation-types'
// state
const state = {
  isShow: false,
  message: ''
}

// mutations
const mutations = {
  [types.SHOW_WARN](state, {isShow, message}) {
    state.isShow = isShow
    state.message = message
  }
}

// actions
const actions = {
  setShowWarn: ({commit}, message) => {
    commit(types.SHOW_WARN, {
      isShow: true,
      message: message
    })
    setTimeout(() => {
      commit(types.SHOW_WARN, {
        isShow: false,
        message: ''
      })
    }, 2000)
  },
  openShowWarn: ({commit}, message) => {
    commit(types.SHOW_WARN, {
      isShow: true,
      message: message
    })
  },
  closeShowWarn: ({commit}) => {
    commit(types.SHOW_WARN, {
      isShow: false,
      message: ''
    })
  }
}

export default {
  state,
  mutations,
  actions
}
