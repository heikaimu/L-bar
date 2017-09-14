import {requestPost} from '@/common/js/request'
const API_CONFIG = '/user'

/**
 * [注册接口]
 * @param {[objec]} data [注册信息]
 * @return {[object]}    [注册结果]
 */
export const register = (data) => {
  return requestPost(`${API_CONFIG}/register`, data)
}

/**
 * [验证用户是否存在]
 * @param {[object]} data [用户名]
 * @return {[boolen]}    [true/false]
 */
export const isRegister = (data) => {
  return requestPost(`${API_CONFIG}/isRegister`, data)
}

/**
 * [登录]
 * @param {[object]} data [用户名密码]
 * @return {[object]}    [promise]
 */
export const login = (data) => {
  return requestPost(`${API_CONFIG}/login`, data)
}

/**
 * [修改密码]
 * @param {[object]} data [旧密码新密码]
 * @return {[object]}    [promise]
 */
export const changePwd = (data) => {
  return requestPost(`${API_CONFIG}/changePwd`, data)
}

/**
 * [修改昵称]
 * @param {[string]} nickname [新的昵称]
 * @return {[object]}    [promise]
 */
export const changeNickname = (data) => {
  return requestPost(`${API_CONFIG}/changeNickname`, data)
}
