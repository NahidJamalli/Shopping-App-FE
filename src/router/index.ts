import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from '../components/ProductPage.vue';
import Cart from '../components/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
