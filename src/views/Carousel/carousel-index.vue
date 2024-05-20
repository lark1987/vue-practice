<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const carouselText = [
  {
    title: 'Minimalism ',
    content:
      'Minimalism  is a popular design trend that advocates for reducing unnecessary elements and focusing on simplicity. A minimalist room is characterized by its simplicity, functionality, and clean lines. This design style not only creates a calming and uncluttered environment but also encourages mindful living by focusing on what is truly necessary.',
    src: 'src/assets/picture/pic-room.jpg'
  },
  {
    title: 'Sky And Ocean',
    content:
      'The sky and the ocean often mirror each other in their vastness and depth. They both represent infinite possibilities and are filled with mystery. Their hues of blue can range from the lightest pastels during the day to the darkest shades during the night. They are a reminder of the expansive world we live in, full of beauty, wonder, and endless exploration.',
    src: 'src/assets/picture/pic-ocean.jpg'
  },
  {
    title: 'Seclusion',
    content:
      'Seclusion is often associated with solitude and peace. It allows individuals to step away from the hustle and bustle of daily life, providing an opportunity for introspection and self-discovery. Seclusion does not necessarily mean loneliness; instead, it can be a time for recharging and gaining a fresh perspective. However, it is important to balance periods of seclusion with social interaction to maintain overall well-being.',
    src: 'src/assets/picture/pic-road.jpg'
  }
]

const picTitle: Ref<string> = ref(carouselText[0].title)
const picContent: Ref<string> = ref(carouselText[0].content)

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
    }
  })
  swiper1.on('realIndexChange', function () {
    picTitle.value = carouselText[swiper1.realIndex].title
    picContent.value = carouselText[swiper1.realIndex].content
  })
})
</script>

<template>
  <div class="block md:flex">
    <div class="swiper1 relative mx-[auto] mb-10 w-[90vw] pt-8 md:w-[50vw]">
      <div class="swiper-wrapper">
        <div class="swiper-slide aspect-video" v-for="(item, key) in carouselText" :key="key">
          <img class="h-full w-full object-cover" :src="item.src" :alt="item.title" />
        </div>
      </div>
      <div class="swiper-pagination -mb-10"></div>
      <div class="swiper-button-prev bg-[url('src/assets/icon/arrow-prev.svg')]"></div>
      <div class="swiper-button-next bg-[url('src/assets/icon/arrow-next.svg')]"></div>
    </div>
    <div class="p-5 md:w-[50vw] md:pt-[5%]">
      <h4 class="pb-3 text-2xl text-gray-800">{{ picTitle }}</h4>
      <p class="text-gray-500 xl:w-[40vw]">{{ picContent }}</p>
    </div>
  </div>
</template>

<style scoped>
div[class^='swiper-button'] {
  background-size: contain;
  width: 30px;
  height: 30px;
  opacity: 0.5;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: none;
}
</style>

<style>
.swiper-pagination-bullet {
  background-color: grey;
  --swiper-pagination-bullet-size: 12px;
}
</style>
