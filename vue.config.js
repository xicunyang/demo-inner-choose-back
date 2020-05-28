const path = require('path')
const srcPath = path.join(__dirname, 'src')
const requireContext = require('require-context')

process.env.isClient = process.env.NODE_ENV === 'development'
// const requireAll = (requireContext) => requireContext.keys().map(requireContext)
// const req = requireContext(path.join(srcPath, 'icons/svgs'), false, /\.svg$/)
// requireAll(req)

module.exports = {
  lintOnSave: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(srcPath, 'style/variables.less'),
        path.join(srcPath, 'style/common.less'),
      ],
    },
  },
  devServer: {
    // node层做了前端跨域
    /**后端是不是微服务类型
     * 是: login服务、user服务...
     *    后端的每个服务都会有一个前缀，比如login，就会使/login/to-login、/login/to-login2......
     *    比如user，就是/user/get-user-by-id、/user/get-user-list......
     *    所以下面的代理，就需要配置多个，就像：
     *    '/login':{ target: process.env.VUE_APP_BASE_URL},
     *    '/user':{ target: process.env.VUE_APP_BASE_URL},
     * 否: 那就不是微服务类型，后端就一个服务
     *    后端的接口有没有统一的前缀？
     *    有:
     *      实现方案按微服务，只需配置一个即可
     *    无:
     *      没有统一的前缀，后端的接口是类似/login、/get-user-by-id、/get-user-list...
     *      就可以前端加一个临时前缀，在axios.js中配置baseUrl，此时，所有通过axios的请求都会携带统一的前缀
     *      增加统一前缀的作用只是临时的，只是前端请求 -> node层被拦截掉 -> 地址替换回来 ->做跨域
     *      eg: axois.js中配上/mutou前缀
     *        下面的代理中拦截到/mutou的请求，并且转发到target上，并且开启pathRewrite，将/mutou去掉，换成/
     *        流程结束，地址没有变化，只是临时加了一次/mutou
     */
    proxy: {
      // 拦截所有的包含/mutou的请求
      '/mutou': {
        // 转发到下面的真实地址
        target: process.env.VUE_APP_BASE_URL,
        // 重写请求的地址  将/mutou 改为 /, 即恢复原来的样子 (看情况是否开启)
        // eg: http://localhost:9527/mutou/login -> http://process.env.VUE_APP_BASE_URL/login
        pathRewrite: {
          '^/mutou': '/',
        },
      },
    },
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    // 清楚已有的所有loader
    // 如果不这样做，接下来的loader会附加在该规则现有的loader之后
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.join(srcPath, 'icons/svgs'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
    // 本来只添加svg-sprite-loader就行了，但是svg也是图片的一种，
    // 所以file-loader也会对其进行处理，所以就会冲突，解决的办法
    // 就是，在项目中新建一个文件icons，使用file-loader编译svg
    // 的时候不编译icons里面的图标
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.join(srcPath, 'icons/svgs'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  },
  configureWebpack: {
    output: {
      // 配合路由懒加载，实现路由文件的命名
      chunkFilename: 'chunks/[name]-[chunkhash:8].js',
    },
    resolve: {
      alias: {
        '@': srcPath,
      },
    },
  },
}
