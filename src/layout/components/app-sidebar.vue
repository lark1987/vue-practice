<script setup lang="ts">
const routes = [
  { name: 'HomePage', path: '/' },
  { name: 'TodoList', path: '/todolist' }
]
</script>

<template>
  <div class="bg-blue-100 h-screen">
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
