<template>
  <div
    class="relative min-w-[250px] max-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer"
  >
    <div class="overflow-x-hidden rounded-2xl relative">
      <img class="h-40 rounded-2xl w-full object-cover" :src="product.image" :alt="product.title" />
      <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover:opacity-50 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </p>
    </div>
    <div class="mt-4 pl-2 mb-2 flex justify-between">
      <div>
        <p class="text-lg flex items-center justify-between font-semibold text-gray-900 mb-0">
          {{ product.title }}
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
        </p>
        <p class="text-md text-gray-800 mt-0">${{ product.price }}</p>
      </div>
      <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover:opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
    <router-link
      class="absolute inset-0 opacity-0"
      :to="{ name: 'product.read', params: { id: product.id } }"
    />
  </div>
</template>

<script lang="ts" setup>
import { type Product } from '../libs/utilities/types'
const { product } = defineProps<{ product: Product }>()
</script>

<style lang="scss" scoped></style>
