<script setup lang="ts">
import { computed } from 'vue'

const todos = defineProps(['todos'])

const emit = defineEmits(['toggleAllCheckbox', 'deleteCheckedTodo'])

const sumOfIsChecked = computed(() => {
  return todos.todos.reduce((acc: any, item: any) => (item.isChecked ? acc + 1 : acc), 0)
})

const checkboxAllCheck = computed(() => {
  return todos.todos.length !== 0 && sumOfIsChecked.value === todos.todos.length ? true : false
})

function handleToggleAllCheckbox() {
  emit('toggleAllCheckbox', checkboxAllCheck.value)
}

function handleBatchDelete() {
  emit('deleteCheckedTodo')
}
</script>

<template>
  <div>
    <input type="checkbox" :checked="checkboxAllCheck" @change="handleToggleAllCheckbox" />
    <span>全選</span>
    <span>，已勾選{{ sumOfIsChecked }}，總數量{{ todos.todos.length }}，</span>
    <button @click="handleBatchDelete">刪除勾選</button>
  </div>
</template>

<style lang="scss" scoped></style>
