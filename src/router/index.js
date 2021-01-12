import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create.vue'

const routes = [
  {
    path: '/:pathMatch(.*)',
    name: 'not found',
    component: () => import('@/views/NotFound')
  },
  {
    path: '/',
    name: 'create',
    component: Create
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/LIst')
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('@/views/Task')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
