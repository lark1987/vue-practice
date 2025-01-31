import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/app-layout.vue'
import HomePage from '@/views/HomePage/homepage-index.vue'
import TodoList from '@/views/TodoList/todolist-index.vue'
import Carousel from '@/views/Carousel/carousel-index.vue'
import TicTacToe from '@/views/TicTacToe/tic-tac-toe.vue'
import Ajax from '@/views/Ajax/ajax-index.vue'
import Chart from '@/views/Chart/chart-index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/homepage',
    component: Layout,
    children: [
      {
        path: 'homepage',
        name: 'homepage',
        component: HomePage
      },
      {
        path: 'todolist',
        name: 'todolist',
        component: TodoList
      },
      {
        path: 'carousel',
        name: 'carousel',
        component: Carousel
      },
      {
        path: 'tictactoe',
        name: 'tictactoe',
        component: TicTacToe
      },
      {
        path: 'ajax',
        name: 'ajax',
        component: Ajax
      },
      {
        path: 'chart',
        name: 'chart',
        component: Chart
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
