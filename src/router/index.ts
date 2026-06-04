import { createRouter, createWebHistory } from 'vue-router';
import CardapioView from '../views/CardapioView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cardapio',
      component: CardapioView,
    },
     {
      path: '/cardapio',
      name: 'cardapio',
      component: CardapioView,
    },
    // {
    //   path: '/',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})




export default router
