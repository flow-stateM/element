// import Vue from 'vue'
import Vue from 'vue'
import Vuex from 'vuex'
import index from '@/store/index.store.js'

Vue.use(Vuex)

let store = new Vuex.Store({
    modules:{
        index:index,
    }
})

export default store