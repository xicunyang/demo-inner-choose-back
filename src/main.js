import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {Button, NavBar} from 'vant'
// 局部loading动画
import mtLoading from 'mt-loading'
// 判空方法
import isEmpty from './utils/isEmpty'
// 国际化
import i18n from './i18n/index'
// 全局filter
import filters from './filter/index'
// 引入icons
import svgIcon from './icons/svg-icon'
Vue.component('icon-svg', svgIcon)
// 引入store
import store from './store'
// 权限管理
import permission from './permission'
// 增加错误日志收集
import sentry from './plugins/sentry/index'

// 测试vant的按需加载
Vue.use(Button)
Vue.use(NavBar)
Vue.use(mtLoading)
Vue.prototype.$isEmpty = isEmpty

Vue.config.productionTip = false

// 绑定过滤器
Object.keys(filters).forEach((filterName) => {
  Vue.filter(filterName, filters[filterName])
})

new Vue({
  router,
  i18n,
  store,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
