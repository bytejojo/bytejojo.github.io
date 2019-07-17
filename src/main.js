import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from './iview'
import Util from './lib/util'

Vue.config.productionTip = false

const _hmt = _hmt || [];
setTimeout(() => {
  (() => {
    const hm = document.createElement('script');
    hm.src = "https://hm.baidu.com/hm.js?308c2a1201455d8a0e28c5b83d29f0c3";
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  })();
},50);

router.beforeEach((to, from, next) => {
  iview.LoadingBar.start();
  Util.title(to.meta.title);
  if (to.path) {
    _hmt.push(['_trackPageview', '/#' + to.fullPath]);
  }
  next();
})

router.afterEach(() => {
  iview.LoadingBar.finish();
  window.scrollTo(0, 0);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

