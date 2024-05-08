<script setup lang="ts">
import { onMounted } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

onMounted(() => {
  const swiper = new Swiper('.swiper1', {
    loop: true,
    initialSlide: 0,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  })
})
</script>

<template>
  <div class="box p-3">
    <div class="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="@/assets/picture/pic-arrietty.jpg" /></div>
        <div class="swiper-slide"><img src="@/assets/picture/pic-kaze.jpg" /></div>
        <div class="swiper-slide"><img src="@/assets/picture/pic-totoro.jpg" /></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

.box {
  width: 600px;
  position: relative;
}
.swiper1 {
  background-color: brown;
}
.swiper-pagination {
  background-color: aqua;
}

.swiper-button-prev,
.swiper-button-next {
  background-color: aqua;
}

.swiper-button-disabled {
  background-color: #cccccc;
  color: #aaaaaa;
}
</style>
