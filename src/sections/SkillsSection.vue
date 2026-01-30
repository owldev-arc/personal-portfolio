<script setup lang="ts"></script>

<template>
  <section
    id="skills"
    class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800"
  >
    <h2 class="text-3xl font-bold">Skills</h2>
    <p class="mt-4 max-w-3xl text-gray-400 leading-relaxed">
      Core technical competencies shaped through structured learning,
      certification programs, and hands-on project implementation.
    </p>

    <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="skill-card">
        <h3 class="skill-title">Frontend Development</h3>

        <p class="skill-desc">
          Building clean, responsive, and accessible interfaces with a focus on
          clarity, consistency, and maintainability.
        </p>

        <ul class="skill-list">
          <li>HTML & Semantic Markup</li>
          <li>Modern CSS (Flexbox, Grid)</li>
          <li>JavaScript (ES6+)</li>
          <li>Vue 3 (Composition API)</li>
          <li>Tailwind CSS & Bootstrap</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3 class="skill-title">Backend & Custom CMS</h3>

        <p class="skill-desc">
          Developing backend logic and custom CMS solutions to manage structured
          content and business rules.
        </p>

        <ul class="skill-list">
          <li>PHP</li>
          <li>Laravel Fundamentals</li>
          <li>Custom CMS Architecture</li>
          <li>REST API Basics</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3 class="skill-title">Data & Content Architecture</h3>

        <p class="skill-desc">
          Structuring relational data and content models to support scalability
          and long-term maintainability.
        </p>

        <ul class="skill-list">
          <li>MySQL</li>
          <li>Relational Data Modeling</li>
          <li>Content Structure Design</li>
          <li>JSON-driven Architecture</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3 class="skill-title">Security Awareness</h3>

        <p class="skill-desc">
          Applying basic security principles and awareness to reduce common
          risks in web applications.
        </p>

        <ul class="skill-list">
          <li>Web Security Fundamentals</li>
          <li>Common Vulnerabilities Awareness</li>
          <li>Secure Coding Practices (Basic)</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3 class="skill-title">Workflow & Engineering Practices</h3>

        <p class="skill-desc">
          Working with structured development workflows and maintaining
          readable, modular codebases.
        </p>

        <ul class="skill-list">
          <li>Git & Version Control</li>
          <li>Component-based Architecture</li>
          <li>Code Readability & Documentation</li>
        </ul>
      </div>

      <div class="skill-card skill-muted">
        <h3 class="skill-title">Learning & Growth</h3>

        <p class="skill-desc">
          Continuously improving technical depth through certifications,
          experimentation, and real-world projects.
        </p>

        <ul class="skill-list">
          <li>Structured Online Learning</li>
          <li>Documentation-driven Study</li>
          <li>Incremental Skill Development</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 1rem;
  padding: 1.5rem;
}

.skill-muted {
  background: #0b1220;
}

.skill-title {
  font-size: 1rem;
  font-weight: 600;
  color: #e5e7eb;
}

.skill-desc {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #9ca3af;
}

.skill-list {
  margin-top: 0.75rem;
  padding-left: 1rem;
  list-style: disc;
  font-size: 0.8rem;
  color: #9ca3af;
}

.skill-list li {
  margin-bottom: 0.3rem;
}
</style>
