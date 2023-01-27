<script setup>
import IconGithub from "../icons/IconGithub.vue";
import IconTwitter from "../icons/IconTwitter.vue";
</script>

<template>
  <footer class="custom-screen mt-16">
    <div
      className="py-6 border-t items-center justify-between text-center sm:text-end sm:flex"
    >
      <p className="text-gray-700">Powered by ChatGPT and Float UI.</p>
      <div
        className="flex justify-center items-center gap-x-6 text-gray-500 mt-6"
      >
        <a
          href="https://github.com/sidiDev/videoSummary"
          target="_blank"
          class="duration-150"
        >
          <IconGithub class="w-6 h-6 hover:text-gray-800" />
        </a>
        <a
          href="https://twitter.com/sidi_jeddou_dev"
          target="_blank"
          class="duration-150"
        >
          <IconTwitter class="hover:text-gray-800" />
        </a>
      </div>
    </div>
  </footer>
</template>
