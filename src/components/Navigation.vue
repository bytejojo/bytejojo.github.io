<template>
  <a-layout-header theme="light" class="header">
    <a-menu mode="horizontal" theme="light" class="menu">
        <a-menu-item v-for="(item, index) in menuItems" :key="item.to" :index="item.to">
          <route-link :to="item.to"><a-icon :type="item.ico"></a-icon>{{ item.name }}</route-link>
        </a-menu-item>
    </a-menu>
    <Button size="large" icon="ios-menu" type="primary" shape="circle" @click="clickMenuButton"></Button>
  </a-layout-header>
</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      author: '郝晓龙',
      menuItems: [
        {ico: 'md-home', name: '首页', to: '/'},
        {ico: 'md-person', name: '关于我', to: '/about'},
        {ico: 'md-book', name: '学无止境', to: '/learn'},
        {ico: 'md-create', name: '留言', to: '/bbs'},
        {ico: 'md-stats', name: '网站统计', to: '/statistic'}
      ]
    }
  }
}
</script>

<style scoped>
.header{
  padding: 0;
  position: fixed;
  z-index: 1;
  width: 100%;
}
.menu {
  height: 100%;
  width: 100%;
}
</style>
