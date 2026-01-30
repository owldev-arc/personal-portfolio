<script setup lang="ts">
import { ref } from "vue";
import type { Work } from "@/types/work";

defineProps<{
  work: Work;
}>();

const imageError = ref(false);

const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='14'%3EImage unavailable%3C/text%3E%3C/svg%3E";

function handleImageError() {
  imageError.value = true;
}
</script>

<template>
  <div
    class="rounded-xl border border-gray-800 bg-gray-900 p-4 hover:border-gray-700 transition"
  >
    <div class="work-thumb">
      <img
        :src="imageError ? FALLBACK_IMAGE : work.image"
        :alt="work.title"
        loading="lazy"
        @error="handleImageError"
      />
    </div>

    <h4 class="mt-3 text-sm font-semibold">
      {{ work.title }}
    </h4>

    <p class="mt-1 text-xs text-gray-400">{{ work.type }} • {{ work.year }}</p>

    <p class="mt-2 text-xs text-gray-400 leading-relaxed">
      {{ work.description }}
    </p>

    <div class="mt-3 flex flex-wrap gap-1">
      <span
        v-for="item in work.scope"
        :key="item"
        class="rounded-full bg-gray-800 px-2 py-0.5 text-[11px] text-gray-400"
      >
        {{ item }}
      </span>
    </div>

    <div class="mt-2 flex flex-wrap gap-1">
      <span
        v-for="tech in work.tech"
        :key="tech"
        class="rounded-full bg-black/30 px-2 py-0.5 text-[11px] text-gray-500"
      >
        {{ tech }}
      </span>
    </div>

    <span
      v-if="work.status === 'archived'"
      class="mt-3 inline-block rounded-full bg-gray-800 px-2 py-0.5 text-[11px] text-gray-400"
    >
      Archived
    </span>
  </div>
</template>

<style scoped>
.work-thumb {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #020617;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #1f2937;
}

.work-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

div:hover .work-thumb img {
  transform: scale(1.04);
}
</style>
