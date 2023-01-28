<script setup lang="ts">
interface Props {
  class?: string;
  value?: string | number;
  placeholder?: string;
}
defineProps<Props>();
</script>

<template>
  <input
    class="py-2 px-3 bg-white outline-none border rounded-md ring-gray-800 focus:ring-2 shadow-sm duration-150"
    :class="class"
    :value="value"
    :placeholder="placeholder"
    v-bind="$attrs"
    @input="$emit('input', $event)"
  />
</template>
