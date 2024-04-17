<script setup lang="ts">
import AppSidebar from './components/app-sidebar.vue'
import AppTopbar from './components/app-topbar.vue'
</script>

<template>
  <nav class="appSidebar">
    <AppSidebar />
  </nav>
  <main class="appContainer">
    <header>
      <AppTopbar />
    </header>
    <section class="appContent">
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style scoped>
.appSidebar {
  width: 200px;
  height: 100vh;
  background-color: rgb(95, 116, 179);
}
.appContainer {
  width: 100%;
  background-color: aliceblue;
}

.appContent {
  padding: 20px;
  background-color: rgb(247, 208, 208);
}
</style>
