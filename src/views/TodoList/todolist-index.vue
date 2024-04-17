<script setup lang="ts">
import type { Ref } from 'vue'
import TodoInput from './todolist-input.vue'
import TodoContent from './todolist-content.vue'
import TodoFooter from './todolist-footer.vue'

const todos = [
  {
    id: '001',
    todo: '你好'
  },
  {
    id: '002',
    todo: '嗨嗨'
  },
  {
    id: '003',
    todo: 'hello'
  }
]

function sendInput(input: Ref) {
  console.log(input)
  console.log(input.value)
}
</script>

<template>
  <TodoInput @sendInput="sendInput"></TodoInput>
  <br /><br /><br />
  <TodoContent :todos></TodoContent>
  <br /><br /><br />
  <TodoFooter></TodoFooter>
</template>

<style lang="scss" scoped></style>
