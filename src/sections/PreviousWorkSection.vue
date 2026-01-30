<script setup lang="ts">
import { ref, computed, watch } from "vue";
import works from "@/data/previousWork.json";

const PAGE_SIZE = 3;
const page = ref(1);

const totalPages = computed(() => Math.ceil(works.length / PAGE_SIZE));

const paginatedWorks = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE;
  return works.slice(start, start + PAGE_SIZE);
});

watch(page, (val) => {
  if (val < 1) page.value = 1;
  if (val > totalPages.value) page.value = totalPages.value;
});
</script>

<template>
  <section
    id="previous-work"
    class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800"
  >
    <h2 class="text-3xl font-bold">
      Previous Work
      <span class="ml-2 text-base text-gray-500">(Archived)</span>
    </h2>

    <p class="mt-4 max-w-3xl text-gray-400 leading-relaxed">
      Selected screenshots from earlier projects that provide context on my
      hands-on experience and technical growth.
    </p>

    <div class="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="work in paginatedWorks" :key="work.id" class="work-card">
        <div class="work-thumb">
          <img :src="work.image" :alt="work.title" loading="lazy" />
        </div>

        <h4 class="mt-3 text-sm font-semibold">
          {{ work.title }}
        </h4>

        <p class="mt-1 text-xs text-gray-400">
          {{ work.type }} • {{ work.year }}
        </p>

        <p class="mt-2 text-xs text-gray-400 leading-relaxed">
          {{ work.description }}
        </p>

        <div class="mt-3 flex flex-wrap gap-1">
          <span v-for="item in work.scope" :key="item" class="scope-pill">
            {{ item }}
          </span>
        </div>

        <div class="mt-2 flex flex-wrap gap-1">
          <span v-for="tech in work.tech" :key="tech" class="tech-pill">
            {{ tech }}
          </span>
        </div>

        <span v-if="work.status === 'archived'" class="work-status">
          Archived
        </span>
      </div>
    </div>

    <div v-if="totalPages > 1" class="pager">
      <button @click="page--" :disabled="page === 1">Prev</button>

      <span class="text-gray-400 text-sm"> {{ page }} / {{ totalPages }} </span>

      <button @click="page++" :disabled="page === totalPages">Next</button>
    </div>
  </section>
</template>

<style scoped>
.work-card {
  display: flex;
  flex-direction: column;
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 1rem;
  padding: 1rem;
}

.work-thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #020617;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #1f2937;
}

.work-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: #020617;
}

.scope-pill {
  background: #1f2937;
  color: #9ca3af;
  font-size: 0.65rem;
  padding: 0.2rem 0.45rem;
  border-radius: 999px;
}

.tech-pill {
  background: rgba(0, 0, 0, 0.3);
  color: #6b7280;
  font-size: 0.65rem;
  padding: 0.2rem 0.45rem;
  border-radius: 999px;
}

.work-status {
  align-self: flex-start;
  margin-top: 0.75rem;

  font-size: 0.6rem;
  line-height: 1;
  padding: 0.25rem 0.45rem;

  border-radius: 999px;
  background: rgba(148, 163, 184, 0.08);
  color: #9ca3af;
  border: 1px solid #1f2937;

  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.pager {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pager button {
  border: 1px solid #374151;
  background: transparent;
  color: #9ca3af;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
}

.pager button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
