import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/ocean',
    name: 'Ocean',
    component: loadPage('OceanPage')
  },
  {
    path: '/moon',
    name: 'Moon',
    component: loadPage('MoonPage'),
  },
  {
    path: '/neon',
    name: 'Neon',
    component: loadPage('NeonPage'),
  },
  {
    path: '/universe',
    name: 'Universe',
    component: loadPage('UniversePage'),
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
