import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/landing',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/generic',
    name: 'Generic',
    component: () => import('../views/Generic.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router