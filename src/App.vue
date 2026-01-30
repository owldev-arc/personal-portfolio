<script setup lang="ts">
import Home from "@/pages/Home.vue";
import DockNav from "@/components/DockNav.vue";
</script>

<template>
  <div class="app-root">
    <Home />
    <DockNav />
  </div>
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #020617;
  color: #e5e7eb;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.app-root {
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
