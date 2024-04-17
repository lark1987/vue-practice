<script setup lang="ts">
const { todos } = defineProps(['todos'])
</script>

<template>
  <div>{{ todos }}</div>
</template>

<style lang="scss" scoped></style>
