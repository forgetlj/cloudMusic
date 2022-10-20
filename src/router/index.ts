import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:"index",
      component: ()=>import('@/views/index.vue'),
      redirect:'/discover/right',
      children:[
        {
          path:'discover',
          name:"discover",
          component: ()=>import('@/components/layout/main/main.vue'),
          children:[
            {
              path:'right',
              name:"right",
              component: ()=>import('@/components/layout/main/components/right_box.vue'),
            },
            {
              path:'playListSong',
              name:"playListSong",
              component: ()=>import('@/views/playList.vue'),
            },
          ]
        },
        {
          path:'lyrics',
          name:"lyrics",
          component: ()=>import('@/views/lyrics.vue'),
        }
      ]
    }
  ]
})

export default router
