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
      'iview': 'iview',
      'echarts': 'echarts',
      'crypto-js': 'CryptoJS'
    }
  },
  css: {
    loaderOptions: {// 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}
