<script setup lang="ts">
import type { Ref } from 'vue'
import TodoInput from './todolist-addtodo.vue'
import TodoContent from './todolist-todos.vue'
import TodoFooter from './todolist-footer.vue'

const todos = [
  {
    id: '001',
    todo: '你好',
    isChecked: false
  },
  {
    id: '002',
    todo: '嗨嗨',
    isChecked: false
  },
  {
    id: '003',
    todo: 'hello',
    isChecked: true
  }
]

function sendInput(input: Ref) {
  console.log(input)
  console.log(input.value)
}

function updateCheckbox(id: string) {
  let item = todos.find((todo) => todo.id === id)
  item.isChecked = !item.isChecked
}
</script>

<template>
  <TodoInput @sendInput="sendInput"></TodoInput>
  <br /><br /><br />
  <TodoContent :todos @updateCheckbox="updateCheckbox"></TodoContent>
  <br /><br /><br />
  <TodoFooter></TodoFooter>
</template>

<style lang="scss" scoped></style>
