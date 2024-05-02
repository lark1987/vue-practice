<script setup lang="ts">
import AppSidebar from './components/app-sidebar.vue'
import AppTopbar from './components/app-topbar.vue'
</script>

<template>
  <nav class="w-1/6">
    <AppSidebar />
  </nav>
  <main class="w-5/6">
    <header class="p-3 bg-slate-500">
      <AppTopbar />
    </header>
    <section class="bg-gray-100">
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style scoped></style>
