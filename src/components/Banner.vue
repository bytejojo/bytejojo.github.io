<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    bannerInfo() {
      this.$message.info(
        '欢迎！欢迎！热烈欢迎！！！'
      )
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bannerInfo();
    })
  }
}
</script>

<style scoped>
.content {
  font-size: 16px;
  text-align: left;
}
</style>
