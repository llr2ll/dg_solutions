import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
import Edit from './views/Edit.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/add', name: 'Add', component: Add },
    { path: '/edit/:name', name: 'Edit', component: Edit }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')