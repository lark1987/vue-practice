<script setup lang="ts">
import { ref } from 'vue'

const todos = defineModel()
const newTodo = ref()
const emits = defineEmits(['updateCheckbox', 'updateIsEdit', 'updateTodo', 'deleteTodo'])

function handleCheckbox(id: string) {
  emits('updateCheckbox', id)
}

function editTodo(id: string, isEdit: boolean) {
  if (isEdit) {
    emits('updateTodo', id, newTodo.value)
    newTodo.value = ''
  } else {
    emits('updateIsEdit', id)
  }
}

function deleteTodo(id: string) {
  emits('deleteTodo', id)
}
</script>

<template>
  <ul>
    <li v-for="{ id, todo, isChecked, isEdit } in todos" :key="id">
      <input type="checkbox" :checked="isChecked" @change="handleCheckbox(id)" />
      <span v-if="!isEdit">{{ todo }}</span>
      <input
        v-else
        type="text"
        v-model="newTodo"
        @keyup.enter="editTodo(id, isEdit)"
        @blur="editTodo(id, isEdit)"
      />
      <button @click="editTodo(id, isEdit)">{{ isEdit ? '儲存' : '編輯' }}</button>
      <button @click="deleteTodo(id)">刪除</button>
    </li>
  </ul>
  <br /><br /><br /><br />
  <div v-for="{ id, todo, isChecked, isEdit } in todos" :key="id">
    {{ todo }}，{{ isChecked }}，{{ isEdit }}
  </div>
</template>

<style scoped>
button {
  margin-left: 5px;
}
</style>
