import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from '@/views/Layout/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'layout',
      component: Layout
      // children: [
      //   {
      //     path: '/main/self',
      //     name: 'self',
      //     component: () => import ('@/components/self/Self.vue')
      //   },{
      //     path: '/main/will',
      //     name: 'will',
      //     component: () => import ('@/components/will/WillSomething.vue')
      //   }
      // ]
    },
    {
      path: '/finish',
      name: 'finish',
      component: () => import ('@/views/Finish.vue')
    }
  ]
})
