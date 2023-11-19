import './assets/style.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import router from './router'

const head = createHead()
const app = createApp(App)

app.use(router)
app.use(head)
app.mount('#app')