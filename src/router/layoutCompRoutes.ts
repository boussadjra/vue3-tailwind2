export default  {
    path: '/layouts',
    name: 'Layouts',

    component: () => import('../views/components-demo/Index.vue'),
    children: [
      {

        path: 'aspect-ratio',
        name: 'Aspect Ration',
        component: () => import('../views/layouts-demo/AspectRatios.vue'),
      },
      {

        path: 'container',
        name: 'Container',
        component: () => import('../views/layouts-demo/Containers.vue'),
      },
     
   
      
    ]
  }