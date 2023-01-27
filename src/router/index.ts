import GenerateView from '@/views/GenerateView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeView
    },
    {
      name: "Generate",
      path: "/generate",
      component: GenerateView
    }
  ]
})

export default router
