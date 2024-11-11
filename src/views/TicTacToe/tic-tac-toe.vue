<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import ButtonRestart from './button-restart.vue'

const board: Ref<(string | null)[]> = ref(Array(9).fill(null))
const player: Ref<string> = ref('O')
const winner: Ref<string> = ref('')

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function makeMove(index: number) {
  if (board.value[index] !== null) {
    return
  }
  if (player.value === 'O') {
    board.value[index] = 'O'
    player.value = 'X'
  } else if (player.value === 'X') {
    board.value[index] = 'X'
    player.value = 'O'
  }
}
function restart() {
  board.value = Array(9).fill(null)
  player.value = 'O'
  winner.value = ''
}

const checkWinner = computed(() => {
  winningCombinations.some((combination) => {
    const [a, b, c] = combination
    if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
      winner.value = board.value[a]!
      return true
    }
    return false
  })
  return winner.value
})
</script>

<template>
  <div class="justify-center bg-black p-8 sm:flex xl:gap-x-16 xl:p-40 xl:text-3xl">
    <div
      class="grid aspect-square grid-cols-[32%,32%,32%] grid-rows-[32%,32%,32%] justify-center gap-[1%] text-[4rem] sm:w-[80%] lg:w-[50%]"
    >
      <div
        v-for="(item, index) in board"
        :key="index"
        @click="makeMove(index)"
        class="grid place-items-center border-4 border-white hover:bg-gray-600"
      >
        <span class="text-[#ffd700]">{{ item }}</span>
      </div>
    </div>

    <div class="flex gap-5 p-5 sm:flex-col-reverse">
      <div class="grow self-center text-white">
        <span>當前玩家：{{ player }}</span>
      </div>
      <ButtonRestart @click="restart" />
    </div>

    <div
      :class="[
        'absolute left-[50%] top-[35%] z-20 translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-[#e7dc9f] p-10 text-center',
        checkWinner ? 'block' : 'hidden'
      ]"
    >
      <span class="font-anton-sc">Game Over</span><br />
      <span class="font-anton-sc leading-[3rem] xl:leading-[6rem]">the winner is</span>
      <span class="pl-2 font-anton-sc text-red-700">{{ checkWinner }}</span> <br />
      <ButtonRestart @click="restart" class="w-full" />
    </div>

    <div
      :class="[
        'absolute left-0 top-0 z-10 h-[100vh] w-[100vw] overflow-hidden bg-black opacity-50',
        checkWinner ? 'block' : 'hidden'
      ]"
    ></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton+SC&family=Archivo+Black&display=swap');
</style>
