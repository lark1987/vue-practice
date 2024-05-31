<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: tmdbApiKey
  }
}

const url = {
  trendingMovie: 'https://api.themoviedb.org/3/trending/movie/day',
  trendingTV: 'https://api.themoviedb.org/3/trending/tv/day'
}

let data: any = ref()

type UrlKeys = keyof typeof url

function getData(category: UrlKeys) {
  axios(url[category], options)
    .then((res) => {
      sessionStorage.setItem(category, JSON.stringify(res.data.results))
      console.log(res.data.results)
      getSessionData(category)
    })
    .catch((err) => {
      console.log(err)
    })
}
function getSessionData(category: UrlKeys) {
  const dataString = sessionStorage.getItem(category)
  if (dataString !== null) {
    data.value = JSON.parse(dataString)
    console.log(data)
  } else {
    getData(category)
  }
}

// onMounted(() => {
//   getSessionData('trendingMovie')
// })
</script>

<template>
  <div class="p-10">
    <button @click="getSessionData('trendingMovie')">Trending Movie</button>
    <button @click="getSessionData('trendingTV')">Trending TV Show</button>
  </div>

  <div class="bigbox">
    <div class="box" v-for="(item, index) in data" :key="index">
      <div class="picbox">
        <img :src="'https://image.tmdb.org/t/p/original' + item.poster_path" :alt="item.title" />
      </div>
      <div class="wordbox">
        <span>電影名稱：{{ item.title }}</span
        ><br />
        <span>上映日期：{{ item.release_date }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  border: 1px solid #000000;
  padding: 10px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box {
  display: flex;
  padding: 10px;
}

.picbox {
  width: 30vw;
  aspect-ratio: 71/98;
  object-fit: cover;
  margin: 0 10px;
}
.wordbox {
  width: 60vw;
}
</style>
