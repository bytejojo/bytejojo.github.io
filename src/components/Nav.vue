<template>
  <Header>
    <Row>
      <iCol span="2">
        <div @click="clickAvatar()">
          <Avatar style="background-color: #87d068" icon="ios-person"/>
          {{author}}
        </div>
      </iCol>
      <iCol span="12" offset="10">
        <Menu mode="horizontal" theme="light" width="auto" :active-name="activeName">
          <MenuItem v-for="(item, index) in menuItems" :key="index" :name="item.name" :to="item.to">
            <Icon v-bind:type="item.ico"></Icon>
            {{item.desc}}
          </MenuItem>
        </Menu>
      </iCol>
    </Row>
    <Drawer placement="left" v-model="showDrawer">
      <Divider>关于我</Divider>
      <p>中文名：郝晓龙(HAOXIAOLONG)</p><br/>
      <p>英文名：Lucas</p><br/>
      <p>GitHub: https://github.com/happyzero</p><br/>
      <p>WebSite: https://haoxiaolong.cn</p><br/>
      <Divider>社区</Divider>
    </Drawer>
  </Header>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        author: 'Lucas',
        isCollapsed: false,
        showCollapsedMenu: false,
        activeName: this.$route.path,
        menuItems: [
          {ico: 'md-home', desc: '首页', name: '/', to: '/'},
          {ico: 'md-person', desc: '关于我', name: '/about', to: '/about'},
          {ico: 'md-book', desc: '学无止境', name: '/learn', to: '/about'},
          {ico: 'md-create', desc: '留言', name: '/message', to: '/about'},
          {ico: 'md-stats', desc: '网站统计', name: '/pv', to: '/pv'}
        ],
        showDrawer: false
      }
    },
    methods: {
      clickAvatar: function () {
        console.log("click clickAvatar:" + this.showDrawer);
        this.showDrawer = !this.showDrawer;
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
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
