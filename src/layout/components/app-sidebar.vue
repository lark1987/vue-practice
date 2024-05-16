<script setup lang="ts">
const routes = [
  { name: 'Home', path: '/homepage', icon: 'src/assets/icon/menu-home.svg' },
  { name: 'Todo List', path: '/todolist', icon: 'src/assets/icon/menu-todo.svg' },
  { name: 'Carousel', path: '/Carousel', icon: 'src/assets/icon/menu-carousel.svg' }
]

const openMenu = defineProps(['openMenu'])
</script>

<template>
  <!-- <div class="w-40 bg-blue-100 h-screen" :class="openMenu?block:hidden"> -->
  <div :class="['w-40 bg-blue-100 h-screen', openMenu ? 'block' : 'hidden']">
    <RouterLink
      v-for="(item, index) in routes"
      :key="index"
      :to="item.path"
      class="flex hover:bg-blue-200 p-3"
    >
      <img class="w-6" :src="item.icon" :alt="item.name" />
      <span class="pl-4">{{ item.name }}</span>
    </RouterLink>
  </div>
</template>

<style scoped></style>
