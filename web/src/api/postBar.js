import {requestGet, requestPost} from '@/common/js/request'
const API_CONFIG = '/postBar'

/**
 * [推荐帖子]
 * @return {[array]}[帖子数组]
 */
export const getPostBarPublishList = (themeId) => {
  return requestGet(`${API_CONFIG}/publishList`)
}

/**
 * [某主题的帖子]
 * @param {[number]} themeId [主题id]
 * @return {[array]}        [帖子数组]
 */
export const getPostBarList = (themeId) => {
  return requestGet(`${API_CONFIG}/typeList?theme_id=${themeId}`)
}

/**
 * [帖子详情]
 * @param {[number]} postBarId [帖子id]
 * @return {[object]}          [帖子详情]
 */
export const getPostBarDetails = (postBarId) => {
  return requestGet(`${API_CONFIG}/details?post_bar_id=${postBarId}`)
}

/**
 * [发帖]
 * @param {[object]} title,msg,theme_id [标题，内容，吧id]
 * @return {[boolean]}                  [true/false]
 */
export const submitPostBar = (data) => {
  return requestPost(`${API_CONFIG}/publish`, data)
}
