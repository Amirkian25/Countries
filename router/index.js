import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/index.vue'
import countryDetails from '../pages/countryDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/:id',
        name: 'countryDetails',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: countryDetails
      }
  ]
})

export default router
