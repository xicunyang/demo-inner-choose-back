// 对各方法进行处理封装

import http from './axios'
import qs from 'qs'

export const featchData = async (url, method, data = null) => {
  let httpOpts = {url, method}
  let paramsSerializer = (params) => qs.stringify(params, {indices: false})
  httpOpts =
    method === 'get'
      ? {...httpOpts, params: data, paramsSerializer}
      : {...httpOpts, data}

  try {
    const res = await http(httpOpts)
    return res.data
  } catch (e) {
    return null
  }
}
