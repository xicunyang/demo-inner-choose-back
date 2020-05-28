// 提供接口
import {getRequest, postRequest} from './request'

// 测试接口
export const login = (data) => getRequest('/login', data)
export const loginPost = (data) => postRequest('/login-post', data)
