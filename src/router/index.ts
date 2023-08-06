import Counter from '@/views/Counter.vue'
import Product from '@/views/Product.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Todo from '@/views/Todo.vue'
import { createRouter, createWebHistory, type Router } from 'vue-router'

const router: Router = createRouter({
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
    },
    {
      path: '/todo-app',
      name: 'todo',
      component: Todo
    }
  ]
})

export default router
