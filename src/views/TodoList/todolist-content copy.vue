<script setup lang="ts">
import { nextTick, ref, type Ref } from 'vue'

const { todos } = defineProps<{
  todos: any
}>()

const emit = defineEmits(['toggleCheckbox', 'toggleIsEdit', 'updateTodo', 'deleteTodo'])

let newTodo = ''

let editRefs: Ref<HTMLTextAreaElement[]> = ref([])

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

function autoResize() {
  const textarea = editRefs.value[0]
  textarea.style.height = textarea.scrollHeight + 'px'
}

function dragStartHandler(event: any) {
  console.log('我是dragStartHandler', event)
}

function dropHandler(event: any) {
  console.log('我是dropHandler', event)
}

function dragEnterHandler(event: any) {
  console.log('我是dragEnterHandler', event)
}
function dragLeaveHandler(event: any) {
  console.log('我是dragLeaveHandler', event)
}
</script>

<template>
  <div class="mb-10">
    <ul>
      <li
        v-for="{ id, todo, isChecked, isEdit } in todos"
        :key="id"
        class="flex items-center p-3 hover:bg-slate-200 hover:rounded-xl"
      >
        <label class="cursor-pointer">
          <input type="checkbox" :checked="isChecked" @change="toggleCheckbox(id)" class="hidden" />
          <img v-if="isChecked" src="@/assets/icon/checkbox-checked.svg" alt="checkbox" />
          <img v-else src="@/assets/icon/checkbox.svg" alt="checkbox" />
        </label>
        <div
          class="break-all grow mx-5"
          @click="toggleCheckbox(id)"
          @dblclick="editTodo(id)"
          title="雙擊左鍵可編輯"
        >
          <span v-if="!isEdit">{{ todo }}</span>
          <textarea
            v-else
            :value="todo"
            @focus="autoResize()"
            @change="getNewTodoValue($event)"
            @keyup.enter="updateTodo(id)"
            @blur="updateTodo(id)"
            ref="editRefs"
            class="w-full outline-0 resize-none bg-slate-200"
          ></textarea>
        </div>

        <div @click="deleteTodo(id)" class="whitespace-nowrap cursor-pointer">
          <img src="@/assets/icon/trash-can.svg" alt="delete" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
img {
  width: 20px;
  max-width: none;
}
</style>
