<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive && routerViewShow"></router-view>
      <!--这里是会被缓存的组件-->
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive && routerViewShow"></router-view>

    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import qs from 'qs'
import {login, loginPost} from './core/service/api'
import axios from 'axios'

export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    }
  },
  components: {
    // HelloWorld,
  },
  data() {
    return {
      routerViewShow: true,
    }
  },
  async mounted() {},
  methods: {
    async getClick() {
      let loginRes = await login({
        userName: 'userName',
        userPass: 'userPass',
      })
      console.log(loginRes)
    },
    async reload() {
      console.log('reload')
      this.routerViewShow = false
      setTimeout(() => {
        this.$nextTick(() => {
          this.routerViewShow = true
        })
      }, 1000)
    },
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.text {
  font-size: 30px;
}
</style>
