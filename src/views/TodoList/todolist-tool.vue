<script setup lang="ts">
import { computed } from 'vue'
import type { Todo } from './types'

const todos = defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  toggleAllCheckbox: [value: boolean]
  deleteCheckedTodo: []
}>()

const sumOfIsChecked = computed<number>(() => {
  return todos.todos.reduce((acc: any, item: any) => (item.isChecked ? acc + 1 : acc), 0)
})

const checkboxAllCheck = computed<boolean>(() => {
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
  <div class="flex rounded bg-slate-400 p-3 xl:my-5 xl:p-5">
    <label class="flex w-[20px] cursor-pointer gap-0.5 xl:w-[40px]" title="全部選取">
      <input
        type="checkbox"
        :checked="checkboxAllCheck"
        @change="handleToggleAllCheckbox"
        class="hidden"
      />
      <img
        :src="
          checkboxAllCheck ? 'src/assets/icon/checkbox-checked.svg' : 'src/assets/icon/checkbox.svg'
        "
        alt="checkbox"
      />
    </label>
    <div class="mx-2 xl:mx-10 xl:text-3xl xl:leading-10">
      <span>{{ sumOfIsChecked }}/{{ todos.todos.length }}</span>
    </div>
    <div @click="handleBatchDelete" title="刪除勾選" class="w-[20px] cursor-pointer xl:w-[40px]">
      <img src="@/assets/icon/trash-can.svg" alt="delete" />
    </div>
  </div>
</template>

<style scoped></style>
