<script setup lang="ts">
const todos = defineModel()
const emits = defineEmits(['updateCheckbox', 'updateIsEdit'])

function handleCheckbox(id: string) {
  emits('updateCheckbox', id)
}

function toggleEdit(id: string) {
  emits('updateIsEdit', id)
}
</script>

<template>
  <ul>
    <li v-for="{ id, todo, isChecked, isEdit } in todos" :key="id">
      <input type="checkbox" :checked="isChecked" @change="handleCheckbox(id)" />
      <span v-if="!isEdit">{{ todo }}</span>
      <input v-else type="text" />
      <button @click="toggleEdit(id)">{{ isEdit ? '儲存' : '編輯' }}</button>
    </li>
  </ul>
  <br /><br />
  {{ todos }}
</template>

<style scoped>
button {
  margin-left: 30px;
}
</style>
