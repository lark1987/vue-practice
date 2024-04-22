<script setup lang="ts">
const inputValue = defineModel()
const emit = defineEmits(['sendInput'])
const handleSendInput = () => {
  emit('sendInput', inputValue)
}
</script>

<template>
  <input placeholder="請輸入待辦事項" v-model="inputValue" @keyup.enter="handleSendInput" />
  <button @click="handleSendInput">Send</button>
</template>

<style lang="scss" scoped></style>
