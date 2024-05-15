<script setup lang="ts">
const routes = [
  { name: 'Home', path: '/homepage' },
  { name: 'Todo List', path: '/todolist' },
  { name: 'Carousel', path: '/Carousel' }
]
</script>

<template>
  <div class="w-40 bg-blue-100 h-screen">
    <RouterLink
      v-for="(item, index) in routes"
      :key="index"
      :to="item.path"
      class="block hover:bg-blue-200 p-3 text-center"
      >{{ item.name }}</RouterLink
    >
  </div>
</template>

<style scoped></style>
