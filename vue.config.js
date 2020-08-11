// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  indexPath: '../index.html',
  productionSourceMap: false,
  //options
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'view-design': 'view-design',
      'echarts': 'echarts',
      'crypto-js': 'CryptoJS'
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}
