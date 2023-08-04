<template>
  <section class="body-font overflow-hidden bg-white text-gray-700">
    <div class="container mx-auto px-5 py-24">
      <div class="mx-auto flex flex-wrap lg:w-4/5" v-if="product">
        <img
          alt="ecommerce"
          class="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
          :src="product.image"
        />
        <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
          <h1 class="title-font mb-1 text-3xl font-medium text-gray-900">{{ product.title }}</h1>
          <div class="mb-4 flex">
            <span class="ml-2 flex items-center"
              ><svg
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              {{ product.rating?.rate }}</span
            >
            <span class="ml-3 text-gray-600">{{ product.rating?.count }} Reviews</span>
          </div>
          <p class="leading-relaxed">
            {{ product.description }}
          </p>

          <div class="flex mt-5">
            <span class="title-font text-2xl font-medium text-gray-900">${{ product.price }}</span>
            <button
              class="ml-auto flex rounded border-0 bg-red-500 px-6 py-2 text-white hover:bg-red-600 focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { type Product } from '@/libs/utilities/types'
import useProduct from '@/stores/productStore'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
const productStore = useProduct()
const product: Ref<Product | null> = ref(null)
onMounted(() => {
  const { params } = useRoute()
  product.value = productStore.products.find((p) => p.id === +params.id) as Product
  console.log(product.value)
})
</script>

<style lang="scss" scoped></style>
