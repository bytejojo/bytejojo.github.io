<template>
  <div>

    <a-drawer placement="left" v-model="showDrawer">
      <Divider>关于我</Divider>
      <p>中文名：郝晓龙(HAOXIAOLONG)</p><br/>
      <p>英文名：Lucas</p><br/>
      <Poptip trigger="hover">
        <Button icon="logo-github" to="https://github.com/happyzero/happyzero.github.io" target="_blank">Star</Button>
        <div slot="content">关注 GitHub</div>
      </Poptip>
      <Divider>QQ</Divider>
      <vue-qr :logoSrc="qq.qrLogo" :text="qq.qrText" :dotScale="qq.qrDotScale" :logoScale="78" :size="200"></vue-qr>
      <Divider>微信</Divider>
      <vue-qr :logoSrc="wechat.qrLogo" :text="wechat.qrText" :dotScale="wechat.qrDotScale" :logoScale="78"
              :size="200"></vue-qr>
    </a-drawer>

    <a-row>
      <e-chart :options="chartOptions" class="chart"/>
    </a-row>

    <a-row>
      <e-chart :options="lesMiserablesOptions" class="chart"/>
    </a-row>
  </div>
</template>

<script>
import VueQr from 'vue-qr';

export default {
  name: 'Introduction',
  components: {VueQr},
  data() {
    return {
      author: '郝晓龙',
      isCollapsed: false,
      showDrawer: false,
      wechat: {
        qrDotScale: 1,
        qrLogo: require('../assets/wechat.png'),
        qrText: 'https://u.wechat.com/EOIS45usvecafQqXT3ZMFZs'
      },
      qq: {
        qrDotScale: 1,
        qrLogo: require('../assets/qq.png'),
        qrText: 'https://qm.qq.com/cgi-bin/qm/qr?k=pLC-xeIOnIdvFhbBfmW14w_mCCNhSg93'
      }
    }
  },
  methods: {
    clickAvatar: function () {
      console.log("click clickAvatar:" + this.showDrawer);
      this.showDrawer = !this.showDrawer;
    },
    clickMenuButton: function () {
      this.isCollapsed = !this.isCollapsed;
    }
  },
  watch: {
    '$route'() {
      this.activeName = this.$route.path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
