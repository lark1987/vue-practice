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
  <input type="checkbox" :checked="checkboxAllCheck" @change="handleToggleAllCheckbox" />
  <span>批量選取</span>
  <span>，已完成{{ sumOfIsChecked }}，總數量{{ todos.todos.length }}，</span>
  <button @click="handleBatchDelete">批量刪除</button>
</template>

<style lang="scss" scoped></style>
