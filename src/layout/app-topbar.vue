<script setup lang="ts">
import { ref } from 'vue'
import AppMenu from './app-menu.vue'

let openMenu = ref(false)

function toggleMenu() {
  openMenu.value = !openMenu.value
}
</script>

<template>
  <div class="box">
    <div>
      <RouterLink to="/homepage">
        <img src="@/assets/icon/menu-home.svg" alt="homepage" />
      </RouterLink>
    </div>
    <div>
      <div @click="toggleMenu" class="cursor-pointer">
        <img src="@/assets/icon/menu.svg" alt="menu" />
      </div>
      <div :class="[openMenu ? '' : 'hidden']">
        <AppMenu @toggleMenu="toggleMenu" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  width: 100vw;
  background-color: rgb(191, 188, 188);
  padding: 10px;
  gap: 10px;
}
.box > div {
  width: 30px;
}
</style>
