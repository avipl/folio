import { createRouter, createWebHistory } from 'vue-router'
import ProjsView from '../views/ProjsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: ProjsView
    }
  ]
})

export default router
