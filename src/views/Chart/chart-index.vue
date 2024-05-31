<script setup lang="ts">
// import { Chart } from 'highcharts-vue'

const chartOptions = {
  series: [
    {
      data: [1, 2, 3] // sample data
    }
  ]
}
</script>

<template>
  <div>好喔，重新來過</div>
  <div class="box">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<style scoped>
.box {
  width: 90vw;
}
</style>
