<script lang="ts" setup>
import type { Tasks } from '@/libs/utilities/types'
import useTaskStore from '@/stores/tasks'
import type { SubscriptionCallbackMutation } from 'pinia'
import { reactive, ref, type DebuggerEvent, type Ref } from 'vue'
import { type Task } from '../libs/utilities/types'
const taskStore = useTaskStore()
const task = reactive({
  title: '',
  description: ''
})
const selectedTask: Ref<Task | null> = ref(null)
const addTask = (event: Event) => {
  if (selectedTask.value) {
    const dataEdit = { ...selectedTask.value, title: task.title, description: task.description }
    taskStore.editSelectedTask(dataEdit)
    selectedTask.value = null
    task.title = ''
    task.description = ''
  } else {
    if (task.title.trim().length > 1 && task.description.trim().length > 5) {
      taskStore.addTask(task)
      task.title = ''
      task.description = ''
    }
  }
}
taskStore.$subscribe((mutation: SubscriptionCallbackMutation<Tasks>) => {
  const events: DebuggerEvent = mutation.events as DebuggerEvent
  const target = events.target as Tasks
  selectedTask.value = target.selectedTask as Task
  if (selectedTask.value) {
    task.title = selectedTask.value.title
    task.description = selectedTask.value.description
  }
})
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
