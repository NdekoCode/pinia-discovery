import { type Product } from '@/libs/utilities/types'
import { defineStore } from 'pinia'

type ProductStore = {
  products: Product[]
}
const useProduct = defineStore('products', {
  state: (): ProductStore => ({ products: [] }),
  actions: {
    async fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      this.products = products
      console.log(products)
    }
  },
  getters: {}
})
export default useProduct
