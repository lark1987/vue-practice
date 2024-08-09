<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import themeLight from './theme-light.json'
import themeDark from './theme-dark.json'
import taiwanGeoJson from './taiwan-map-geo.json'
import { barChartSource } from './data-bar'
import mapData from './data-map'

import VChart from 'vue-echarts'
import { registerTheme, registerMap, use } from 'echarts/core'

import { PieChart, BarChart, LineChart, MapChart } from 'echarts/charts'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
  GraphicComponent,
  VisualMapComponent,
  GeoComponent
} from 'echarts/components'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

use([
  PieChart,
  BarChart,
  LineChart,
  MapChart,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  GraphicComponent,
  VisualMapComponent,
  GeoComponent,
  CanvasRenderer,
  UniversalTransition
])

registerTheme('themeLight', themeLight)
registerTheme('themeDark', themeDark)
registerMap('taiwan', taiwanGeoJson as any)

const currentTheme = ref('themeLight')

const mapItem: any = ref(null)

const barChartOption = ref({
  dataset: {
    source: barChartSource
  },
  series: [
    { type: 'bar' },
    { type: 'bar' },
    { type: 'bar' },
    { type: 'line' },

    { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 1, yAxisIndex: 1, color: '#c7c7c7' },
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
    left: window.innerWidth > 800 ? 'center' : 0,
    subtext: '單位：千元'
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
      myThemeSwitcher: {
        show: true,
        title: 'Dark Mode',
        icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        onclick: function () {
          currentTheme.value = currentTheme.value === 'themeLight' ? 'themeDark' : 'themeLight'
        }
      },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line'] },
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
        ['Rent', 72 / 200, 2022],
        ['Food', 48 / 200, 2022],
        ['Play', 80 / 200, 2022],
        ['Rent', 96 / 218, 2023],
        ['Food', 72 / 218, 2023],
        ['Play', 50 / 218, 2023],
        ['Rent', 120 / 258, 2024],
        ['Food', 108 / 258, 2024],
        ['Play', 30 / 258, 2024]
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
      type: 'pie',
      radius: [20, 40],
      center: ['20%', '50%'],
      datasetIndex: 1,
      label: {
        position: 'inside',
        formatter: function (params: any) {
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
        formatter: function (params: any) {
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
        formatter: function (params: any) {
          return params.value[1].toFixed(2) * 100 + '%'
        }
      }
    }
  ],
  graphic: [
    {
      type: 'text',
      left: '15%',
      bottom: 0,
      style: {
        text: '2022',
        textAlign: 'center',
        fill: '#000',
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    {
      type: 'text',
      left: ' 45%',
      bottom: 0,
      style: {
        text: '2023',
        textAlign: 'center',
        fill: '#000',
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    {
      type: 'text',
      left: ' 75%',
      bottom: 0,
      style: {
        text: '2024',
        textAlign: 'center',
        fill: '#000',
        fontSize: 20,
        fontWeight: 'bold'
      }
    }
  ],
  tooltip: {
    formatter: '{b}'
  }
})
const mapChartOption = ref({
  title: {
    text: '台灣行政區人口數量',
    subtext: '單位：萬人',
    left: 'center'
  },
  tooltip: {
    show: true,
    trigger: 'item',
    formatter: '{b}<br/>{c}萬人'
  },
  series: {
    type: 'map',
    map: 'taiwan',
    emphasis: {
      label: {
        color: 'black'
      },
      itemStyle: {
        areaColor: '#d19e9e'
      }
    },
    left: 10,
    top: window.innerWidth > 1200 ? 850 : 440,
    zoom: 5,
    data: mapData
  },
  visualMap: {
    min: 0,
    max: 410,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['#F6EDD3', '#CCD9CE', '#9AC0BA', '#5B9496']
    }
  }
})

function handleResize() {
  barChartOption.value.title.left = window.innerWidth > 800 ? 'center' : 0
  mapChartOption.value.series.top = window.innerWidth > 1200 ? 850 : 440
  mapItem.value.resize()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="pb-[50px] xl:flex xl:justify-center">
    <div class="w-full pt-[50px] xl:w-[50%]">
      <v-chart
        class="mx-[auto] my-0 h-[360px] w-[90%]"
        :option="barChartOption"
        :theme="currentTheme"
        autoresize
      />
      <v-chart
        class="mx-[auto] my-0 h-[180px] w-[90%] sm:w-[50%] 2xl:w-[40%]"
        :option="pieChartOption"
        theme="themeLight"
        autoresize
      />
    </div>
    <div>
      <v-chart
        class="mx-[auto] my-[50px] h-[300px] w-[300px] xl:mx-0 xl:h-[600px] xl:w-[600px]"
        ref="mapItem"
        :option="mapChartOption"
        autoresize
      />
    </div>
  </div>
</template>

<style scoped></style>
