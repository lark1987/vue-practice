<script setup lang="ts">
const routes = [
  { name: 'Home', path: '/homepage', icon: 'src/assets/icon/menu-home.svg' },
  { name: 'Todo List', path: '/todolist', icon: 'src/assets/icon/menu-todo.svg' },
  { name: 'Carousel', path: '/Carousel', icon: 'src/assets/icon/menu-carousel.svg' },
  { name: 'Chart', path: '/chart', icon: 'src/assets/icon/menu-chart.svg' },
  { name: 'AJAX', path: '/ajax', icon: 'src/assets/icon/menu-ajax.svg' },
  { name: 'TicTacToe', path: '/tictactoe', icon: 'src/assets/icon/menu-game.svg' }
]

const { openMenu } = defineProps(['openMenu'])
const emit = defineEmits(['closeMenu'])
function handleCloseMenu() {
  emit('closeMenu')
}
</script>

<template>
  <div :class="['h-full w-40 bg-blue-100', openMenu ? 'absolute z-50' : 'hidden']">
    <RouterLink
      v-for="(item, index) in routes"
      :key="index"
      :to="item.path"
      class="flex p-3 hover:bg-blue-200"
      @click="handleCloseMenu"
    >
      <img class="w-6" :src="item.icon" :alt="item.name" />
      <span class="pl-4">{{ item.name }}</span>
    </RouterLink>
  </div>
  <div
    :class="['h-full w-full bg-black opacity-30', openMenu ? 'absolute z-40' : 'hidden']"
    @click="handleCloseMenu"
  ></div>
</template>

<style scoped></style>
