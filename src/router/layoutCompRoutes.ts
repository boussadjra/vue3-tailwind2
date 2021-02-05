export default  {
    path: '/layouts',
    name: 'Layouts',

    component: () => import('../views/components-demo/Index.vue'),
    children: [
      {

        path: 'aspect-ratio',
        name: 'Aspect Ratio',
        component: () => import('../views/layouts-demo/AspectRatios.vue'),
      },
      {

        path: 'container',
        name: 'Container',
        component: () => import('../views/layouts-demo/Containers.vue'),
      },
      {

        path: 'flex',
        name: 'Flex',
        component: () => import('../views/layouts-demo/Flex.vue'),
      },
      {

        path: 'grid',
        name: 'Grid',
        component: () => import('../views/layouts-demo/Grid.vue'),
      },
     
   
      
    ]
  }