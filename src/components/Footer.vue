<template>
  <a-layout-footer>
    <a-row class="footer" align="middle">
      <a-col :span="8"><a :href="license.href" :target="license.target">{{ license.description }}</a></a-col>
      <a-col :span="8"><span v-html="copyright"/></a-col>
      <a-col :span="8"><a :href="icp.href" :target="icp.target">{{ icp.id }}</a></a-col>
    </a-row>
  </a-layout-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      license: {
        description: this.$store.state.license.description,
        href: this.$store.state.license.href,
        target: '_blank'
      },
      copyright: this.$store.state.copyright,
      icp: {
        id: this.$store.state.icp.id,
        href: this.$store.state.icp.href,
        target: '_blank'
      }
    }
  }
}
</script>

<style scoped>
.ant-layout-footer {
  text-align: center;
  background: #fbfbfb;
  height: 20px;
  padding: 15px;
  line-height: 0;
  color: black;
}

.ant-layout-footer a {
  text-align: center;
  color: black;
}
</style>
