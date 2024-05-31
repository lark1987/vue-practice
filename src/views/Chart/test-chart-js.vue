<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { Bar, Doughnut } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const barData: any = {
  labels: ['2022', '2023', '2024'],
  datasets: [
    {
      label: 'Surplus',
      data: [50000, 80000, 30000],
      backgroundColor: '#111211',
      type: 'line',
      borderDash: [5, 5]
    },
    {
      label: 'Rent',
      data: [72000, 96000, 120000],
      backgroundColor: '#ACC5C7'
    },
    {
      label: 'Food',
      data: [48000, 72000, 108000],
      backgroundColor: '#FAE8AE'
    },
    {
      label: 'Entertainment ',
      data: [80000, 50000, 30000],
      backgroundColor: '#C77565'
    }
  ]
}
const barOptions: any = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Annual Expenditure'
    }
  }
}

const circleData: any = {
  labels: ['Youtube', 'Music', 'HangOut', 'Read', 'Create'],
  datasets: [
    {
      data: [30, 20, 10, 10, 10],
      backgroundColor: ['#BF7A94', '#D9B0BF', '#F0F0F2', '#CEDEF2', '#a7bedb'],
      rotation: 30,
      hoverOffset: 4
    }
  ]
}
const circleOption: any = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Entertainment',
      padding: 20
    }
  }
}
</script>

<template>
  <div class="box">
    <Bar :data="barData" :options="barOptions" />
  </div>
  <div class="box">
    <Doughnut :data="circleData" :options="circleOption" />
  </div>
</template>

<style scoped>
.box {
  width: 90vw;
  padding-bottom: 50px;
}
</style>
