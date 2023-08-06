<script lang="ts" setup>
import useTaskStore from '@/stores/tasks'

const taskStore = useTaskStore()
</script>
<template>
  <div class="flex -mx-4">
    <div class="w-1/3 px-4">
      <div class="flex px-4 py-6 bg-white rounded-lg">
        <div class="flex justify-center w-1/3">
          <span class="inline-block text-3xl text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div class="flex flex-col items-center w-2/3">
          <span class="text-2xl">{{ taskStore.completedTasks.length }}</span>
          <span class="">Terminées</span>
        </div>
      </div>
    </div>
    <div class="w-1/3 px-4">
      <div class="flex px-4 py-6 bg-white rounded-lg">
        <div class="flex justify-center w-1/3">
          <span class="text-3xl text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div class="flex flex-col items-center w-2/3">
          <span class="text-2xl">{{ taskStore.unCompletedTasks.length }}</span>
          <span class="">En attente</span>
        </div>
      </div>
    </div>
    <div class="w-1/3 px-4">
      <div class="flex px-4 py-6 bg-white rounded-lg">
        <div class="flex justify-center w-1/3">
          <span class="text-3xl text-gray-700 las la-tasks">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div class="flex flex-col items-center w-2/3">
          <span class="text-2xl">{{ taskStore.tasks.length }}</span>
          <span class="">Total</span>
        </div>
      </div>
    </div>
  </div>
</template>
