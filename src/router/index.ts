import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

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
        path: 'forms',
        name: 'Forms',
        component: () => import('../views/components-demo/forms/index.vue'),
        children:[
          {
            path: 'inputs',
            name: 'Inputs',
            component: () => import('../views/components-demo/forms/Inputs.vue'),
          }
        ]
      }
      ,
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
  },
  
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Index.vue'),
    meta:{layout:'admin-layout'}
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
