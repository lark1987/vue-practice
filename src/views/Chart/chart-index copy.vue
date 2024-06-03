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
import { ref, provide } from 'vue'

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

const barChartOption = ref({
  dataset: [
    {
      source: [
        ['Year', 'Rent', 'Food', 'Entertainment', 'Surplus'],
        ['2022', 72000, 48000, 80000, 50000],
        ['2023', 96000, 72000, 50000, 80000],
        ['2024', 120000, 108000, 30000, 30000]
      ]
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2022 }
      }
    }
  ],
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'line' }],

  xAxis: [
    {
      type: 'category',
      data: ['2022', '2023', '2024'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '${value}'
      }
    }
  ],
  title: {
    text: 'Annual Expenditure',
    left: 'center'
  },
  legend: {
    data: ['Rent', 'Food', 'Entertainment', 'Surplus'],
    bottom: '0px'
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
  title: {
    text: 'Traffic Sources',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

const test = ref({
  dataset: [
    {
      source: [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Cake', 123, 32, 2011],
        ['Cereal', 231, 14, 2011],
        ['Tofu', 235, 5, 2011],
        ['Dumpling', 341, 25, 2011],
        ['Biscuit', 122, 29, 2011],
        ['Cake', 143, 30, 2012],
        ['Cereal', 201, 19, 2012],
        ['Tofu', 255, 7, 2012],
        ['Dumpling', 241, 27, 2012],
        ['Biscuit', 102, 34, 2012],
        ['Cake', 153, 28, 2013],
        ['Cereal', 181, 21, 2013],
        ['Tofu', 395, 4, 2013],
        ['Dumpling', 281, 31, 2013],
        ['Biscuit', 92, 39, 2013],
        ['Cake', 223, 29, 2014],
        ['Cereal', 211, 17, 2014],
        ['Tofu', 345, 3, 2014],
        ['Dumpling', 211, 35, 2014],
        ['Biscuit', 72, 24, 2014]
      ]
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2011 }
      }
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2012 }
      }
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2013 }
      }
    }
  ],
  series: [
    {
      type: 'pie',
      radius: 50,
      center: ['25%', '50%'],
      datasetIndex: 1
    },
    {
      type: 'pie',
      radius: 50,
      center: ['50%', '50%'],
      datasetIndex: 2
    },
    {
      type: 'pie',
      radius: 50,
      center: ['75%', '50%'],
      datasetIndex: 3
    }
  ]
})
</script>

<template>
  <v-chart class="barChart" :option="barChartOption" autoresize />
  <v-chart class="pieChart" :option="pieChartOption" autoresize />
  <v-chart class="pieChart" :option="test" autoresize />
</template>

<style scoped>
.barChart {
  width: 90vw;
  height: 50vh;
  margin-bottom: 100px;
}
.pieChart {
  width: 90vw;
  height: 50vh;
}
</style>
