import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/app-layout.vue'
import HomePage from '@/views/HomePage/homepage-index.vue'
import TodoList from '@/views/TodoList/todolist-index.vue'
import Carousel from '@/views/Carousel/carousel-index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        }
      ]
    }
  ]
})

export default router
