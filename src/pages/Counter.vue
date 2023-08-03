<template>
  <div class="flex-col-center">
    <h1 class="my-3 text-xl font-bold font-gray-300">Counter</h1>
    <PrintCounter />
    <CounterButton />
  </div>
</template>

<script setup>
import useCount from "@/stores/counterStore";
import CounterButton from "../components/CounterButton.vue";
import PrintCounter from "../components/PrintCounter.vue";
const store = useCount();
</script>

<style lang="scss" scoped></style>
