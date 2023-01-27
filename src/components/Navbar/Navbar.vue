<script setup>
import Brand from "../Brand/Brand.vue";
import IconGithub from "../icons/IconGithub.vue";
</script>

<template>
  <nav class="border-b">
    <div
      class="custom-screen flex flex-wrap items-center justify-between gap-6 py-6 text-gray-600"
    >
      <router-link to="/">
        <Brand />
      </router-link>
      <ul class="flex-none">
        <li>
          <a
            href="https://github.com/sidiDev/videoSummary"
            target="_blank"
            class="flex items-center gap-x-3 text-sm rounded-full border p-2 hover:bg-gray-50 duration-150"
          >
            <IconGithub />
            Star on GitHub
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
