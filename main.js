import './assets/style.css'

import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

const head = createHead()
const app = createApp(App)

app.use( createRouter({ history: createWebHistory() }) )
app.use(head)
app.mount('#app')