<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  summary?: string;
  isLoading?: boolean;
  lang?: string;
}

const props = defineProps<Props>();

const articleSummary = ref<string>("");
const counter = ref<number>(0);
const generatedArtcileRef = ref<HTMLElement>();

// Create smooth typing effect
watch(
  () => props.summary,
  (summary) => {
    generatedArtcileRef.value?.scrollIntoView({ behavior: "smooth" });
    const updateCounter = setInterval(() => {
      articleSummary.value += summary?.charAt(counter.value - 1);
      counter.value++;
      if (counter.value == summary?.length) {
        clearInterval(updateCounter);
      }
    }, 5);
  }
);

watch(
  () => props.isLoading,
  (isLoading) => {
    articleSummary.value = "";
    counter.value = 0;
  }
);
</script>

<template>
  <section ref="generatedArtcileRef" class="custom-screen">
    <div v-if="articleSummary.length > 0">
      <h2 class="text-2xl text-gray-800 font-semibold text-center">
        Your generated summary
      </h2>
      <div
        class="mt-6 p-4 shadow border rounded-lg text-gray-700 w-full inline-block"
      >
        <p :dir="lang == 'ar' ? 'rtl' : ''" class="relative">
          {{ articleSummary }}
        </p>
      </div>
    </div>
  </section>
</template>
