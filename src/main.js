import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {Button, NavBar} from 'vant'
// 局部loading动画
import mtLoading from 'mt-loading'
// 判空方法
import isEmpty from './utils/isEmpty'

// 测试vant的按需加载
Vue.use(Button)
Vue.use(NavBar)
Vue.use(mtLoading)
Vue.prototype.$isEmpty = isEmpty

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
