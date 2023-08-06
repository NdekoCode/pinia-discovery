<template>
  <form class="px-16 flex flex-col justify-center h-full">
    <h1 class="text-3xl font-semibold mb-10">Task</h1>
    <div class="mb-6">
      <input
        name="tatl"
        placeholder="Name"
        class="inline-flex w-full px-2 py-3 rounded-lg border-2 border-gray-300 focus:outline-none"
      />
    </div>
    <div class="mb-6">
      <textarea
        name="description"
        placeholder="Description of the task"
        class="inline-flex w-full px-3 py-4 rounded-lg border-2 border-gray-300 focus:outline-none"
        rows="6"
      ></textarea>
    </div>
    <div class="mb-6">
      <button class="bg-blue-100 text-blue-600 font-semibold px-6 py-3 rounded mr-2" type="submit">
        Créer
      </button>
      <button class="bg-red-100 text-red-600 px-6 py-3 rounded font-semibold">Annuler</button>
    </div>
  </form>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
