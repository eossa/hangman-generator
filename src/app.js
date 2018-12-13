import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Index from './routes/index'
import Hangman from './routes/hangman'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/hangman', name: 'hangman', component: Hangman }
]

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: { message: localStorage.getItem('message') || '' },
  mutations: {
    updateMessage (state, message) {
      state.message = message
      localStorage.setItem('message', message)
    }
  }
})

new Vue({ // eslint-disable-line no-new
  router,
  store
}).$mount('#app')
