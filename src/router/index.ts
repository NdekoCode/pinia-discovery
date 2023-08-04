import Counter from '@/views/Counter.vue'
import Product from '@/views/Product.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Counter
    },
    {
      path: '/products',
      name: 'product',
      component: Product
    },
    {
      path: '/products/:id',
      component: ProductDetails,
      name: 'product.read'
    }
  ]
})

export default router
