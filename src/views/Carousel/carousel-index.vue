<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const carouselText = [
  {
    title: 'Minimalism ',
    content:
      'Minimalism  is a popular design trend that advocates for reducing unnecessary elements and focusing on simplicity. A minimalist room is characterized by its simplicity, functionality, and clean lines. This design style not only creates a calming and uncluttered environment but also encourages mindful living by focusing on what is truly necessary.'
  },
  {
    title: 'Sky And Ocean',
    content:
      'The sky and the ocean often mirror each other in their vastness and depth. They both represent infinite possibilities and are filled with mystery. Their hues of blue can range from the lightest pastels during the day to the darkest shades during the night. They are a reminder of the expansive world we live in, full of beauty, wonder, and endless exploration.'
  },
  {
    title: 'Seclusion',
    content:
      'Seclusion is often associated with solitude and peace. It allows individuals to step away from the hustle and bustle of daily life, providing an opportunity for introspection and self-discovery. Seclusion does not necessarily mean loneliness; instead, it can be a time for recharging and gaining a fresh perspective. However, it is important to balance periods of seclusion with social interaction to maintain overall well-being.'
  }
]

const picTitle: any = ref(carouselText[0].title)
const picContent: any = ref(carouselText[0].content)

onMounted(() => {
  const swiper1 = new Swiper('.swiper1', {
    loop: true,
    autoplay: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      init: function () {
        console.log('swiper initialized')
      }
    }
  })
  swiper1.on('realIndexChange', function () {
    picTitle.value = carouselText[swiper1.realIndex].title
    picContent.value = carouselText[swiper1.realIndex].content
  })
})
</script>

<template>
  <div class="flex">
    <div class="swiper1 mb-12">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="@/assets/picture/pic-1.jpg" /></div>
        <div class="swiper-slide"><img src="@/assets/picture/pic-2.jpg" /></div>
        <div class="swiper-slide"><img src="@/assets/picture/pic-3.jpg" /></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="p-12">
      <h4 class="text-gray-800 text-3xl pb-3 pt-20">{{ picTitle }}</h4>
      <p class="text-gray-500 text-xl">{{ picContent }}</p>
    </div>
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
