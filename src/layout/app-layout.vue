<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from './components/app-sidebar.vue'
import AppTopbar from './components/app-topbar.vue'

let openMenu = ref(false)

function toggleMenu() {
  openMenu.value = !openMenu.value
}
function closeMenu() {
  openMenu.value = false
}
</script>

<template>
  <nav>
    <AppSidebar :openMenu @closeMenu="closeMenu" />
  </nav>
  <main>
    <header class="w-[100vw] overflow-hidden bg-slate-500 p-3">
      <AppTopbar @toggleMenu="toggleMenu" />
    </header>
    <section class="bg-gray-100">
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style scoped></style>
