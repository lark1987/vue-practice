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
</script>

<template>
  <div class="mb-10">
    <ul>
      <li
        v-for="{ id, todo, isChecked, isEdit } in todos"
        :key="id"
        class="flex hover:bg-slate-200 mb-3"
      >
        <input type="checkbox" :checked="isChecked" @change="toggleCheckbox(id)" />

        <div class="break-all grow mx-10" @dblclick="editTodo(id)" title="雙擊左鍵可編輯">
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
        <div class="whitespace-nowrap" @click="deleteTodo(id)">
          <img src="@/assets/icon/trash.svg" alt="trash" class="" />
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
