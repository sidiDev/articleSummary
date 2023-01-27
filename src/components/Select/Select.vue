<script setup lang="ts">
interface Props {
  class?: string;
  id?: string;
  containerClass?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="relative" :class="containerClass">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <select
      class="w-full p-2 text-gray-500 bg-white border rounded-md ring-gray-800 focus:ring-2 shadow-sm outline-none appearance-none duration-150"
      :class="class"
      :id="id"
      @change="$emit('change', $event)"
      v-bind="$attrs"
    >
      <slot />
    </select>
  </div>
</template>
