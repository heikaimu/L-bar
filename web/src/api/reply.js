import {requestGet, requestPost} from '@/common/js/request'
const API_CONFIG = '/reply'
/**
 * [回复列表api]
 * @param {[number]} postBarId [帖子id]
 * @return {[array]}        [帖子数组]
 */
export const getReplyList = (postBarId) => {
  return requestGet(`${API_CONFIG}/list?post_bar_id=${postBarId}`)
}

/**
 * [发表回复]
 * @param {[object]} msg,post_bar_id [回复内容及帖子id]
 * @return {[boolean]}               [true/false]
 */
export const submitReply = (data) => {
  return requestPost(`${API_CONFIG}/post_reply`, data)
}
