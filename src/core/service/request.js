// 提供各方法
import {featchData} from './fetch'

// get方法
export const getRequest = (url, data) => featchData(url, 'get', data)
// post方法
export const postRequest = (url, data) => featchData(url, 'post', data)
