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
      redirect: '/main/self',
      component: Layout,
      children: [
        {
          path: '/main/self',
          name: 'self',
          component: () => import ('@/components/self/Self.vue')
        },{
          path: '/main/did',
          name: 'did',
          component: () => import ('@/components/did/DidSomething.vue')
        },{
          path: '/main/will',
          name: 'will',
          component: () => import ('@/components/will/WillSomething.vue')
        },{
          path: '/main/solo',
          name: 'solo',
          component: () => import ('@/components/solo/Solo.vue')
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
