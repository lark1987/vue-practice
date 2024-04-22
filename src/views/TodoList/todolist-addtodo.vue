<script setup lang="ts">
const inputValue = defineModel()
const emits = defineEmits(['addTodo'])
function handleAddTodo() {
  emits('addTodo', inputValue)
  inputValue.value = ''
}
</script>

<template>
  <input placeholder="請輸入待辦事項" v-model="inputValue" @keyup.enter="handleAddTodo" />
  <button @click="handleAddTodo">Send</button>
</template>

<style lang="scss" scoped></style>
