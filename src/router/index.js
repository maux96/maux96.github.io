import { createRouter, createWebHistory } from 'vue-router'
import InfoView from '@/views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return {
      top:50,
      behavior: 'smooth',
      el: to.hash == '' ? 'body' : to.hash
    };
  },
  routes: [
    {
      path: '/',
      name: 'info',
      component: InfoView 
    }
  ]
})

export default router
