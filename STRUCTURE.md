    # Portfolio Project Structure

## Directory Overview

```
src/
├── components/          # Reusable UI components
│   ├── CertificateCard.vue    # Certificate display card
│   ├── DockNav.vue            # Bottom navigation dock
│   └── WorkCard.vue           # Work/project card
├── composables/         # Vue composables (reusable logic)
│   ├── useCertificates.ts     # Certificate filtering & pagination
│   ├── usePagination.ts       # Generic pagination logic
│   └── useScrollSpy.ts        # Section intersection observer
├── sections/            # Page sections (full-width layouts)
│   ├── HeroSection.vue
│   ├── CertificationsSection.vue
│   ├── SkillsSection.vue
│   ├── ProjectsInProgressSection.vue
│   ├── PreviousWorkSection.vue
│   └── ContactSection.vue
├── pages/               # Page-level components
│   └── Home.vue         # Main page that composes all sections
├── types/               # TypeScript interfaces
│   └── certificate.ts
├── data/                # JSON data files
│   ├── certificates.json
│   └── previousWork.json
├── assets/              # Global stylesheets
│   └── glass.css        # Glass morphism utilities
├── App.vue              # Root component
├── main.js              # Application entry point
└── style.css            # Global styles (Tailwind imports)
```

## Naming Conventions

### Components

- **UI Components**: `PascalCase.vue` (e.g., `CertificateCard.vue`)
- **Sections**: `<Name>Section.vue` (e.g., `HeroSection.vue`)
- **Pages**: `<Name>.vue` (e.g., `Home.vue`)

### Composables

- **Prefix**: `use<Name>.ts` (e.g., `useCertificates.ts`)

### TypeScript Files

- **Interfaces/Types**: `<domain>.ts` (e.g., `certificate.ts`)

### CSS/Styling

- **Global Utilities**: `<name>.css` (e.g., `glass.css`)
- **Scoped Styles**: Use `<style scoped>` in Vue components

## Code Organization Standards

### Imports Order

1. Vue and third-party imports
2. Types and interfaces
3. Components and composables
4. Data files

### Component Structure

```vue
<script setup lang="ts">
// Imports
import { ref } from "vue";
import type { MyType } from "@/types";

// Props & emits
defineProps<{
  /* ... */
}>();

// State
const state = ref();

// Computed
const derived = computed(() => {});

// Methods
function handleEvent() {}

// Lifecycle hooks (if needed)
</script>

<template>
  <!-- Template content -->
</template>

<style scoped>
/* Styles */
</style>
```

### Composable Structure

```typescript
export function useFeature() {
  // State
  const state = ref();

  // Computed properties
  const derived = computed(() => {});

  // Methods
  function action() {}

  // Watchers
  watch(state, () => {});

  // Return public API
  return {
    state,
    derived,
    action,
  };
}
```

## Consistency Checklist

- ✅ No comments in code (self-documenting)
- ✅ Consistent naming conventions
- ✅ Proper TypeScript usage
- ✅ Lazy loading on images
- ✅ Proper spacing and layout system
- ✅ Color palette from Tailwind dark theme
- ✅ Clean imports and exports
- ✅ Reusable components and composables

## Best Practices

### Performance

- Use `loading="lazy"` on all images
- Leverage Vue's reactivity system (ref, computed)
- Avoid unnecessary re-renders with proper key bindings

### Maintainability

- Keep components small and focused
- Extract reusable logic into composables
- Use TypeScript for type safety
- Descriptive variable and function names

### Code Quality

- No dead code or unused files
- Clean, readable code without comments
- Consistent spacing and formatting
- Proper error boundaries (to be implemented)

## Future Improvements

- [ ] Add error boundary component
- [ ] Add image fallback/placeholder logic
- [ ] Add animations/transitions
- [ ] Add accessibility attributes (ARIA labels)
- [ ] Add unit tests
- [ ] Add E2E tests
