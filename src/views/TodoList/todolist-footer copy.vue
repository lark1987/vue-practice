<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const { todos } = defineProps(['todos'])

const emit = defineEmits(['toggleAllCheckbox', 'deleteCheckedTodo'])

let sumOfIsChecked = ref()

watch(
  () => todos,
  (newVal) => {
    sumOfIsChecked.value = newVal.reduce(
      (acc: any, item: any) => (item.isChecked ? acc + 1 : acc),
      0
    )
  },
  { deep: true }
)

// const sumOfIsChecked = computed(() => {
//   return todos.reduce((acc: any, item: any) => (item.isChecked ? acc + 1 : acc), 0)
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
