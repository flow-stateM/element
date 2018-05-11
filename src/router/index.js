import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {   //首页
        path: '/',
        name: 'index',
        component: Index
    },
    {   //未被定义的都转到首页
        path:'/:error',
        name:'error',
        redirect:Index
    }
  ]
})
