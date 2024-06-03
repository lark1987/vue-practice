<script setup lang="ts">
import { Chart } from 'highcharts-vue'

const barChartOptions: any = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Annual Expenditure'
  },
  subtitle: {
    text: 'this is subtitle'
  },
  xAxis: {
    categories: ['2022', '2023', '2024'],
    crosshair: true
  },
  yAxis: {
    min: 0
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>${point.y:1f}</b></td></tr>',
    footerFormat: '</table>' + '<div>嗨嗨</div>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [
    {
      name: 'Rent',
      data: [72000, 96000, 120000]
    },
    {
      name: 'Food',
      data: [48000, 72000, 108000]
    },
    {
      name: 'Entertainment ',
      data: [80000, 50000, 30000]
    }
  ]
}
</script>

<template>
  <div class="box">
    <Chart :options="barChartOptions"></Chart>
  </div>
</template>

<style scoped>
.box {
  width: 90vw;
}
</style>
