<template>
  <div class="about">
    <e-chart :options="chartOptions" class="chart"/>
    <div>
      <vue-qr :logoSrc="qq.qrLogo" :text="qq.qrText" :logoScale="78" :size="200"></vue-qr>
      <vue-qr :logoSrc="wechat.qrLogo" :text="wechat.qrText" :logoScale="78" :size="200"></vue-qr>
    </div>
  </div>
</template>
<script>
  import EChart from "@/components/ECharts";
  import VueQr from 'vue-qr';

  export default {
    name: 'About',
    components: {EChart,VueQr},
    data() {
      return {
        wechat: {
          qrLogo: require('../assets/wechat.png'),
          qrText: 'https://u.wechat.com/EOIS45usvecafQqXT3ZMFZs'
        },
        qq: {
          qrLogo: require('../assets/qq.png'),
          qrText: 'https://qm.qq.com/cgi-bin/qm/qr?k=pLC-xeIOnIdvFhbBfmW14w_mCCNhSg93'
        }
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
