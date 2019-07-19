<template>
  <div class="about">
    <h1>This is an about page1</h1>
    <e-chart :options="chartOptions" class="chart">123</e-chart>
  </div>
</template>
<script>
  import EChart from "@/components/ECharts";

  export default {
    name: 'Aibbon',
    components: {EChart},
    computed: {
      chartOptions: function () {
        return {
          title: {
            text: '我家地位分布图'
          },
          tooltip: {},
          legend: {
            data:['地位']
          },
          xAxis: {
            data: ["老婆","果果(娃)","家居用品","其它...","我"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [1000, 500, 50, 30, -99]
          }]
        }
      }
    }
  }
</script>

<style scoped>
 .chart {
   height: 300px;
   width: auto;
 }
</style>
