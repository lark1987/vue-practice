<script setup lang="ts">
const routes = [
  { name: 'Todo List', path: '/todolist', icon: 'src/assets/icon/menu-todo.svg' },
  { name: 'Carousel', path: '/Carousel', icon: 'src/assets/icon/menu-carousel.svg' },
  { name: 'Chart', path: '/chart', icon: 'src/assets/icon/menu-chart.svg' },
  { name: 'AJAX', path: '/ajax', icon: 'src/assets/icon/menu-ajax.svg' },
  { name: 'TicTacToe', path: '/tictactoe', icon: 'src/assets/icon/menu-game.svg' }
]

const emit = defineEmits(['toggleMenu'])
function handleCloseMenu() {
  emit('toggleMenu')
}
</script>

<template>
  <div class="box absolute z-50 mt-[10px] w-40">
    <RouterLink
      v-for="(item, index) in routes"
      :key="index"
      :to="item.path"
      class="flex p-3 hover:bg-[#D9D3C7]"
      @click="handleCloseMenu"
    >
      <img class="w-6" :src="item.icon" :alt="item.name" />
      <span class="pl-4">{{ item.name }}</span>
    </RouterLink>
  </div>
  <div
    class="absolute left-0 top-0 z-40 h-full w-full bg-black opacity-10"
    @click="handleCloseMenu"
  ></div>
</template>

<style scoped>
.box {
  background-color: white;
  border: black solid 1px;
  border-radius: 5px;
}
</style>
