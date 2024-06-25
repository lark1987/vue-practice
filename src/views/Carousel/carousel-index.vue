<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
// import './style.css'

import { Parallax, Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules'

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

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

const picTitle = ref(carouselText[0].title)
const picContent = ref(carouselText[0].content)

function handleSlideChange(swiper) {
  console.log('OK')
  picTitle.value = carouselText[swiper.realIndex].title
  picContent.value = carouselText[swiper.realIndex].content
}
</script>

<template>
  <div class="box">
    <div class="box1">
      <swiper
        @realIndexChange="handleSlideChange"
        :loop="true"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :speed="1000"
        :parallax="true"
        :pagination="{
          clickable: true
        }"
      >
        <swiper-slide v-for="(item, key) in carouselText" :key="key">
          <div class="wordbox">
            <h4 data-swiper-parallax="-1000">{{ item.title }}</h4>
            <p data-swiper-parallax="-2000">{{ item.content }}</p>
          </div>
          <img :src="item.src" :alt="item.title" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="box2">
      <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :slidesPerView="5"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
      >
        <swiper-slide v-for="(item, key) in carouselText" :key="key">
          <img :src="item.src" :alt="item.title" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
}
.box {
  width: 100vw;
}
.box1 {
  position: relative;
}
.box2 {
  padding-top: 5px;
}

.box2 .swiper-slide {
  opacity: 0.4;
}

.box2 .swiper-slide-thumb-active {
  opacity: 1;
}

.wordbox {
  position: absolute;
  color: aliceblue;
  top: 20%;
  left: 20%;
  width: 60%;
}
.wordbox p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: calc(1em * 1.5 * 3);
  line-height: 1.5em;
  font-family: math;
}
.wordbox h4 {
  font-family: fantasy;
  font-size: xx-large;
  padding-bottom: 10px;
}
/* .swiper-button-prev {
  background-image: url('../../assets/icon/arrow-prev.svg');
} */
</style>

<style>
.swiper-button-prev::after,
.swiper-button-next::after {
  content: none;
}
.swiper-button-prev {
  width: 30px;
  height: 30px;
  background-image: url('@/assets/icon/arrow-prev.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
.swiper-button-next {
  width: 30px;
  height: 30px;
  background-image: url('@/assets/icon/arrow-next.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
