<script setup lang="ts">
import gsap from 'gsap'

const animationOption = {
  duration: 2,
  ease: 'back',
  scale: 0,
  opacity: 0,
  stagger: 0.25,
  x: 'random(-1000,1000)'
}

function test1() {
  gsap.from('.box', animationOption)
}

function test2() {
  let tl = gsap.timeline()
  tl.to('.element1', { duration: 1, x: 100 })
    .to('.element2', { duration: 1, y: 100 }, '+=0.5') // 延遲 0.5 秒開始
    .to('.element3', { duration: 1, opacity: 0 })
}
</script>

<template>
  <div>GSAP</div>
  <div>
    <button @click="test1">test1</button>
    <button @click="test2">test2</button>
  </div>
  <div class="box element1">BOX</div>
  <div class="box element2">BOX</div>
  <div class="box element3">BOX</div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: antiquewhite;
}

button {
  padding: 3px;
  border: 1px solid black;
  width: 100px;
}
</style>
