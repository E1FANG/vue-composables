import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../views/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login',
      component:LoginForm
    },
    {
      path:'/userPage',
      component: () => import('../views/UserPage.vue')
    },
    {
      path:'/product',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path:'/card',
      component: () => import('../views/CardPage.vue')
    }
  ]
})

export default router
