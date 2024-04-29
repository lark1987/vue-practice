<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import type { Ref } from 'vue'
import TodoInput from './todolist-addtodo.vue'
import TodoContent from './todolist-content.vue'
import TodoFooter from './todolist-footer.vue'

// 可以另包成 todoContentHandler JS 檔

interface Todo {
  id: string
  todo: string
  isChecked: boolean
  isEdit: boolean
}

let todos = ref<Todo[]>([
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
  todos.value.unshift(newItem)
}

function toggleCheckbox(id: string) {
  let item = todos.value.find((todo) => todo.id === id)
  if (item) {
    item.isChecked = !item.isChecked
  }
}

function toggleIsEdit(id: string) {
  let item = todos.value.find((todo) => todo.id === id)
  if (item) {
    item.isEdit = !item.isEdit
  }
}

function updateTodo(id: string, newTodo: string) {
  let item = todos.value.find((todo) => todo.id === id)
  if (item) {
    item.isEdit = false
    item.todo = newTodo
  }
}

function deleteTodo(id: string) {
  const index = todos.value.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todos.value.splice(index, 1)
  }
}

function toggleAllCheckbox(allCheck: boolean) {
  todos.value.forEach((todo) => {
    todo.isChecked = !allCheck
  })
}

function deleteCheckedTodo() {
  todos.value = todos.value.filter((item) => {
    return item.isChecked === false
  })
}
</script>

<template>
  <TodoInput @addTodo="addTodo"></TodoInput>
  <br /><br /><br />
  <TodoContent
    :todos
    @toggleCheckbox="toggleCheckbox"
    @toggleIsEdit="toggleIsEdit"
    @updateTodo="updateTodo"
    @deleteTodo="deleteTodo"
  ></TodoContent>
  <br /><br /><br />
  <TodoFooter
    :todos
    @toggleAllCheckbox="toggleAllCheckbox"
    @deleteCheckedTodo="deleteCheckedTodo"
  ></TodoFooter>
</template>

<style lang="scss" scoped></style>
