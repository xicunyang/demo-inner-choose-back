<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
      <!--这里是会被缓存的组件-->
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import {CHANGE_TOKEN_ACTION} from './store/actions-type'

export default {
  name: 'App',
  async mounted() {
    await this.$store.dispatch(CHANGE_TOKEN_ACTION)
  },
}
</script>

<style scoped lang="less">
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
