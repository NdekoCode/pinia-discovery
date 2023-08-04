<template>
  <div class="container mx-auto px-3 lg:px-0">
    <div
      class="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
      v-if="productStore.products"
    >
      <product-item v-for="product in productStore.products" :product="product"></product-item>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductItem from '@/components/ProductItem.vue'
import { onMounted } from 'vue'
import useProduct from '../stores/productStore'
onMounted(() => productStore.fetchProducts())
const productStore = useProduct()
</script>

<style lang="scss" scoped></style>
