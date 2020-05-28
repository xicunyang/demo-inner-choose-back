const {NODE_ENV, VUE_APP_SENTRY_ENABLED} = process.env
const PROD = NODE_ENV === 'production'
const plugins = []

module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
}
