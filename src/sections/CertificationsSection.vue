<script setup lang="ts">
import { useCertificates } from "@/composables/useCertificates";
import CertificateCard from "@/components/CertificateCard.vue";

const {
  ISSUERS,
  activeIssuer,
  page,
  paginatedCertificates,
  totalPages,
  countByIssuer,
} = useCertificates();

const formatDate = (date: string | null) =>
  date
    ? new Date(date).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "short",
      })
    : "";
</script>

<template>
  <section id="certifications" class="section border-top">
    <h2 class="section-title">Certifications</h2>

    <div class="filters">
      <button
        v-for="issuer in ISSUERS"
        :key="issuer"
        @click="activeIssuer = issuer"
        :class="{ active: activeIssuer === issuer }"
      >
        <span>{{ issuer }}</span>

        <span v-if="issuer !== 'Latest'" class="filter-badge">
          {{ countByIssuer[issuer] || 0 }}
        </span>
      </button>
    </div>

    <div class="grid grid-4 cert-grid glass glass-card">
      <CertificateCard
        v-for="cert in paginatedCertificates"
        :key="cert.title"
        :cert="cert"
        :formatDate="formatDate"
      />
    </div>

    <div v-if="activeIssuer !== 'Latest' && totalPages > 1" class="pager">
      <button @click="page--" :disabled="page === 1">Prev</button>
      <span>{{ page }} / {{ totalPages }}</span>
      <button @click="page++" :disabled="page === totalPages">Next</button>
    </div>
  </section>
</template>

<style scoped>
.section {
  max-width: 72rem;
  margin: auto;
  padding: 6rem 1.5rem;
}

.border-top {
  border-top: 1px solid #1f2937;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
}

.filters {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filters button {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid #374151;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.8rem;
  color: #9ca3af;
  background: transparent;
}

.filters button.active {
  background: #6366f1;
  border-color: #6366f1;
  color: white;
}

.filter-badge {
  margin-left: 0.35rem;
  padding: 0.1rem 0.45rem;
  font-size: 0.7rem;
  line-height: 1;
  border-radius: 999px;
  background: #020617;
  color: #9ca3af;
  border: 1px solid #1f2937;
}

.filters button.active .filter-badge {
  background: rgba(255, 255, 255, 0.18);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.cert-grid {
  justify-items: center;
}

:deep(.cert-card) {
  width: 100%;
  max-width: 320px;
  margin-inline: auto;
}

.pager {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.pager button {
  padding: 0.35rem 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid #374151;
  font-size: 0.8rem;
  color: #9ca3af;
}

.pager button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
