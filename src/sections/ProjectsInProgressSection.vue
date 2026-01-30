<script setup lang="ts"></script>

<template>
  <section
    id="projects-in-progress"
    class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800"
  >
    <h2 class="text-3xl font-bold">
      Projects
      <span class="ml-2 text-indigo-400">(In Progress)</span>
    </h2>

    <p class="mt-4 max-w-3xl text-gray-400 leading-relaxed">
      Ongoing projects focused on clean architecture, structured data handling,
      and recruiter-friendly user experience.
    </p>

    <div class="mt-14 grid gap-8 md:grid-cols-2">
      <div class="project-card">
        <div class="project-header">
          <h3 class="project-title">Data-Driven Portfolio Platform</h3>

          <span class="project-status"> In Progress </span>
        </div>

        <p class="project-desc">
          A scalable personal portfolio system designed to present
          certifications, skills, and project history using structured content
          architecture and clear information hierarchy.
        </p>

        <ul class="project-focus">
          <li>JSON-based content architecture</li>
          <li>Reusable UI components</li>
          <li>Pagination & filtering logic</li>
          <li>Recruiter-oriented information flow</li>
        </ul>

        <div class="project-tech">
          <span>Vue 3 (Composition API)</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Modular Architecture</span>
        </div>

        <p class="project-note">
          This project is actively evolving and used as a foundation for future
          personal and freelance projects.
        </p>
      </div>

      <div class="project-card project-muted">
        <div class="project-header">
          <h3 class="project-title">Custom CMS Exploration</h3>

          <span class="project-status muted"> Planning </span>
        </div>

        <p class="project-desc">
          Experimental project focused on designing a lightweight custom CMS for
          small business and personal websites.
        </p>

        <ul class="project-focus">
          <li>Content modeling & relationships</li>
          <li>Admin-friendly data structure</li>
          <li>Security awareness basics</li>
        </ul>

        <div class="project-tech">
          <span>Laravel</span>
          <span>MySQL</span>
          <span>Custom CMS Logic</span>
        </div>

        <p class="project-note">Currently in research and design phase.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 1rem;
  padding: 1.75rem;
}

.project-muted {
  background: #0b1220;
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e5e7eb;
}

.project-status {
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.35);
}

.project-status.muted {
  background: #020617;
  color: #9ca3af;
  border-color: #1f2937;
}

.project-desc {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #9ca3af;
}

.project-focus {
  margin-top: 1rem;
  padding-left: 1rem;
  list-style: disc;
  font-size: 0.85rem;
  color: #9ca3af;
}

.project-focus li {
  margin-bottom: 0.4rem;
}

.project-tech {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.project-tech span {
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  background: #020617;
  border: 1px solid #1f2937;
  color: #9ca3af;
}

.project-note {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
}
</style>
