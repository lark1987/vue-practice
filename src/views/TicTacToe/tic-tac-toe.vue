<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const board = ref(Array(9))
const player = ref('O')
const winner = ref()

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
  if (player.value === 'O') {
    board.value[index] = 'O'
    player.value = 'X'
  } else if (player.value === 'X') {
    board.value[index] = 'X'
    player.value = 'O'
  }
}
function restart() {
  board.value = Array(9)
  player.value = 'O'
  winner.value = ''
}

const checkWinner = computed(() => {
  winningCombinations.some((combination) => {
    const [a, b, c] = combination
    if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
      winner.value = board.value[a]
      return true
    }
    return false
  })
  return winner.value
})
// 這邊測試中
watch(winner, (value) => {
  if (value) {
    console.log(value)
  }
})
</script>

<template>
  <div class="bigbox w-[100vw] p-[5vw] md:flex">
    <div class="info flex pb-10 md:order-1 md:block md:text-center">
      <span class="grow self-center md:leading-10">當前玩家：{{ player }}</span
      ><br />
      <button class="btn" @click="restart">Restart</button>
    </div>

    <div
      class="box grid grid-cols-[30vw,30vw,30vw] grid-rows-[30vw,30vw,30vw] justify-center gap-1.5 md:w-[50vw] md:grid-cols-[15vw,15vw,15vw] md:grid-rows-[15vw,15vw,15vw]"
    >
      <div
        v-for="(item, index) in board"
        :key="index"
        @click="makeMove(index)"
        class="item grid h-full w-full place-items-center bg-gray-400 text-[20vw] hover:bg-gray-600 md:text-[10vw]"
      >
        <span>{{ item }}</span>
      </div>
    </div>

    <div
      :class="[
        'over absolute left-[50%] top-[50%] z-20 w-[50vw] translate-x-[-50%] translate-y-[-50%] rounded bg-blue-100 p-5 text-center text-xl font-bold ',
        checkWinner ? 'block' : 'hidden'
      ]"
    >
      <h4>Game Over</h4>
      <span class="leading-loose">the winner is {{ checkWinner }}</span
      ><br />
      <button @click="restart">Restart</button>
    </div>
    <div
      :class="[
        'overlay absolute left-0 top-0 z-10 h-[100vh] w-[100vw] overflow-hidden bg-black opacity-50',
        checkWinner ? 'block' : 'hidden'
      ]"
    ></div>
  </div>
</template>

<style scoped>
button {
  padding: 5px;
  background-color: #9ccacb;
  border-radius: 5px;
}
button:hover {
  background-color: rgb(121, 167, 187);
}
</style>
