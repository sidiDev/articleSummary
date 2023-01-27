<script setup lang="ts">
import type { Component } from "vue";
import IconUrl from "../icons/IconUrl.vue";
import IconLang from "../icons/IconLang.vue";
import IconDoc from "../icons/IconDoc.vue";

type Steps = {
  num: string;
  name: string;
  desc: string;
  icon: Component;
};

const stepsList: Steps[] = [
  {
    num: "01",
    name: "Add your video url",
    desc: "Copy and paste your full video url to genertate the summary.",
    icon: IconUrl,
  },
  {
    num: "02",
    name: "Select your language",
    desc: "Select the language of summary, arabic, english, or french.",
    icon: IconLang,
  },
  {
    num: "02",
    name: "Get your video summary",
    desc: "Congrats your video summary is ready, copy and use it.",
    icon: IconDoc,
  },
];
</script>

<template>
  <section class="custom-screen py-16 text-gray-600 sm:py-28">
    <div class="text-center max-w-xl mx-auto">
      <h2 class="text-gray-800 text-3xl font-bold sm:text-4xl">
        Learn How It Works
      </h2>
      <p class="mt-6">
        Generate your own video summary using this AI tool with just 3 easy
        steps
      </p>
    </div>
    <div class="mt-12 max-w-xs mx-auto md:max-w-4xl">
      <ul class="grid gap-10 md:grid-cols-3">
        <li
          class="relative flex gap-6 lg:block"
          v-for="(step, idx) in stepsList"
          :key="idx"
        >
          <div
            class="flex-none w-10 h-10 rounded-lg border bg-gray-50 flex items-center justify-center"
          >
            <component :is="step.icon"></component>
          </div>
          <span
            v-if="idx + 1 != stepsList.length"
            class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 md:left-auto md:top-[18px] md:h-px md:w-[calc(100%_-_72px)]"
          ></span>
          <div class="space-y-2 md:mt-8">
            <h3 class="font-medium">{{ step.num }}</h3>
            <p class="text-lg text-gray-800 font-semibold">
              {{ step.name }}
            </p>
            <p class="text-sm">
              {{ step.desc }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
