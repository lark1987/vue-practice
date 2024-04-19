<script setup lang="ts">
const { todos } = defineProps(['todos'])
const emits = defineEmits(['updateCheckbox'])

function handleCheckbox(id: string) {
  emits('updateCheckbox', id)
}
</script>

<template>
  <ul>
    <li v-for="{ id, todo, isChecked } in todos" :key="id">
      <input type="checkbox" @change="handleCheckbox(id)" :checked="isChecked" />
      {{ todo }}
    </li>
  </ul>
</template>

<style scoped></style>
