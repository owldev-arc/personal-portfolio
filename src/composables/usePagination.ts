import { ref, computed, watch, type Ref } from "vue";

export function usePagination<T>(items: Ref<T[]>, pageSize = 4) {
  const page = ref(1);

  const totalPages = computed(() =>
    Math.max(1, Math.ceil(items.value.length / pageSize)),
  );

  const paginatedItems = computed(() => {
    const start = (page.value - 1) * pageSize;
    return items.value.slice(start, start + pageSize);
  });

  function next() {
    if (page.value < totalPages.value) page.value++;
  }

  function prev() {
    if (page.value > 1) page.value--;
  }

  function reset() {
    page.value = 1;
  }

  watch(items, reset);

  return {
    page,
    totalPages,
    paginatedItems,
    next,
    prev,
    reset,
  };
}
