<template>
  <button @click="increment" class="btn btn-outline">
    Increment {{ store.count }}
  </button>
</template>

<script setup>
import useCount from "@/stores/counterStore";

const store = useCount();
const increment = () => {
  store.count++;
};
</script>

<style lang="scss" scoped></style>
