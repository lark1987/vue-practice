<script setup lang="ts">
import { reactive } from 'vue'
import { nanoid } from 'nanoid'
import type { Ref } from 'vue'
import TodoInput from './todolist-addtodo.vue'
import TodoContent from './todolist-content.vue'
import TodoFooter from './todolist-footer.vue'

interface Todo {
  id: string
  todo: string
  isChecked: boolean
  isEdit: boolean
}

let todos = reactive<Todo[]>([
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

function addTodo(input: Ref) {
  let newItem = {
    id: nanoid(),
    todo: input.value,
    isChecked: false,
    isEdit: false
  }
  todos.unshift(newItem)
}

// 可以另包成 todoContentHandler JS 檔
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

function deleteTodo(id: string) {
  const index = todos.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todos.splice(index, 1)
  }
}
</script>

<template>
  <TodoInput @addTodo="addTodo"></TodoInput>
  <br /><br /><br />
  <TodoContent
    v-model="todos"
    @updateCheckbox="updateCheckbox"
    @updateIsEdit="updateIsEdit"
    @updateTodo="updateTodo"
    @deleteTodo="deleteTodo"
  ></TodoContent>
  <br /><br /><br />
  <TodoFooter></TodoFooter>
</template>

<style lang="scss" scoped></style>
