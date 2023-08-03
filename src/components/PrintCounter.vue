<template>
  <p class="p-1 text-3xl font-bold text-center">
    {{ store.count }}
  </p>
</template>

<script lang="ts" setup>
import useCount from "@/stores/counterStore";
const store = useCount();
</script>

<style lang="scss" scoped></style>
