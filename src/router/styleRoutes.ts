export default  {
    path: '/styles',
    name: 'Styles',

    component: () => import('../views/components-demo/Index.vue'),
    children: [
      {

        path: 'typography',
        name: 'Text and typography',
        icon:'text',
        component: () => import('../views/styles-demo/Typography.vue'),
      },
  
     
   
      
    ]
  }