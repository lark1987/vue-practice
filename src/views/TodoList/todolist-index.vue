<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import TodoInput from './todolist-header.vue'
import TodoContent from './todolist-content.vue'
import TodoTool from './todolist-tool.vue'
import type { Todo } from './types'

let todos = ref<Todo[]>([
  {
    id: '001',
    todo: 'hello, 嗨嗨',
    isChecked: true,
    isEdit: false
  },
  {
    id: '002',
    todo: '滾滾長江東逝水，浪花淘盡英雄。是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，慣看秋月春風。一壺濁酒喜相逢，古今多少事，都付笑談中。',
    isChecked: false,
    isEdit: false
  },
  {
    id: '003',
    todo: 'Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.',
    isChecked: false,
    isEdit: false
  }
])

function addTodo(item: string) {
  let newItem = {
    id: nanoid(),
    todo: item,
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

function dragTodo(dragId: string, dropId: string) {
  let cutIndex = todos.value.findIndex((todo) => todo.id === dragId)
  let addIndex = todos.value.findIndex((todo) => todo.id === dropId)
  todos.value.splice(addIndex, 0, todos.value.splice(cutIndex, 1)[0])
}

const classTablet = ['xl:text-2xl']
// const classTablet: any = []
</script>

<template>
  <div class="w-full pb-10">
    <TodoInput @addTodo="addTodo" :class="classTablet"></TodoInput>

    <TodoContent
      :todos
      v-on="{
        toggleCheckbox,
        toggleIsEdit,
        updateTodo,
        deleteTodo,
        dragTodo
      }"
      :class="classTablet"
    ></TodoContent>

    <TodoTool
      :todos
      @toggleAllCheckbox="toggleAllCheckbox"
      @deleteCheckedTodo="deleteCheckedTodo"
      :class="classTablet"
    ></TodoTool>
  </div>
</template>

<style scoped></style>
