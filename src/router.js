import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Details from '@/views/Details'

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
      path: '/:uuid',
      name: 'details',
      component: Details
    }
  ]
})
