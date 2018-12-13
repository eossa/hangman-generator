import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './routes/index'
import Hangman from './routes/hangman'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/hangman/:message', name: 'hangman', component: Hangman, props: true }
]

const router = new VueRouter({
  routes
})

new Vue({ // eslint-disable-line no-new
  router
}).$mount('#app')
