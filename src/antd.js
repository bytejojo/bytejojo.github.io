import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';

Vue.use(Antd)

Vue.prototype.$message = Antd.message;

export default Antd
