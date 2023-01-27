<script setup lang="ts">
import Label from "../components/Label/Label.vue";
import Input from "../components/Input/Input.vue";
import Select from "../components/Select/Select.vue";
import { ref } from "vue";
import generateSummary from "@/lib/generateSummary";

const videoUrl = ref<string>("");
const language = ref<string>("eng");

const handleSubmit: EventListener = async () => {
  console.log(
    await generateSummary(
      `Generate a summary from this article: ${videoUrl.value}`
    )
  );
};
</script>

<template>
  <section class="py-24">
    <div class="text-center">
      <h1 class="text-4xl font-bold">Generate your article summary</h1>
    </div>
    <form
      @submit.prevent="handleSubmit"
      class="max-w-lg mx-auto mt-16 space-y-6 text-gray-600"
    >
      <div>
        <Label for="url"> Enter article URL </Label>
        <Input
          required
          type="text"
          placeholder="https://floatui.com/blog/what-is-new-in-float-ui"
          class="w-full mt-2"
          @input="videoUrl = $event.target.value"
          id="url"
        />
      </div>
      <div>
        <Label for="lang"> Select your language </Label>
        <Select
          id="lang"
          container-class="mt-2"
          @change="language = $event.target.value"
        >
          <option value="eng">English</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
        </Select>
      </div>
      <div>
        <button
          type="submit"
          class="w-full py-2 bg-gray-800 hover:bg-gray-700 font-medium text-white rounded-lg ring-gray-800 ring-offset-2 focus:ring duration-150"
        >
          Generate
        </button>
      </div>
    </form>
  </section>
</template>
