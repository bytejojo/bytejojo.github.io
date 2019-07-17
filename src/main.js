import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from './iview'
import Util from './lib/util'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iview.LoadingBar.start();
  Util.title(to.meta.title);
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

