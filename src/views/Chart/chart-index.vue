<script setup>
// import * as echarts from 'echarts'
import { use } from 'echarts/core'
import { PieChart, BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, onMounted } from 'vue'

use([
  PieChart,
  BarChart,
  LineChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  CanvasRenderer,
  UniversalTransition
])

// 這裡還不懂
// provide(THEME_KEY, 'dark')

const data = [
  {
    Year: '2022',
    Rent: 72000,
    Food: 48000,
    Play: 80000,
    Surplus: 50000,
    Total: 72000 + 48000 + 80000
  },
  {
    Year: '2023',
    Rent: 96000,
    Food: 72000,
    Play: 50000,
    Surplus: 80000,
    Total: 96000 + 72000 + 50000
  },
  {
    Year: '2024',
    Rent: 120000,
    Food: 108000,
    Play: 30000,
    Surplus: 30000,
    Total: 120000 + 108000 + 30000
  }
]

const barChartOption = ref({
  dataset: [
    {
      source: [
        ['Year', 'Rent', 'Food', 'Play', 'Surplus'],
        ['2022', 72000 / 1000, 48000 / 1000, 80000 / 1000, 50000 / 1000],
        ['2023', 96000 / 1000, 72000 / 1000, 50000 / 1000, 80000 / 1000],
        ['2024', 120000 / 1000, 108000 / 1000, 30000 / 1000, 30000 / 1000]
      ]
    }
  ],
  series: [
    { type: 'bar' },
    { type: 'bar' },
    { type: 'bar' },
    { type: 'line' },

    {
      type: 'bar',
      seriesLayoutBy: 'row',
      xAxisIndex: 1,
      yAxisIndex: 1,
      color: '#c7c7c7'
    },
    { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 1, yAxisIndex: 1, color: '#a19c9c' },
    { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 1, yAxisIndex: 1, color: '#787575' }
  ],
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 }
  ],
  yAxis: [
    {
      gridIndex: 0,
      axisLabel: {
        margin: 15
      }
    },
    {
      gridIndex: 1,
      axisLabel: {
        margin: 15
      }
    }
  ],

  grid: [
    { bottom: '55%', left: '15%' },
    { top: '55%', left: '15%' }
  ],

  title: {
    text: 'Annual Expenditure',
    left: 0,
    subtext: '單位(千元)'
  },

  legend: {
    bottom: 0,
    left: 'center',
    itemWidth: 30
  },
  tooltip: {
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  }
})
const pieChartOption = ref({
  dataset: [
    {
      source: [
        ['Item', 'Expend', 'Year'],
        ['Rent', 72000 / 200000, 2022],
        ['Food', 48000 / 200000, 2022],
        ['Play', 80000 / 200000, 2022],
        ['Rent', 96000 / 218000, 2023],
        ['Food', 72000 / 218000, 2023],
        ['Play', 50000 / 218000, 2023],
        ['Rent', 120000 / 258000, 2024],
        ['Food', 108000 / 258000, 2024],
        ['Play', 30000 / 258000, 2024]
      ]
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2022 }
      }
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2023 }
      }
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2024 }
      }
    }
  ],
  series: [
    {
      name: '嗨嗨',
      type: 'pie',
      radius: [20, 40],
      center: ['20%', '50%'],
      datasetIndex: 1,
      label: {
        position: 'inside',
        formatter: function (params) {
          return params.value[1].toFixed(2) * 100 + '%'
        }
      }
    },
    {
      type: 'pie',
      radius: [20, 40],
      center: ['50%', '50%'],
      datasetIndex: 2,
      label: {
        position: 'inside',
        formatter: function (params) {
          return params.value[1].toFixed(2) * 100 + '%'
        }
      }
    },
    {
      type: 'pie',
      radius: [20, 40],
      center: ['80%', '50%'],
      datasetIndex: 3,
      label: {
        position: 'inside',
        formatter: function (params) {
          return params.value[1].toFixed(2) * 100 + '%'
        }
      }
    }
  ],
  graphic: {
    type: 'text',
    left: 'center',
    top: 'center',
    style: {
      text: '嗨嗨',
      textAlign: 'center',
      fill: '#000',
      fontSize: 20,
      fontWeight: 'bold'
    }
  }
})

function handleResize() {
  barChartOption.value.title.left = window.innerWidth > 800 ? 'center' : 0
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
</script>

<template>
  <div class="bigbox">
    <v-chart class="barChart" :option="barChartOption" autoresize />
    <v-chart class="pieChart" :option="pieChartOption" autoresize />
  </div>
</template>

<style scoped>
.bigbox {
  width: 100vw;
  overflow-x: hidden;
}
.barChart {
  width: 90%;
  height: 100vw;
  margin: 0 auto;
  @media screen and (min-width: 800px) {
    width: 50%;
    height: 50vw;
  }
}
.pieChart {
  width: 90%;
  height: 50vw;
  margin: 0 auto;
}
</style>
