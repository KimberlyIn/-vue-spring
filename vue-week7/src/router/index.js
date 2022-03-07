import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    parh: '/',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
