import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/page/homePage'
import about from '@/components/page/about'
import callRequest from '@/components/page/callRequest'
import dashboard from '@/components/page/dashboard'
import donate from '@/components/page/donate'
import rate from '@/components/page/rate'
import theCall from '@/components/page/theCall'
import tutorial from '@/components/page/tutorial'
import verificationCall from '@/components/page/verificationCall'
import volunteerSignup from '@/components/page/volunteerSignup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/callRequest',
      name: 'callRequest',
      component: callRequest
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/donate',
      name: 'donate',
      component: donate
    },
    {
      path: '/rate/:id',
      name: 'rate',
      component: rate
    },
    {
      path: '/theCall/:id',
      name: 'theCall',
      component: theCall
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: tutorial
    },
    {
      path: '/verificationCall',
      name: 'verificationCall',
      component: verificationCall
    },
    {
      path: '/volunteerSignup',
      name: 'volunteerSignup',
      component: volunteerSignup
    }
  ]
})
