import Vue from 'vue'
import Router from 'vue-router'
import C_HomePage from '@/components/P_Homepage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'P_Homepage',
      component: C_HomePage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
