<script setup lang="ts">
import { onMounted } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

onMounted(() => {
  new Swiper('.swiper1', {
    loop: true,

    effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
})
</script>

<template>
  <div class="swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="@/assets/picture/pic-1.jpg" /></div>
      <div class="swiper-slide"><img src="@/assets/picture/pic-2.jpg" /></div>
      <div class="swiper-slide"><img src="@/assets/picture/pic-3.jpg" /></div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<style scoped>
.swiper1 {
  width: 50vw;
  position: relative;
}
.swiper-slide {
  aspect-ratio: 16/9;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

div[class^='swiper-button'] {
  background-size: contain;
  width: 30px;
  height: 30px;
  opacity: 0.5;
}

.swiper-button-prev {
  background-image: url('@/assets/icon/arrow-prev.svg');
}
.swiper-button-next {
  background-image: url('@/assets/icon/arrow-next.svg');
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: none;
}

.swiper-pagination {
  margin-bottom: -30px;
}
</style>

<style>
.swiper-pagination-bullet {
  background-color: grey;
}
</style>
