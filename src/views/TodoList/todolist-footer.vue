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
  <div class="flex p-3">
    <label class="cursor-pointer flex gap-0.5" title="全部選取">
      <input
        type="checkbox"
        :checked="checkboxAllCheck"
        @change="handleToggleAllCheckbox"
        class="hidden"
      />
      <img v-if="checkboxAllCheck" src="@/assets/icon/checkbox-checked.svg" alt="checkbox" />
      <img v-else src="@/assets/icon/checkbox.svg" alt="checkbox" />
    </label>
    <div class="mx-2">
      <span>{{ sumOfIsChecked }}/{{ todos.todos.length }}</span>
    </div>
    <div @click="handleBatchDelete" title="刪除勾選" class="cursor-pointer">
      <img src="@/assets/icon/trash-can.svg" alt="delete" />
    </div>
  </div>
</template>

<style scoped>
img {
  width: 20px;
}
</style>
