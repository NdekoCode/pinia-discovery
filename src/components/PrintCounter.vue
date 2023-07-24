<template>
  <p class="p-1 text-3xl font-bold text-center">
    {{ counter }}
  </p>
</template>

<script setup>
const { counter } = defineProps({
  counter: {
    type: Number,
  },
});
</script>

<style lang="scss" scoped></style>
