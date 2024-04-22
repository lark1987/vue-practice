<script setup lang="ts">
import { reactive } from 'vue'
import { nanoid } from 'nanoid'
import type { Ref } from 'vue'
import TodoInput from './todolist-addtodo.vue'
import TodoContent from './todolist-todos.vue'
import TodoFooter from './todolist-footer.vue'

interface Todo {
  id: string
  todo: string
  isChecked: boolean
  isEdit: boolean
}

const todos = reactive<Todo[]>([
  {
    id: '001',
    todo: '你好',
    isChecked: false,
    isEdit: false
  },
  {
    id: '002',
    todo: '嗨嗨',
    isChecked: false,
    isEdit: false
  },
  {
    id: '003',
    todo: 'hello',
    isChecked: true,
    isEdit: false
  }
])

function sendInput(input: Ref) {
  let newItem = {
    id: nanoid(),
    todo: input.value,
    isChecked: false,
    isEdit: false
  }
  todos.unshift(newItem)
}

function updateCheckbox(id: string) {
  let item = todos.find((todo) => todo.id === id)
  if (item) {
    item.isChecked = !item.isChecked
  }
}

function updateIsEdit(id: string) {
  let item = todos.find((todo) => todo.id === id)
  if (item) {
    item.isEdit = !item.isEdit
  }
}

function updateTodo(id: string, newTodo: string) {
  let item = todos.find((todo) => todo.id === id)
  if (item) {
    item.isEdit = false
    item.todo = newTodo
  }
}
</script>

<template>
  <TodoInput @sendInput="sendInput"></TodoInput>
  <br /><br /><br />
  <TodoContent
    v-model="todos"
    @updateCheckbox="updateCheckbox"
    @updateIsEdit="updateIsEdit"
    @updateTodo="updateTodo"
  ></TodoContent>
  <br /><br /><br />
  <TodoFooter></TodoFooter>
</template>

<style lang="scss" scoped></style>
