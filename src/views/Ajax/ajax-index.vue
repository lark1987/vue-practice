<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: tmdbApiKey
  }
}

let data: any = ref()

function getData() {
  axios('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then((res) => {
      sessionStorage.setItem('data', JSON.stringify(res.data.results))
      console.log(res.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
}
function getSessionData() {
  const dataString = sessionStorage.getItem('data')
  if (dataString !== null) {
    data.value = JSON.parse(dataString)
    console.log(data)
  }
}
</script>

<template>
  <div class="p-10">
    <button @click="getData">getData</button>
    <button @click="getSessionData">getSessionData</button>
  </div>
  <div>現正熱映中</div>
  <div class="box">
    <div v-for="(item, index) in data" :key="index">
      <img :src="'https://image.tmdb.org/t/p/original' + item.poster_path" :alt="item.title" />
      <span>電影名稱：{{ item.title }}</span
      ><br />
      <span>上映日期：{{ item.release_date }}</span>
    </div>
  </div>
</template>

<style scoped>
button {
  border: 1px solid #000000;
  padding: 10px;
}
img {
  width: 30vw;
  aspect-ratio: 71/98;
  object-fit: cover;
}
</style>
