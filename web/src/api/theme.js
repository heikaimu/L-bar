import {requestGet} from '@/common/js/request'
const API_CONFIG = '/theme'

/**
 * [贴吧列表接口，通过关键字查询]
 * @param {[string]} keyword [主题id]
 * @return {[object]}        [贴吧数组]
 */
export const getThemeListByKeyword = (keyword) => {
  return requestGet(`${API_CONFIG}/list?keyword=${keyword}`)
}

/**
 * [贴吧详情，通过id查询]
 * @param {[int]} user_id [theme_id]
 * @return {[object]}     [贴吧详情]
 */
export const getThemeDetails = (themeId) => {
  return requestGet(`${API_CONFIG}/details?theme_id=${themeId}`)
}

/**
 * [判断是否关注了该贴吧]
 * @param {[object]} theme_id user_id [吧id，用户id]
 * @return {[bollen]}                 [true/false]
 */
export const isCollect = (data) => {
  const themeId = data.themeId
  const userId = data.userId
  return requestGet(`${API_CONFIG}/isCollect?theme_id=${themeId}&user_id=${userId}`)
}

/**
 * [关注]
 * @param {[string]} user_id [用户id]
 * @return {[arr]}           [贴吧列表]
 */
export const collect = (data) => {
  const themeId = data.themeId
  const userId = data.userId
  return requestGet(`${API_CONFIG}/collect?theme_id=${themeId}&user_id=${userId}`)
}

/**
 * [关注的贴吧]
 * @param {[string]} user_id [用户id]
 * @return {[arr]}           [贴吧列表]
 */
export const collectTheme = (userId) => {
  return requestGet(`${API_CONFIG}/collectList?user_id=${userId}`)
}
