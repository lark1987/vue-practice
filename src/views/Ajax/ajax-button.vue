<script setup lang="ts"></script>
<template>
  <div
    class="group relative inline-flex w-1/2 cursor-pointer items-center justify-center px-5 py-3 text-lg font-bold uppercase transition-all duration-200 ease-in-out lg:text-2xl 2xl:text-3xl"
  >
    <span class="z-20"><slot></slot></span>
    <div
      class="absolute bottom-[10%] z-10 h-[3px] w-1/2 rounded-[28px] bg-[rgba(255,171,157,0.5)] transition-all duration-300 ease-in-out group-hover:h-[80%] group-active:scale-0"
    ></div>
  </div>
</template>

<style scoped></style>
