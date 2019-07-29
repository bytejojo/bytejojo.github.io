<template>
  <Header>
    <Menu mode="horizontal" theme="light" width="auto" :active-name="$route.path">
      <Row>
        <iCol :xl="{span:2, offset:1}" :lg="{span:2, offset:1}" :md="{span:6, offset:1}" :xs="{span:11,offset:1}">
          <div @click="clickAvatar()">
            <Avatar style="background-color: #87d068" icon="ios-person"/>
            {{author}}
          </div>
        </iCol>
        <iCol :xl="{span:11, offset:10}" :lg="{span:14, offset:7}" :md="{span:17, offset:0}" :xs="{span:0}">
          <MenuItem v-for="(item, index) in menuItems" :key="index" :name="item.name" :to="item.to">
            <Icon v-bind:type="item.ico"></Icon>
            {{item.desc}}
          </MenuItem>
        </iCol>
        <iCol :xs="{span:1, offset:9}" :md="{span:0,offset:0}">
          <Button size="large" icon="ios-menu" type="primary" shape="circle" @click="clickMenuButton"></Button>
        </iCol>
      </Row>
    </Menu>

    <Menu theme="light" width="100%" :active-name="$route.path" v-if="isCollapsed" @on-select="clickMenuButton">
      <Row>
        <iCol :md="{span:0}" :xs="{span:24}">
          <MenuItem v-for="(item, index) in menuItems" :key="index" :name="item.name" :to="item.to">
            <Icon v-bind:type="item.ico"></Icon>
            {{item.desc}}
          </MenuItem>
        </iCol>
      </Row>
    </Menu>

    <Drawer placement="left" v-model="showDrawer" width="450px">
      <Divider>关于我</Divider>
      <p>中文名：郝晓龙(HAOXIAOLONG)</p><br/>
      <p>英文名：Lucas</p><br/>
      <p>GitHub: https://github.com/happyzero</p><br/>
      <Poptip trigger="hover">
        <Button icon="logo-github" to="https://github.com/happyzero/happyzero.github.io" target="_blank">Star</Button>
        <div slot="content">关注 GitHub</div>
      </Poptip>
      <Divider>关注</Divider>
      <vue-qr :logoSrc="qq.qrLogo" :text="qq.qrText" :logoScale="78" :size="200"></vue-qr>
      <vue-qr :logoSrc="wechat.qrLogo" :text="wechat.qrText" :logoScale="78" :size="200"></vue-qr>
      <Divider>其它</Divider>
    </Drawer>
  </Header>
</template>

<script>
  import VueQr from 'vue-qr';

  export default {
    name: 'Navigation',
    components: {VueQr},
    data() {
      return {
        author: 'Lucas',
        isCollapsed: false,
        menuItems: [
          {ico: 'md-home', desc: '首页', name: '/', to: '/'},
          {ico: 'md-person', desc: '关于我', name: '/about', to: '/about'},
          {ico: 'md-book', desc: '学无止境', name: '/learn', to: '/learn'},
          {ico: 'md-create', desc: '留言', name: '/bbs', to: '/bbs'},
          {ico: 'md-stats', desc: '网站统计', name: '/statistic', to: '/statistic'}
        ],
        showDrawer: false,
        wechat: {
          qrLogo: require('../assets/wechat.png'),
          qrText: 'https://u.wechat.com/EOIS45usvecafQqXT3ZMFZs'
        },
        qq: {
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

<style scoped>
</style>
