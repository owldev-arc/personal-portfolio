<script setup lang="ts">
const EMAIL = "job.csaepudin@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/cecep-saepudin-7409712b6/";
const CV_URL = "/cv/Cecep-Saepudin-Frontend-Developer.pdf";
</script>

<template>
  <section
    id="contact"
    class="max-w-6xl mx-auto px-6 py-28 border-t border-gray-800"
  >
    <h2 class="text-3xl font-bold">Contact</h2>

    <p class="mt-4 max-w-xl text-gray-400 leading-relaxed">
      Open to frontend-focused or fullstack roles, freelance projects, and
      remote opportunities.
    </p>

    <div class="mt-10 flex flex-wrap gap-4">
      <a
        :href="`mailto:${EMAIL}`"
        class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500 transition"
      >
        Contact via Email
      </a>

      <a
        :href="LINKEDIN_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm text-gray-300 hover:border-gray-500 transition"
      >
        View LinkedIn Profile
      </a>

      <a
        :href="CV_URL"
        download
        class="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm text-gray-300 hover:border-gray-500 transition"
      >
        Download CV (PDF)
      </a>
    </div>

    <div class="mt-10 text-sm text-gray-500 space-y-1">
      <p>Based in Indonesia 🇮🇩</p>
      <p>Open to remote opportunities</p>
      <p>Primary stack: Frontend (Vue) • Backend-capable (Laravel)</p>
    </div>
  </section>
</template>
