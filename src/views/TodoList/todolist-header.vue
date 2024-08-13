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
  <div class="w-full bg-slate-400 p-5">
    <input
      placeholder="請輸入待辦事項"
      v-model="inputValue"
      @keyup.enter="handleAddTodo"
      class="w-full rounded border-2 p-2 xl:p-5"
    />
  </div>
</template>

<style scoped></style>
