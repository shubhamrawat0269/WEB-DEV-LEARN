import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
{ path: '/about', component: About },
  { path: '/', component: Home },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
