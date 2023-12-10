export default {
        path: '/hire',
        name: 'hire',
        children:[
                {
                        path:"",
                        component:()=> import('./views/WorkerCategoryView.vue')
                },
                {
                        path:":name",
                        
                        
                        children:[
                                {
                                        path:"",
                                        component:()=> import('./views/WorkerListView.vue'),
                                },
                                {
                                        path:":id",
                                        children:[
                                                {
                                                        path:"",
                                                        component:()=> import("./views/WorkerView.vue"),
                                                }
                                        ]
                                }
                                

                        ]
                },

        ]
}