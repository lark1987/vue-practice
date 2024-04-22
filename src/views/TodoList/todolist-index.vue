<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import type { Ref } from 'vue'
import TodoInput from './todolist-addtodo.vue'
import TodoContent from './todolist-todos.vue'
import TodoFooter from './todolist-footer.vue'

const todos = ref([
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
  todos.value.unshift(newItem)
}

function updateCheckbox(id: string) {
  let item: any = todos.value.find((todo) => todo.id === id)
  item.isChecked = !item.isChecked
}

function updateIsEdit(id: string) {
  let item: any = todos.value.find((todo) => todo.id === id)
  item.isEdit = !item.isEdit
}
</script>

<template>
  <TodoInput @sendInput="sendInput"></TodoInput>
  <br /><br /><br />
  <TodoContent
    v-model="todos"
    @updateCheckbox="updateCheckbox"
    @updateIsEdit="updateIsEdit"
  ></TodoContent>
  <br /><br /><br />
  <TodoFooter></TodoFooter>
</template>

<style lang="scss" scoped></style>
