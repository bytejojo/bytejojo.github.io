import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    license: {
      description: '遵循 MIT 开源协议',
      href: 'https://opensource.org/licenses/MIT'
    },
    copyright: 'Copyright &copy; 2020 HaoXiaolong',
    icp: {
      id: '京ICP备2020042717号',
      href: 'http://beian.miit.gov.cn'
    }
  },
  mutations: {

  },
  actions: {

  }
})
