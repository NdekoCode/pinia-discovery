<script lang="ts" setup>
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'
import TaskStats from '@/components/TaskStats.vue'
import useTaskStore from '@/stores/tasks'
import { onMounted } from 'vue'
const taskStore = useTaskStore()
onMounted(async () => {
  await taskStore.fetchTasks()
  taskStore.currentPageItem()
})
</script>

<template>
  <div class="flex min-h-screen">
    <div class="w-3/5 py-20 bg-slate-200">
      <div class="w-4/5 mx-auto">
        <task-stats />
        <task-list />
      </div>
    </div>
    <div class="w-2/5 py-10 bg-white">
      <task-form />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
