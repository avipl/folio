import { createRouter, createWebHistory } from 'vue-router'
import CourseWorkView from '../views/CourseWorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'course work',
      component: CourseWorkView
    },
    {
      path: '/proj_work',
      name: 'project work',
      component: () => import('../views/ProjWorkView.vue')
    }
  ]
})

export default router
