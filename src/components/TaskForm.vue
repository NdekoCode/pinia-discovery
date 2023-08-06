<script lang="ts" setup>
import useTaskStore from '@/stores/tasks'
import { reactive } from 'vue'
const taskStore = useTaskStore()
const task = reactive({
  title: '',
  description: ''
})
const addTask = (event: Event) => {
  if (task.title.trim().length > 1 && task.description.trim().length > 5) {
    taskStore.addTask(task)
    task.title = ''
    task.description = ''
  }
}
</script>
<template>
  <form class="flex flex-col justify-center px-16" @submit.prevent="addTask">
    <h1 class="mb-10 text-3xl font-semibold">Task</h1>
    <div class="mb-6">
      <input
        name="title"
        v-model="task.title"
        placeholder="Name"
        class="inline-flex w-full px-2 py-3 border-2 border-gray-300 rounded-lg focus:outline-none"
      />
    </div>
    <div class="mb-6">
      <textarea
        name="description"
        placeholder="Description of the task"
        v-model="task.description"
        class="inline-flex w-full px-3 py-4 border-2 border-gray-300 rounded-lg focus:outline-none"
        rows="6"
      ></textarea>
    </div>
    <div class="mb-6">
      <button class="px-6 py-3 mr-2 font-semibold text-blue-600 bg-blue-100 rounded" type="submit">
        Créer
      </button>
      <button class="px-6 py-3 font-semibold text-red-600 bg-red-100 rounded">Annuler</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
