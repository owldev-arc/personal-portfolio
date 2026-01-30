<script setup lang="ts">
import { ref } from "vue";
import type { Certificate } from "@/types/certificate";

defineProps<{
  cert: Certificate;
  formatDate: (d: string | null) => string;
}>();

const imageError = ref(false);

const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='14'%3EImage unavailable%3C/text%3E%3C/svg%3E";

function handleImageError() {
  imageError.value = true;
}
</script>

<template>
  <article class="cert-card">
    <div class="cert-thumb">
      <img
        :src="imageError ? FALLBACK_IMAGE : cert.image"
        :alt="`Certificate ${cert.title}`"
        loading="lazy"
        @error="handleImageError"
      />
    </div>

    <div class="cert-body">
      <p class="cert-issuer">{{ cert.issuer }}</p>

      <h3 class="cert-title">{{ cert.title }}</h3>

      <p class="cert-date">
        Issued {{ formatDate(cert.issued_at) }}
        <span v-if="cert.expires_at === null">• Lifetime</span>
      </p>

      <a
        v-if="cert.verify"
        :href="cert.verify"
        target="_blank"
        rel="noopener noreferrer"
        class="cert-verify"
      >
        Verify certificate →
      </a>
    </div>
  </article>
</template>

<style scoped>
.cert-card {
  display: flex;
  flex-direction: column;
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 1rem;
  padding: 1rem;
}

.cert-thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #020617;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #1f2937;
}

.cert-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #020617;
}

.cert-body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 0.75rem;
}

.cert-issuer {
  font-size: 0.75rem;
  color: #9ca3af;
}

.cert-title {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
  color: #e5e7eb;
}

.cert-date {
  font-size: 0.75rem;
  color: #9ca3af;
}

.cert-verify {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #818cf8;
  text-decoration: none;
}

.cert-verify:hover {
  text-decoration: underline;
}
</style>
