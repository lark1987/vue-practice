<script setup lang="ts">
import { db } from '@/utils/firebase.js'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { ref } from 'vue'
import { nanoid } from 'nanoid'
import TodoInput from './todolist-header.vue'
import TodoContent from './todolist-content.vue'
import TodoTool from './todolist-tool.vue'
import type { Todo } from './types'

let todos = ref<Todo[]>([])
let isLoading = ref(true)

let firebaseCollectionName = 'ToDoList'
let firebaseDataID = '1h388GxC6lXqzyWN9Dnm'

async function fetchDocument() {
  const docRef = doc(db, firebaseCollectionName, firebaseDataID)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log(docSnap.data().firebaseDataName)
    todos.value = docSnap.data().firebaseDataName
    isLoading.value = false
  } else {
    console.log('No such document!')
  }
}

fetchDocument()

function addTodo(item: string) {
  let newItem = {
    id: nanoid(),
    todo: item,
    isChecked: false,
    isEdit: false
  }
  todos.value.unshift(newItem)
  uploadData()
}

function toggleCheckbox(id: string) {
  let item = todos.value.find((todo) => todo.id === id)
  if (item) {
    item.isChecked = !item.isChecked
  }
  uploadData()
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
  uploadData()
}

function deleteTodo(id: string) {
  const index = todos.value.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todos.value.splice(index, 1)
  }
  uploadData()
}

function toggleAllCheckbox(allCheck: boolean) {
  todos.value.forEach((todo) => {
    todo.isChecked = !allCheck
  })
  uploadData()
}

function deleteCheckedTodo() {
  todos.value = todos.value.filter((item) => {
    return item.isChecked === false
  })
  uploadData()
}

function dragTodo(dragId: string, dropId: string) {
  let cutIndex = todos.value.findIndex((todo) => todo.id === dragId)
  let addIndex = todos.value.findIndex((todo) => todo.id === dropId)
  todos.value.splice(addIndex, 0, todos.value.splice(cutIndex, 1)[0])
  uploadData()
}

async function uploadData() {
  let newData = {
    firebaseDataName: todos.value
  }

  console.log(newData)

  await setDoc(doc(db, firebaseCollectionName, firebaseDataID), newData)
  console.log('upload')
}

const classTablet = ['xl:text-2xl']
</script>

<template>
  <div class="w-full pb-10">
    <TodoInput @addTodo="addTodo" :class="classTablet"></TodoInput>
    <div v-if="isLoading" class="m-10 w-fit font-mono text-[25px]">載入中...</div>
    <div v-else-if="todos.length === 0" class="m-10 w-fit font-mono text-[25px]">
      尚無內容，請於上方輸入框，輸入待辦事項
    </div>
    <TodoContent
      v-else
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
