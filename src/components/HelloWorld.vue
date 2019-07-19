<template>
  <div>
    <Row>
      <e-chart :options="chartOptions" class="chart"/>
    </Row>

    <Row>
      <e-chart :options="lesMiserablesOptions" class="chart"/>
    </Row>
  </div>
</template>

<script>
  import EChart from "@/components/ECharts";
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    components: {EChart},
    data() {
      return {
        lesMiserablesData: '',
        info: [{
          name: 'Grandpa',
          children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
              name: 'Cousin Jack',
              value: 2
            }, {
              name: 'Cousin Mary',
              value: 5,
              children: [{
                name: 'Jackson',
                value: 2
              }]
            }, {
              name: 'Cousin Ben',
              value: 4
            }]
          }, {
            name: 'Aunt Jane',
            children: [{
              name: 'Cousin Kate',
              value: 4
            }]
          }, {
            name: 'Father',
            value: 10,
            children: [{
              name: 'Me',
              value: 5,
              itemStyle: {
                color: 'red'
              }
            }, {
              name: 'Brother Peter',
              value: 1
            }]
          }]
        }, {
          name: 'Mike',
          children: [{
            name: 'Uncle Dan',
            children: [{
              name: 'Cousin Lucy',
              value: 3
            }, {
              name: 'Cousin Luck',
              value: 4,
              children: [{
                name: 'Nephew',
                value: 2
              }]
            }]
          }]
        }, {
          name: 'Nancy',
          children: [{
            name: 'Uncle Nike',
            children: [{
              name: 'Cousin Betty',
              value: 1
            }, {
              name: 'Cousin Jenny',
              value: 2
            }]
          }]
        }]
      }
    },
    computed: {
      chartOptions: function () {
        return {
          visualMap: {
            type: 'continuous',
            min: 0,
            max: 10,
            inRange: {
              color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
            }
          },
          series: {
            type: 'sunburst',
            data: this.info,
            radius: [0, '90%'],
            label: {
              rotate: 'radial'
            }
          }
        }
      },
      lesMiserablesOptions: function () {
        return {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: this.lesMiserablesData,
              top: '18%',
              bottom: '14%',
              layout: 'radial',
              symbol: 'emptyCircle',
              symbolSize: 7,
              initialTreeDepth: 3,
              animationDurationUpdate: 750

            }
          ]
        }
      }
    },
    methods: {
      loadLesMiserables: function () {
        this.lesMiserablesData = '';
        let vm = this;
        axios.get('https://www.echartsjs.com/data/asset/data/flare.json')
          .then(function (response) {
            vm.lesMiserablesData = response.data
          }).catch(function (error) {
          vm.lesMiserablesData = '' + error
        });
      }
    },
    mounted: function () {
      this.loadLesMiserables();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .chart {
    height: 400px;
    width: 100%;
  }
</style>
