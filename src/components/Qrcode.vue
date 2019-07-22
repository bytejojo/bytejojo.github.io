<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Qrcode',
  data () {
    return {
      msg: 'message'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.chart=echarts.init(this.$refs.echartRef);
      this.chart.setOption(this.options);
      window.addEventListener('resize',function() {this.chart.resize()});
    })
  }
}
</script>

<style scoped>

</style>
