import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'begin',
      meta: {
        keepAlive: true,
      },
      component: () =>
        import(/* webpackChunkName: "begin" */ './../pages/example/begin'),
    },
    {
      path: '/list',
      name: 'list',
      meta: {
        keepAlive: true,
      },
      component: () =>
        import(/* webpackChunkName: "list" */ './../pages/example/list'),
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
        keepAlive: true,
      },
      component: () =>
        import(/* webpackChunkName: "detail" */ './../pages/example/detail'),
    },
    {
      path: '/shop-list',
      name: 'shop-list',
      meta: {
        keepAlive: false,
      },
      component: () =>
        import(
          /* webpackChunkName: "shop-list" */ './../pages/example/shopList'
        ),
    },
    {
      path: '/shop-detail',
      name: 'shop-detail',
      meta: {
        keepAlive: false,
      },
      component: () =>
        import(
          /* webpackChunkName: "shop-detail" */ './../pages/example/shopDetail'
        ),
    },
    {
      path: '/buy',
      name: 'buy',
      meta: {
        keepAlive: false,
      },
      component: () =>
        import(/* webpackChunkName: "buy" */ './../pages/example/buy'),
    },
  ],
})
