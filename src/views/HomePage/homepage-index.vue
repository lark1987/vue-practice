<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

const routes = [
  { name: 'Todo List', path: '/todolist', icon: 'src/assets/icon/menu-todo.svg' },
  { name: 'Carousel', path: '/Carousel', icon: 'src/assets/icon/menu-carousel.svg' },
  { name: 'Chart', path: '/chart', icon: 'src/assets/icon/menu-chart.svg' },
  { name: 'AJAX', path: '/ajax', icon: 'src/assets/icon/menu-ajax.svg' },
  { name: 'TicTacToe', path: '/tictactoe', icon: 'src/assets/icon/menu-game.svg' }
]

const itemAnimationSetup = {
  duration: 1.5,
  ease: 'back',
  scale: 0,
  opacity: 0,
  stagger: 0.25
}

function introAnimation() {
  let tl = gsap.timeline()
  tl.from('.box1', { duration: 0.8, y: -50 }).from('.item', itemAnimationSetup)
}

onMounted(() => {
  introAnimation()
})
</script>

<template>
  <div>
    <div class="box1 font-anton-sc p-[3rem] text-center text-[2rem] xl:text-[5rem]">
      <span>Welcome</span><br />
      <span> It's A Vue Practice Project</span>
    </div>
    <div
      class="mx-[auto] w-[50%] xl:flex xl:flex-wrap xl:justify-center xl:gap-[2rem] xl:text-[3rem]"
    >
      <RouterLink
        v-for="(item, index) in routes"
        :key="index"
        :to="item.path"
        class="item m-[10px] flex rounded-[10px] border-4 border-black p-[10px] hover:bg-[lightgrey] xl:w-1/4 xl:flex-col xl:items-center"
      >
        <img class="w-[2rem] xl:w-[10rem]" :src="item.icon" :alt="item.name" />
        <span class="self-center px-[1rem] xl:px-0 xl:text-[2rem]">{{ item.name }}</span>
      </RouterLink>
      <a class="w-[26%]"></a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton+SC&family=Archivo+Black&display=swap');
</style>
