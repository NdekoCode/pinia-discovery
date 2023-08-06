<script lang="ts" setup>
import Pagination from '@/components/Pagination.vue'
import useTaskStore from '@/stores/tasks'
const taskStore = useTaskStore()
</script>
<template>
  <div class="py-6">
    <h1 class="mt-10 mb-4 text-4xl">Taches</h1>
    <div>
      <div
        class="flex px-4 py-4 mb-4 bg-white rounded-lg"
        v-for="task of taskStore.currenttasksItem"
        :key="task.id"
      >
        <div class="relative mr-2">
          <div class="mr-2 round">
            <input type="checkbox" v-model="task.completed" id="task-id" name="task" />
            <label :for="'task-' + task.id"></label>
          </div>
        </div>
        <div class="w-full pl-4">
          <span class="text-xl font-semibold">{{ task.title }}</span>
          <p class="w-full text-sm text-gray-500">{{ task.description }}</p>
          <div class="flex justify-end mt-4">
            <button
              class="flex flex-col items-center justify-center mr-2 text-blue-700 bg-blue-100 rounded w-7 h-7"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                id="_24x24_On_Light_Edit"
                data-name="24x24/On Light/Edit"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect id="view-box" width="24" height="24" fill="none" />
                <path
                  id="Shape"
                  d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z"
                  transform="translate(3.25 3.25)"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              class="flex flex-col items-center justify-center text-red-700 bg-red-100 rounded w-7 h-7"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex px-4 py-4 mb-4 bg-white rounded-lg">
        <pagination />
      </div>
    </div>
  </div>
</template>
