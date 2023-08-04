<template>
  <button @click="store.increment" class="mb-2 btn btn-outline">Increment {{ store.count }}</button>
  <button @click="store.reset()" class="btn btn-outline">Reset compter</button>
</template>

<script lang="ts" setup>
import useCount from '@/stores/counterStore'

const store = useCount()
const { increment } = store
</script>

<style lang="scss" scoped></style>
