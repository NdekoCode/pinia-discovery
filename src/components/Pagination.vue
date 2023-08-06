<script setup lang="ts">
import useTaskStore from '@/stores/tasks'

const tasksStore = useTaskStore()
</script>
<template>
  <div class="join">
    <button
      class="join-item btn"
      @click="tasksStore.decrementCurrentPage()"
      :disabled="tasksStore.currentPage === 1"
    >
      «
    </button>
    <button class="join-item btn">Page {{ tasksStore.currentPage }}</button>
    <button
      class="join-item btn"
      @click="tasksStore.incrementCurrentPage()"
      :disabled="tasksStore.currentPage === tasksStore.pageSize"
    >
      »
    </button>
  </div>
</template>
