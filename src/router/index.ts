import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:"index",
      component: ()=>import('@/views/index.vue'),
      redirect:'/discover',
      children:[
        {
          path:'discover',
          name:"discover",
          component: ()=>import('@/components/layout/main/components/right_box.vue'),
        },
        {
          path:'playListSong',
          name:"playListSong",
          component: ()=>import('@/views/playList.vue'),
        },
      ]
    }
  ]
})

export default router
