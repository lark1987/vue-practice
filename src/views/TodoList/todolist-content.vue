<script setup lang="ts">
import { nextTick, ref, type Ref } from 'vue'
import type { Todo } from './types'

const { todos } = defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  toggleCheckbox: [id: string]
  toggleIsEdit: [id: string]
  updateTodo: [id: string, newTodo: string]
  deleteTodo: [id: string]
  dragTodo: [dragId: string, dropId: string]
}>()

let newTodo: string = ''

let editRefs: Ref<HTMLTextAreaElement[]> = ref([])

function toggleCheckbox(id: string) {
  emit('toggleCheckbox', id)
}

async function editTodo(id: string) {
  newTodo = ''
  emit('toggleIsEdit', id)
  await nextTick()
  editRefs.value[0].focus()
}

function getNewTodoValue(event: Event) {
  newTodo = (event.target as HTMLTextAreaElement).value
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

function autoResize() {
  const textarea = editRefs.value[0]
  textarea.style.height = textarea.scrollHeight + 'px'
}

function dragStartHandler(event: DragEvent, dragId: string) {
  event.dataTransfer?.setData('dragId', dragId)
}

function dropHandler(event: DragEvent, dropId: string) {
  let dragId = event.dataTransfer?.getData('dragId')
  if (dragId) {
    emit('dragTodo', dragId, dropId)
  }
}
</script>

<template>
  <div class="mb-10">
    <ul>
      <li
        v-for="{ id, todo, isChecked, isEdit } in todos"
        :key="id"
        class="flex items-center p-3 hover:bg-slate-200 hover:rounded-xl"
        draggable="true"
        @dragstart="dragStartHandler($event, id)"
        @drop="dropHandler($event, id)"
        @dragover.prevent
      >
        <label class="cursor-pointer">
          <input type="checkbox" :checked="isChecked" @change="toggleCheckbox(id)" class="hidden" />
          <img
            :src="
              isChecked ? 'src/assets/icon/checkbox-checked.svg' : 'src/assets/icon/checkbox.svg'
            "
            alt="checkbox"
            class="w-[20px] max-w-none"
          />
        </label>
        <div
          @click="toggleCheckbox(id)"
          @dblclick="editTodo(id)"
          title="雙擊可編輯，拖曳可更改順序"
          class="break-all grow mx-5"
        >
          <span v-if="!isEdit">{{ todo }}</span>
          <textarea
            v-else
            :value="todo"
            @focus="autoResize()"
            @change="getNewTodoValue($event)"
            @keydown.enter="updateTodo(id)"
            @blur="updateTodo(id)"
            ref="editRefs"
            class="w-full outline-0 resize-none bg-slate-200"
          ></textarea>
        </div>

        <div @click="deleteTodo(id)" class="whitespace-nowrap cursor-pointer">
          <img class="w-[20px] max-w-none" src="@/assets/icon/trash-can.svg" alt="delete" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
