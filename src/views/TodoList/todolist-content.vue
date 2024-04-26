<script setup lang="ts">
import { nextTick, ref } from 'vue'

const { todos } = defineProps<{
  todos: any
}>()

const emit = defineEmits(['toggleCheckbox', 'toggleIsEdit', 'updateTodo', 'deleteTodo'])

let newTodo = ''

let editRefs = ref([])

function toggleCheckbox(id: string) {
  emit('toggleCheckbox', id)
}

async function editTodo(id: string) {
  newTodo = ''
  emit('toggleIsEdit', id)
  await nextTick()
  editRefs.value.forEach((el: any) => {
    el.focus()
  })
}

function getNewTodoValue(event: any) {
  newTodo = event.target.value
}

function updateTodo(id: string) {
  if (newTodo) {
    emit('updateTodo', id, newTodo)
  } else {
    emit('toggleIsEdit', id)
  }
}

function deleteTodo(id: string) {
  emit('deleteTodo', id)
}
</script>

<template>
  <ul>
    <li v-for="{ id, todo, isChecked, isEdit } in todos" :key="id">
      <input type="checkbox" :checked="isChecked" @change="toggleCheckbox(id)" />
      <span v-if="!isEdit">{{ todo }}</span>
      <input
        v-else
        type="text"
        :value="todo"
        @change="getNewTodoValue($event)"
        @keyup.enter="updateTodo(id)"
        @blur="updateTodo(id)"
        ref="editRefs"
      />
      <button v-if="!isEdit" @click="editTodo(id)">編輯</button>
      <button v-else @click="updateTodo(id)">儲存</button>
      <button @click="deleteTodo(id)">刪除</button>
    </li>
  </ul>
  <br /><br />
  <div v-for="{ id, todo, isChecked, isEdit } in todos" :key="id">
    {{ todo }}，{{ isChecked }}，{{ isEdit }}
  </div>
  <br /><br />
</template>

<style scoped>
button {
  margin-left: 5px;
}

li {
  list-style: none;
}
</style>
