<script setup>
// import * as echarts from 'echarts'
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
import VChart from 'vue-echarts'
import { ref, onMounted } from 'vue'
import themeLight from './theme-light.json'
import themeDark from './theme-dark.json'
import taiwanGeoJson from './taiwan-map-geo.json'

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
registerMap('taiwan', taiwanGeoJson)

const currentTheme = ref('themeLight')

const data = [
  {
    Year: '2022',
    Rent: 72000,
    Food: 48000,
    Play: 80000,
    Surplus: 50000
  },
  {
    Year: '2023',
    Rent: 96000,
    Food: 72000,
    Play: 50000,
    Surplus: 80000
  },
  {
    Year: '2024',
    Rent: 120000,
    Food: 108000,
    Play: 30000,
    Surplus: 30000
  }
]

const mapData = [
  { name: '連江縣', value: 100 },
  { name: '宜蘭縣', value: 100 },
  { name: '彰仁縣', value: 100 },
  { name: '南投縣', value: 100 },
  { name: '雲林縣', value: 100 },
  { name: '基隆市', value: 100 },
  { name: '臺北市', value: 100 },
  { name: '新北市', value: 100 },
  { name: '臺中市', value: 100 },
  { name: '臺南市', value: 100 },
  { name: '桃園市', value: 100 },
  { name: '苗栗縣', value: 100 },
  { name: '嘉義市', value: 100 },
  { name: '嘉義縣', value: 100 },
  { name: '金門縣', value: 100 },
  { name: '高雄市', value: 100 },
  { name: '臺東縣', value: 100 },
  { name: '花蓮縣', value: 100 },
  { name: '澎湖縣', value: 100 },
  { name: '新竹市', value: 100 },
  { name: '新竹縣', value: 100 },
  { name: '屏東縣', value: 100 }
]

function calBarChartSource(data) {
  const header = ['Year', 'Rent', 'Food', 'Play', 'Surplus']
  const barChartSource = data.map((item) => [
    item.Year,
    item.Rent / 1000,
    item.Food / 1000,
    item.Play / 1000,
    item.Surplus / 1000
  ])
  barChartSource.unshift(header)

  return barChartSource
}
const barChartSource = calBarChartSource(data)

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
  ]
})

const mapOption = ref({
  title: {
    text: '台灣行政區人口數量'
  },
  // tooltip: {
  //   show: true,
  //   trigger: 'item'
  // },
  series: [
    {
      type: 'map',
      map: 'taiwan',
      layoutCenter: ['40%', '50%'],
      layoutSize: 270,
      roam: true,
      label: {
        show: true,
        color: '#ffffff',
        fontSize: 10
      }
      // emphasis: {
      //   label: {
      //     show: true
      //   }
      // },
      // data: mapData
    }
  ]
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
    <v-chart class="barChart" :option="barChartOption" :theme="currentTheme" autoresize />
    <v-chart class="pieChart" :option="pieChartOption" theme="themeLight" autoresize />
    <v-chart class="mapChart" :option="mapOption" autoresize />
  </div>
</template>

<style scoped>
.bigbox {
  width: 100vw;
  overflow-x: hidden;
}
.barChart {
  width: 90%;
  height: 360px;
  margin: 0 auto;
  @media screen and (min-width: 800px) {
    width: 50%;
  }
}
.pieChart {
  width: 90%;
  height: 180px;
  margin: 0 auto;
  @media screen and (min-width: 800px) {
    width: 40%;
  }
  @media screen and (min-width: 2000px) {
    width: 20%;
  }
}

.mapChart {
  /* background-color: rgb(209, 158, 158); */
  width: 400px;
  height: 400px;
  margin: 50px auto;
}
</style>
