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
  <div class="mb-10">
    <ul>
      <li
        v-for="{ id, todo, isChecked, isEdit } in todos"
        :key="id"
        class="flex hover:bg-slate-200 p-1"
      >
        <input type="checkbox" :checked="isChecked" @change="toggleCheckbox(id)" />
        <div class="break-all grow mx-10">
          <span v-if="!isEdit">{{ todo }}</span>
          <textarea
            v-else
            type="text"
            :value="todo"
            @change="getNewTodoValue($event)"
            @keyup.enter="updateTodo(id)"
            @blur="updateTodo(id)"
            ref="editRefs"
            class="w-full"
          ></textarea>
        </div>

        <div class="whitespace-nowrap">
          <button v-if="!isEdit" @click="editTodo(id)">編輯</button>
          <button v-else @click="updateTodo(id)">儲存</button>
          <button @click="deleteTodo(id)">刪除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
