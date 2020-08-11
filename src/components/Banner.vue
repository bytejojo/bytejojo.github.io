<template>
  <Alert banner type="warning" show-icon closable>
    <h3>{{title}}</h3>
    <Icon type="ios-bulb-outline" slot="icon"></Icon>
    <span slot="desc" v-html="content" class="content"></span>
  </Alert>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      title: '公告',
      content: '注意: 第一次发公告，有点紧张，不知道公告点啥，就乱写了。<br/>欢迎访问我的网站：<a href="https://www.haomuyang.com">https://www.haomuyang.com</a>'
    }
  }
}
</script>

<style scoped>
  .content {
    font-size: 16px;
    text-align: left;
  }
</style>
