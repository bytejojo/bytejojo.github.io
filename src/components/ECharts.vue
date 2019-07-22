<template>
  <div ref="echartRef">
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'e-chart',
    props : {
      options: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.chart=echarts.init(this.$refs.echartRef);
        this.chart.setOption(this.options);
        window.addEventListener('resize',function() {this.chart.resize()});
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    }
  }
</script>
