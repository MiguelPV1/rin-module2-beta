import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     name: 'Login',
//     component: () => import('../views/LoginPage.vue')
//   },
//   {
//     path: '/home',
//     name: 'Home',
//     component: () => import('../views/HomePage.vue'),
//   },
//   {
//     path: '/calendario',
//     name: 'Calendario',
//     component: () => import('../views/CalendarioPage.vue')
//   },
// ]
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'Layout',
    component: () => import('../components/Layout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
      },
      {
        path: '/calendario',
        name: 'Calendario',
        component: () => import('../views/CalendarioPage.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
