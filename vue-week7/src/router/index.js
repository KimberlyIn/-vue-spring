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
      {
        path: 'orders',
        component: () => import('../views/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/Article.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'articles',
        component: () => import('../views/UserArticles.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
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
