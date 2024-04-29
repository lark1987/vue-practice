<script setup lang="ts">
import { computed } from 'vue'

const { todos } = defineProps(['todos'])
const emit = defineEmits(['toggleAllCheckbox', 'deleteCheckedTodo'])

// 這裡要改成監視屬性
const sumOfIsChecked = computed(() => {
  return todos.reduce((acc: any, item: any) => (item.isChecked ? acc + 1 : acc), 0)
})

// const sumOfIsChecked = computed(() => {
//   const filterTodos = todos.filter((todo: any) => {
//     return todo.isChecked === true
//   })
//   console.log(filterTodos)
//   return filterTodos.length
// })

const checkboxAllCheck = computed(() => {
  return sumOfIsChecked.value === todos.length ? true : false
})

function handleToggleAllCheckbox() {
  emit('toggleAllCheckbox', checkboxAllCheck.value)
}

function handleBatchDelete() {
  emit('deleteCheckedTodo')
}
</script>

<template>
  <input
    type="checkbox"
    :checked="checkboxAllCheck"
    @change="handleToggleAllCheckbox"
    value="全選"
  />
  <span>批量選取</span>
  <span>，已完成{{ sumOfIsChecked }}，總數量{{ todos.length }}，</span>
  <button @click="handleBatchDelete">批量刪除</button>

  <br /><br /><br />
  <div v-for="{ id, todo, isChecked, isEdit } in todos" :key="id">
    {{ todo }}，{{ isChecked }}，{{ isEdit }}
  </div>
  <br /><br /><br />
  <div>
    {{ todos }}
  </div>
</template>

<style lang="scss" scoped></style>
