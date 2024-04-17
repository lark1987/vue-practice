import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/app-layout.vue'
import TodoList from '@/views/TodoList/todolist-index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: 'todolist',
          name: 'todolist',
          component: TodoList
        }
      ]
    }
  ]
})

export default router
