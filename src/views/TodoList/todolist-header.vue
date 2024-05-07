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
  <div class="mb-10">
    <input
      placeholder="請輸入待辦事項"
      v-model="inputValue"
      @keyup.enter="handleAddTodo"
      class="p-2 rounded mr-3 w-full hover:border-2"
    />
  </div>
</template>

<style lang="scss" scoped></style>
