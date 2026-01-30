<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sections = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "certifications", label: "Certs", icon: "📜" },
  { id: "skills", label: "Skills", icon: "💻" },
  { id: "projects-in-progress", label: "Projects", icon: "🚀" },
  { id: "previous-work", label: "Work", icon: "🗂" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

const activeSection = ref("home");

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
      threshold: 0.4, // stabil, nggak flicker
    },
  );

  sections.forEach((s) => {
    const el = document.getElementById(s.id);
    if (el) observer?.observe(el);
  });
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <nav class="dock-nav">
    <a
      v-for="s in sections"
      :key="s.id"
      :href="`#${s.id}`"
      :class="{ active: activeSection === s.id }"
      aria-label="Navigation"
    >
      <span class="icon">{{ s.icon }}</span>
      <small class="label">{{ s.label }}</small>
    </a>
  </nav>
</template>

<style scoped>
.dock-nav {
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;

  display: flex;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 1.25rem;

  background: rgba(3, 7, 18, 0.78);
  backdrop-filter: blur(12px);

  border: 1px solid #1f2937;
}

.dock-nav a {
  width: 56px;
  height: 56px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  text-decoration: none;

  color: #9ca3af;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.icon {
  font-size: 1.2rem;
  line-height: 1;
}

.label {
  font-size: 0.65rem;
  margin-top: 0.2rem;
  opacity: 0.85;
}

.dock-nav a:hover {
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
}

.dock-nav a.active {
  background: rgba(99, 102, 241, 0.25);
  color: #c7d2fe;
}

@media (max-width: 640px) {
  .dock-nav {
    gap: 0.25rem;
    padding: 0.4rem;
  }

  .dock-nav a {
    width: 50px;
    height: 50px;
  }
}
</style>
