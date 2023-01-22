import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './index.js'
import UserStore from './components/store/UserStore.js'
import ProductStore from './components/store/ProductStore.js'
import CartStore from './components/store/CartStore.js'

Vue.use(Vuex)
Vue.use(VueRouter)
// function checkLogin(user) {
//   if (localStorage.getItem('user') === null || localStorage.getItem('user') === "{}") {
//     localStorage.setItem('user', JSON.stringify(user))
//   }
//   return JSON.parse(localStorage.getItem('user'))

// }

const store = new Vuex.Store({
  modules:
  {
    UserStore,ProductStore,CartStore
  },
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
