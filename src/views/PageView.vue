<template>
  <iframe :src="pvUrl" frameborder="0" class="pvFrame"></iframe>
</template>
<script>
export default {
  name: 'PageView',
  data() {
    return {
      pvUrl: 'https://tongji.baidu.com/web/welcome/ico?s=09e92fd6115b060dd0d8aea851bd7d38'
    }
  }
}
</script>

<style scoped>
 .pvFrame {
   height: 1000px;
   width: 100%;
 }
</style>
