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
  <div class="mx-[auto] my-0 w-[90%] md:flex">
    <div class="flex py-5 md:order-1 md:block md:text-center md:text-3xl">
      <span class="grow self-center md:leading-[100px]">當前玩家：{{ player }}</span
      ><br />
      <ButtonRestart @click="restart" />
    </div>

    <div
      class="grid aspect-square grid-cols-[32%,32%,32%] grid-rows-[32%,32%,32%] justify-center gap-[1%] text-[4rem] md:w-[50vw] md:grid-cols-[15vw,15vw,15vw] md:grid-rows-[15vw,15vw,15vw]"
    >
      <div
        v-for="(item, index) in board"
        :key="index"
        @click="makeMove(index)"
        class="grid place-items-center bg-gray-400 hover:bg-gray-600"
      >
        <span>{{ item }}</span>
      </div>
    </div>

    <div
      :class="[
        'absolute left-[50%] top-[50%] z-20 w-[50vw] translate-x-[-50%] translate-y-[-50%] rounded bg-blue-100 p-5 text-center text-xl font-bold md:p-16 md:text-3xl ',
        checkWinner ? 'block' : 'hidden'
      ]"
    >
      <h4>Game Over</h4>
      <span class="leading-loose md:leading-[100px]">the winner is {{ checkWinner }}</span
      ><br />
      <ButtonRestart @click="restart" />
    </div>
    <div
      :class="[
        'absolute left-0 top-0 z-10 h-[100vh] w-[100vw] overflow-hidden bg-black opacity-50',
        checkWinner ? 'block' : 'hidden'
      ]"
    ></div>
  </div>
</template>

<style scoped></style>
