
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store/vuex.store.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  components: { App },
  template: '<App/>'
})
