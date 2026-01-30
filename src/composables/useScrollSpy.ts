import { ref, onMounted, onUnmounted } from "vue";

export function useScrollSpy(
  sectionIds: string[],
  options?: IntersectionObserverInit,
) {
  const activeSection = ref<string>(sectionIds[0] ?? "");

  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      {
        threshold: 0.4,
        ...options,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer?.observe(el);
    });
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return {
    activeSection,
  };
}
