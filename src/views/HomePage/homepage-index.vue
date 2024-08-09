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
  <div class="bigbox">
    <div class="box1">
      <h3>Welcome</h3>
      <span> It's A Vue Practice Project</span>
    </div>
    <div class="box2">
      <RouterLink v-for="(item, index) in routes" :key="index" :to="item.path" class="item">
        <img class="w-6" :src="item.icon" :alt="item.name" />
        <span class="pl-4">{{ item.name }}</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton+SC&family=Archivo+Black&display=swap');

.bigbox {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
}
.box1 {
  width: 100%;
  text-align: center;
  padding: 30px 0;
  font-family: 'Anton SC', sans-serif;
  font-size: x-large;
}
.box2 {
  width: 50%;
  margin: 0 auto;
}
.box2 .item {
  display: flex;
  border-radius: 10px;
  border: 3px solid black;
  margin: 10px;
  padding: 10px;
}
.box2 .item:hover {
  background-color: #9fc8d8;
}

button {
  padding: 3px;
  border: 1px solid black;
  width: 100px;
}
</style>
