import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import petFood from '../components/petFood/petFood.vue'
import healthy from '../components/healthy/healthy.vue'
import toy from '../components/toy/toy.vue'
import dailyUse from '../components/dailyUse/dailyUse.vue'

import myLocation from '../components/myLocation/myLocation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/healthy',
      component: healthy
    },
    {
      path: '/toy',
      component: toy
    },
    {
      path: '/dailyUse',
      component: dailyUse
    },
    {
      path: '/petFood',
      component: petFood
    },
    {
      path: '/myLocation',
      component: myLocation
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
