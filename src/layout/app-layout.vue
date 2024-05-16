<script setup lang="ts">
import AppSidebar from './components/app-sidebar.vue'
import AppTopbar from './components/app-topbar.vue'

let openMenu = false
function toggleMenu() {
  openMenu = !openMenu
  console.log(openMenu)
}
</script>

<template>
  <nav>
    <AppSidebar :openMenu />
  </nav>
  <main>
    <header class="p-3 bg-slate-500">
      <AppTopbar @toggleMenu="toggleMenu" />
    </header>
    <section class="bg-gray-100">
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style scoped>
/* header {
  width: calc(100vw - 10rem);
} */
</style>
