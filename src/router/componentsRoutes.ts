export default {
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
      name: 'Breadcrumbs',
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
      children: [
        {
          path: 'inputs',
          name: 'Inputs',
          component: () => import('../views/components-demo/forms/Inputs.vue'),
        },
        {
          path: 'checkboxes',
          name: 'Checkboxes',
          component: () => import('../views/components-demo/forms/Checkboxes.vue'),
        },
        {
          path: 'radio-buttons',
          name: 'Radio buttons',
          component: () => import('../views/components-demo/forms/RadioButtons.vue'),
        },
        {
          path: 'selects',
          name: 'Selects',
          component: () => import('../views/components-demo/forms/Selects.vue'),
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
    {

      path: 'tooltips',
      name: 'Tooltips',
      component: () => import('../views/components-demo/Tooltips.vue'),
    },
  ]
}