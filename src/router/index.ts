import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import componentsRoutes from './componentsRoutes'
import layoutCompRoutes from './layoutCompRoutes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{layout:'default-layout'}
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue'),
    meta:{layout:'default-layout'}
  },
  componentsRoutes,layoutCompRoutes,
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Index.vue'),
    meta:{layout:'dashboard-layout'}
  },
  {
    path: '/demos',
    name: 'Demo',
    component: () => import('../views/Demos.vue'),
    meta:{layout:'default-layout'}
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta:{layout:'default-layout'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
