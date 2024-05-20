<script setup lang="ts">
const inputValue = defineModel<string>()

const emit = defineEmits<{
  addTodo: [value: string]
}>()

function handleAddTodo() {
  if (inputValue.value) {
    emit('addTodo', inputValue.value)
    inputValue.value = ''
  }
}
</script>

<template>
  <div class="w-full p-3">
    <input
      placeholder="請輸入待辦事項"
      v-model="inputValue"
      @keyup.enter="handleAddTodo"
      class="w-full rounded p-2 hover:border-2 xl:mt-5 xl:p-5"
    />
  </div>
</template>

<style scoped></style>
