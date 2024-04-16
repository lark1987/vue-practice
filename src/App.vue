<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeTopbar from './components/home-topbar.vue'
</script>

<template>
  <HomeTopbar />

  <nav></nav>

  <main></main>

  <RouterLink to="/">Home</RouterLink>
  <RouterView />
</template>

<style scoped></style>
