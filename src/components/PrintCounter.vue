<template>
  <p class="p-1 text-3xl font-bold text-center">Counter {{ store.count }}</p>
  <p class="p-1 text-3xl font-bold text-center">Double Counter {{ store.doubleCount }}</p>
</template>

<script lang="ts" setup>
import useCount from '@/stores/counterStore'
const store = useCount()
</script>

<style lang="scss" scoped></style>
