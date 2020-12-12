import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/components',
    name: 'Components',

    component: () => import('../views/components-demo/Index.vue'),
    children: [
      {

        path: 'alerts',
        name: 'Alerts',
        component: () => import('../views/components-demo/Alerts.vue'),
      },
      {

        path: 'avatars',
        name: 'Avatars',
        component: () => import('../views/components-demo/Avatars.vue'),
      },
      {

        path: 'badges',
        name: 'Badges',
        component: () => import('../views/components-demo/Badges.vue'),
      },
      {

        path: 'breadcrumbs',
        name: 'breadcrumbs',
        component: () => import('../views/components-demo/Breadcrumbs.vue'),
      },
      {

        path: 'buttons',
        name: 'Buttons',
        component: () => import('../views/components-demo/Buttons.vue'),
      },
      {

        path: 'cards',
        name: 'Cards',
        component: () => import('../views/components-demo/Cards.vue'),
      },
      {

        path: 'chips',
        name: 'Chips',
        component: () => import('../views/components-demo/Chips.vue'),
      },
      {

        path: 'icons',
        name: 'Icons',
        component: () => import('../views/components-demo/Icons.vue'),
      },
      {

        path: 'tabs',
        name: 'Tabs',
        component: () => import('../views/components-demo/Tabs.vue'),
      },
    ]
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
