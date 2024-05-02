<script setup lang="ts">
const inputValue = defineModel()
const emits = defineEmits(['addTodo'])
function handleAddTodo() {
  emits('addTodo', inputValue)
  inputValue.value = ''
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
    <!-- <button @click="handleAddTodo" class="bg-red-100 p-2 rounded hover:bg-red-200">Send</button> -->
  </div>
</template>

<style lang="scss" scoped></style>
