import {CHANGE_TOKEN_ACTION} from './actions-type'

export default {
  [CHANGE_TOKEN_ACTION]({commit}) {
    // 模拟异步
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('changeToken')
        resolve()
      }, 1000)
    })
  },
}
