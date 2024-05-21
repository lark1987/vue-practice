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
  <div class="bigbox">
    <div class="info">
      <span>當前玩家：{{ player }}</span>
      <button class="btn" @click="restart">Restart</button>
    </div>

    <div class="box">
      <div v-for="(item, index) in board" :key="index" class="item" @click="makeMove(index)">
        <span>{{ item }}</span>
      </div>
    </div>

    <div :class="['over', checkWinner ? 'block' : 'hidden']">
      <h4>Game Over</h4>
      <span>the winner is {{ checkWinner }}</span
      ><br />
      <button @click="restart">Restart</button>
    </div>
    <div :class="['overlay', checkWinner ? 'block' : 'hidden']"></div>
  </div>
</template>

<style scoped>
.bigbox {
  width: 100vw;
  padding: 5vw;
}

.info {
  display: flex;
  padding-bottom: 10px;
}
.info > span {
  align-self: center;
  flex-grow: 1;
}

button {
  padding: 5px;
  background-color: #9ccacb;
  border-radius: 5px;
}
button:hover {
  background-color: rgb(121, 167, 187);
}

.box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  justify-content: center;
}

.item {
  width: 30vw;
  height: 30vw;
  background-color: lightgray;
  display: grid;
  place-items: center;
  font-size: 20vw;
}
.item:hover {
  background-color: gray;
}

.over {
  position: absolute;
  z-index: 20;
  width: 50vw;

  background-color: aliceblue;
  padding: 10px;
  text-align: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  font-weight: bold;
  font-size: larger;
}
.over > span {
  line-height: 4;
}

.overlay {
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
}
</style>
