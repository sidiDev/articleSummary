<script setup lang="ts">
import GeneratedArticle from "../components/GeneratedArticle/GeneratedArticle.vue";
import IconSpinner from "../components/icons/IconSpinner.vue";
import Label from "../components/Label/Label.vue";
import Input from "../components/Input/Input.vue";
import Select from "../components/Select/Select.vue";
import { ref } from "vue";
import generateSummary from "@/lib/generateSummary";

type Langs = {
  eng: string;
  ar: string;
  fr: string;
};

const articleUrl = ref<string>("");
const urlError = ref<string>("");
const language = ref<any>("eng");
const isLoading = ref<boolean>(false);
const articleSummary = ref<string | undefined>("");

const urlValidator = (url: string) => {
  const urlRegEx: RegExp =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  if (url.match(urlRegEx)) return true;
  else return false;
};

const handleSubmit: EventListener = () => {
  urlError.value = "";
  if (urlValidator(articleUrl.value)) {
    const langs: Langs = {
      eng: "Write a professional summary for this article",
      ar: "اكتب ملخصًا احترافيًا لهذه المقالة",
      fr: "Rédigez un résumé professionnel pour cet article",
    };

    if (!isLoading.value) {
      isLoading.value = true;
      generateSummary(`${langs[language.value]}: ${articleUrl.value}`).then(
        (summary) => {
          articleSummary.value = summary;
          isLoading.value = false;
        }
      );
    }
  } else urlError.value = "Please enter a correct url";
};
</script>

<template>
  <div class="max-w-xl mx-auto">
    <section class="custom-screen py-24">
      <div class="text-center">
        <h1 class="text-4xl font-bold">Generate your article summary</h1>
      </div>
      <form
        @submit.prevent="handleSubmit"
        class="mt-16 space-y-6 text-gray-600"
      >
        <div>
          <Label for="url"> Enter article URL </Label>
          <Input
            required
            autocomplete="off"
            type="text"
            placeholder="https://floatui.com/blog/what-is-new-in-float-ui"
            class="w-full mt-2"
            @input="articleUrl = $event.target.value"
            id="url"
          />
          <span v-if="urlError" class="block text-sm text-red-600 mt-2">{{
            urlError
          }}</span>
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
            :class="isLoading ? 'cursor-not-allowed' : ''"
          >
            <IconSpinner v-if="isLoading" class="mx-auto my-1" />
            <span v-else> Generate </span>
          </button>
        </div>
      </form>
    </section>
    <GeneratedArticle
      :summary="articleSummary"
      :isLoading="isLoading"
      :lang="language"
    />
  </div>
</template>
