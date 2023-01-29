<script setup lang="ts">
import Footer from "./components/Footer/Footer.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
import { inject } from "@vercel/analytics";

inject();
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
