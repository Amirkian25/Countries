import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/index.vue'
import countries from '../pages/countries.vue'
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
      path: '/countries',
      name: 'countries',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: countries
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
