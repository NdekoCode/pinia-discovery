<script lang="ts" setup>
import useTaskStore from '@/stores/tasks'
const taskStore = useTaskStore()
</script>

<template>
  <div class="join">
    <button
      class="join-item btn"
      :class="taskStore.filter === 'all' && 'active'"
      @click="taskStore.filter = 'all'"
    >
      Toutes
    </button>
    <button
      class="join-item btn btn-active"
      :class="taskStore.filter === 'finished' && 'active'"
      @click="taskStore.filter = 'finished'"
    >
      Terminer
    </button>
    <button
      class="join-item btn"
      :class="taskStore.filter === 'unfinished' && 'active'"
      @click="taskStore.filter = 'unfinished'"
    >
      En attente
    </button>
  </div>
</template>
<style lang="scss" scoped>
.active {
  background-color: #333;
  color: #fff;
}
</style>
