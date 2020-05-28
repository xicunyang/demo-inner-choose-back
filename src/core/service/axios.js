// 封装axios拦截
import axios from 'axios'
import {Notify} from 'vant'

const instance = axios.create({
  baseURL: '/mutou',
  timeout: 6000, // 全局超时时间
})

instance.interceptors.request.use(
  (config) => {
    // 配置相关参数
    const token = 'this is token'
    token && (config.headers['Authorization'] = token)
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (res) => {
    // 处理返回值
    return res
  },
  (err) => {
    if (process.env.NODE_ENV !== 'development') {
      // 生产环境 - 提交错误信息
      console.log('提交错误信息')
      return
    }
    if (err.response === undefined) {
      // 单独处理 - 无网络：断网、连接wifi但是wifi没有网络时，会走到这个判断
      Notify({
        message: '无网络',
        duration: 3000,
      })
      return
    }
    let {status} = err.response
    let message = ''
    if (status >= 500) {
      message = '服务器错误'
    }
    if (status === 401 || status === 403) {
      message = '用户登录失效，请重新登录后重试'
      // 重新登录逻辑
    }
    // TODO 其他更多细分的状态

    // 提示
    Notify({
      message,
      duration: 3000,
    })
    return Promise.reject(err)
  },
)

// 导出axios
export default instance
