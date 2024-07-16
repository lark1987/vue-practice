<script setup lang="ts">
import gsap from 'gsap'

const routes = [
  { name: 'Todo List', path: '/todolist', icon: 'src/assets/icon/menu-todo.svg' },
  { name: 'Carousel', path: '/Carousel', icon: 'src/assets/icon/menu-carousel.svg' },
  { name: 'Chart', path: '/chart', icon: 'src/assets/icon/menu-chart.svg' },
  { name: 'AJAX', path: '/ajax', icon: 'src/assets/icon/menu-ajax.svg' },
  { name: 'TicTacToe', path: '/tictactoe', icon: 'src/assets/icon/menu-game.svg' }
]

const animationOption = {
  duration: 2,
  ease: 'back',
  scale: 0,
  opacity: 0,
  stagger: 0.25
  // x: 'random(-1000,1000)'
}

function test() {
  let tl = gsap.timeline()
  tl.from('.box1', { duration: 1, x: 100 }).from('.item', animationOption)
}
</script>

<template>
  <div>
    <button @click="test">test</button>
  </div>
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
.bigbox {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
}
.box1 {
  width: 100%;
  text-align: center;
  padding: 30px 0;
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
  background-color: #afd89f;
}

button {
  padding: 3px;
  border: 1px solid black;
  width: 100px;
}
</style>
