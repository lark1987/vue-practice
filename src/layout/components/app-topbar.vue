<script setup lang="ts">
const emit = defineEmits(['toggleMenu'])
function handleToggleMenu() {
  emit('toggleMenu')
}
</script>

<template>
  <div @click="handleToggleMenu" class="w-6">
    <img src="@/assets/icon/menu.svg" alt="menu" />
  </div>
</template>

<style scoped></style>
