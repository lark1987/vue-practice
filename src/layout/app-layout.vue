<script setup lang="ts">
import AppTopbar from './app-topbar.vue'
</script>

<template>
  <header>
    <AppTopbar />
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
