import axios from 'axios'

/**
 * [requestGet 封装get请求]
 * @param {[string]} url [请求地址]
 * @return {[object]}    [promise]
 */
export function requestGet(url) {
  return axios.get(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

/**
 * [requestPost 封装post请求]
 * @param {[string]} url [请求地址]
 * @param {[object]} data [数据]
 * @return {[object]}    [promise]
 */
export function requestPost(url, data) {
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
