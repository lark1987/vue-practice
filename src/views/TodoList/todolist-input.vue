<script setup lang="ts">
const inputValue = defineModel()
const emit = defineEmits(['sendInput'])
function handleSendInput() {
  emit('sendInput', inputValue)
}
</script>

<template>
  <input v-model="inputValue" />
  <button @click="handleSendInput">send</button>
</template>

<style lang="scss" scoped></style>
