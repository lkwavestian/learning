// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/home.vue'),
  },
  {
    path: '/refAndReactive',
    component: () => import('@/refAndReactive.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
