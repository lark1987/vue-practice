<script setup lang="ts">
import AppSidebar from './components/app-sidebar.vue'
import AppTopbar from './components/app-topbar.vue'
</script>

<template>
  <nav class="appSidebar">
    <AppSidebar />
  </nav>
  <main>
    <header class="p-3 bg-gray-400 w-screen">
      <AppTopbar />
    </header>
    <section class="p-3">
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style scoped></style>
