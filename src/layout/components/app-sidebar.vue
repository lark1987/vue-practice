<script setup lang="ts">
const routes = [
  { name: 'HomePage', path: '/' },
  { name: 'TodoList', path: '/todolist' },
  { name: 'Test', path: '/' },
  { name: 'Test', path: '/' }
]
</script>

<template>
  <div class="bg-blue-100 h-screen">
    <RouterLink
      v-for="(item, index) in routes"
      :key="index"
      :to="item.path"
      class="block hover:bg-blue-200 p-3"
      >{{ item.name }}</RouterLink
    >
  </div>
</template>

<style scoped></style>
