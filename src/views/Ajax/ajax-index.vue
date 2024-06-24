<script setup lang="ts">
import axios from 'axios'
import { nextTick, onMounted, ref, type Ref } from 'vue'
import buttonTest from './ajax-button.vue'

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY

const url = {
  trendingMovie: 'https://api.themoviedb.org/3/trending/movie/day',
  trendingTV: 'https://api.themoviedb.org/3/trending/tv/day'
}

const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: tmdbApiKey
  }
}

let data: Ref<any> = ref()

let isLoading = ref(true)

type UrlKeys = keyof typeof url

function getData(category: UrlKeys) {
  axios(url[category], apiOptions)
    .then((res) => {
      sessionStorage.setItem(category, JSON.stringify(res.data.results))
      getSessionData(category)
    })
    .catch((err) => {
      console.log(err)
    })
}
async function getSessionData(category: UrlKeys) {
  isLoading.value = true
  await nextTick()
  const dataString = sessionStorage.getItem(category)
  if (dataString !== null) {
    data.value = JSON.parse(dataString)
    isLoading.value = false
  } else {
    getData(category)
  }
}

onMounted(() => {
  getSessionData('trendingMovie')
})
</script>

<template>
  <div class="mx-auto w-[90%] p-2">
    <buttonTest @click="getSessionData('trendingMovie')">Movie</buttonTest>
    <buttonTest @click="getSessionData('trendingTV')">Drama</buttonTest>
  </div>
  <div
    v-if="isLoading"
    class="animate-loadingDot mx-auto my-20 w-fit font-mono text-[30px] [clip-path:inset(0_3ch_0_0)]"
  >
    Loading...
  </div>
  <div v-else class="mx-auto grid w-[90%] grid-cols-3 gap-1 xl:grid-cols-4 xl:gap-2.5">
    <div v-for="(item, index) in data" :key="index">
      <a
        :href="`https://www.google.com/search?q=${item.title ? item.title : item.name}`"
        target="_blank"
        class="group relative block aspect-[71/98] w-full object-cover"
      >
        <img
          :src="'https://image.tmdb.org/t/p/original' + item.poster_path"
          :alt="item.title"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute top-0 aspect-[71/98] w-full bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
        ></div>
        <div
          class="absolute bottom-0 px-[10%] text-sm font-semibold text-white opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[10%] group-hover:opacity-100 lg:text-2xl 2xl:text-4xl"
        >
          <span>{{ item.title ? '電影名稱：' + item.title : '劇集名稱：' + item.name }}</span
          ><br />
          <span>{{
            item.title ? '上映日期：' + item.release_date : '首播日期：' + item.first_air_date
          }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
