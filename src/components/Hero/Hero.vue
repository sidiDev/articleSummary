<template>
  <section class="custom-screen py-24">
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <h1 className="text-gray-800 font-bold text-4xl sm:text-6xl">
        Generate your article summary
        <span
          class="text-transparent bg-clip-text h-14 bg-gradient-to-r from-purple-500 to-pink-500"
        >
          using AI
        </span>
      </h1>
      <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
        Article summary is a web-based tool that automatically creates a short
        summary of any article, to quickly share the main points of the Article.
      </p>
      <div>
        <router-link
          to="/generate"
          class="inline-flex items-center gap-x-2 py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium duration-150 sm:text-sm sm:py-2.5"
        >
          Generate a summary
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
