<template>
  <div class="about">
    <e-chart :options="chartOptions" class="chart"/>
    <div>

    </div>
  </div>
</template>
<script>
  import EChart from "@/components/ECharts";

  export default {
    name: 'About',
    components: {EChart},
    data() {
      return {
        loading: false
      }
    },
    computed: {
      chartOptions: function () {
        return {
          title: {
            text: '家庭地位'
          },
          tooltip: {},
          legend: {
            data: ['地位']
          },
          xAxis: {
            data: ["老婆", "果果(娃)", "其它...", "我"]
          },
          yAxis: {},
          series: [{
            name: '地位',
            type: 'bar',
            data: [1000, 500, 50, -99]
          }]
        }
      }
    }
  }
</script>

<style scoped>
  .chart {
    height: 1000px;
    width: auto;
  }
</style>
