import { ref, computed, watch } from "vue";
import certificates from "@/data/certificates.json";
import type { Certificate } from "@/types/certificate";

export function useCertificates() {
  const PAGE_SIZE = 4;

  const ISSUERS = [
    "Latest",
    "IBM",
    "Dicoding",
    "Codepolitan",
    "Udemy",
    "Tumbu",
    "Blu Academy",
    "Alibaba Cloud Academy",
    "Karier.mu",
  ];

  const activeIssuer = ref<string>("Latest");
  const page = ref<number>(1);

  const sorted = computed<Certificate[]>(() =>
    [...certificates].sort(
      (a, b) =>
        new Date(b.issued_at).getTime() - new Date(a.issued_at).getTime(),
    ),
  );

  const countByIssuer = computed<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    certificates.forEach((c) => {
      map[c.issuer] = (map[c.issuer] || 0) + 1;
    });
    return map;
  });

  const filtered = computed<Certificate[]>(() => {
    if (activeIssuer.value === "Latest") {
      return sorted.value.slice(0, PAGE_SIZE);
    }
    return sorted.value.filter((c) => c.issuer === activeIssuer.value);
  });

  const totalPages = computed<number>(() => {
    if (activeIssuer.value === "Latest") return 1;
    return Math.ceil(filtered.value.length / PAGE_SIZE);
  });

  const paginatedCertificates = computed<Certificate[]>(() => {
    if (activeIssuer.value === "Latest") return filtered.value;
    const start = (page.value - 1) * PAGE_SIZE;
    return filtered.value.slice(start, start + PAGE_SIZE);
  });

  function nextPage() {
    if (page.value < totalPages.value) {
      page.value++;
    }
  }

  function prevPage() {
    if (page.value > 1) {
      page.value--;
    }
  }

  watch(activeIssuer, () => {
    page.value = 1;
  });

  return {
    ISSUERS,
    activeIssuer,
    page,
    paginatedCertificates,
    totalPages,
    countByIssuer,
    nextPage,
    prevPage,
  };
}
