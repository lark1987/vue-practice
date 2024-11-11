<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { Parallax, Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules'

const modules = [Parallax, Pagination, FreeMode, Navigation, Thumbs]

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
  },
  {
    title: 'Existentialism',
    content:
      'Existentialism is a philosophical theory or approach which emphasizes the existence of the individual person as a free and responsible agent determining their own development through acts of the will.',
    src: 'src/assets/picture/pic-balloon.jpg'
  },
  {
    title: 'Entertainment',
    content:
      'Entertainment includes diverse activities like dance, movies, travel, and storytelling, each capable of expressing emotions, transporting us to different realms, exploring cultures, and connecting us with humanity.',
    src: 'src/assets/picture/pic-flower.jpg'
  }
]

const thumbsSwiper: Ref<SwiperType | null> = ref(null)

const picTitle: Ref<string> = ref(carouselText[0].title)
const picContent: Ref<string> = ref(carouselText[0].content)

function setThumbsSwiper(swiper: SwiperType) {
  thumbsSwiper.value = swiper
}

function handleSlideChange(swiper: SwiperType) {
  picTitle.value = carouselText[swiper.realIndex].title
  picContent.value = carouselText[swiper.realIndex].content
}
</script>

<template>
  <div class="carouselBox w-[100vw]">
    <div>
      <swiper
        @realIndexChange="handleSlideChange"
        :loop="true"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :speed="1000"
        :parallax="true"
      >
        <swiper-slide v-for="(item, key) in carouselText" :key="key">
          <div class="absolute left-[25%] top-[35%] w-[50%]">
            <h4 data-swiper-parallax="-1000" class="pb-2.5 font-[fantasy] text-4xl md:text-5xl">
              {{ item.title }}
            </h4>
            <p
              data-swiper-parallax="-3000"
              class="line-clamp-2 h-[calc(1em*1.5*2)] text-ellipsis font-[math] leading-[1.5em]"
            >
              {{ item.content }}
            </p>
            <div></div>
          </div>
          <img
            :src="item.src"
            :alt="item.title"
            class="aspect-video h-full w-full object-cover md:aspect-[3]"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="py-1">
      <swiper
        @swiper="setThumbsSwiper"
        :slidesPerView="5"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="bg-black"
      >
        <swiper-slide
          v-for="(item, key) in carouselText"
          :key="key"
          class="opacity-50 active:opacity-100"
        >
          <img
            :src="item.src"
            :alt="item.title"
            class="aspect-video h-full w-full object-cover md:aspect-[3]"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="p-[10%]">
      <h4 class="pb-2 font-[fantasy] text-2xl">{{ picTitle }}</h4>
      <p class="font-[math]">{{ picContent }}</p>
    </div>
  </div>
</template>

<style>
.carouselBox .swiper-slide-thumb-active {
  opacity: 1;
}

.carouselBox .swiper-button-prev::after,
.carouselBox .swiper-button-next::after {
  content: none;
}
.carouselBox .swiper-button-prev {
  width: 30px;
  height: 30px;
  background-image: url('@/assets/icon/arrow-prev.svg');
  background-size: contain;
  background-repeat: no-repeat;
  left: 5%;
}
.carouselBox .swiper-button-next {
  width: 30px;
  height: 30px;
  background-image: url('@/assets/icon/arrow-next.svg');
  background-size: contain;
  background-repeat: no-repeat;
  right: 5%;
}
</style>
