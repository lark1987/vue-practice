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

  <div v-if="isLoading" class="loader">Loading...</div>
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
        <div class="wordbox group-hover:bottom-[10%] group-hover:opacity-100">
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

<style scoped>
.wordbox {
  position: absolute;
  bottom: 0;
  padding: 0 10%;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  opacity: 0;
  transition: bottom 0.3s ease-in-out;
  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 2000px) {
    font-size: 2.5rem;
  }
}

.loader {
  width: fit-content;
  margin: 0 auto;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: l4 1s steps(4) infinite;
}

@keyframes l4 {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}
</style>
