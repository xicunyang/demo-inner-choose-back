import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {Button, NavBar} from 'vant'
import mtLoading from 'mt-loading'

Vue.use(Button)
Vue.use(NavBar)
Vue.use(mtLoading)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
