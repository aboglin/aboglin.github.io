---
layout: default
title: "Project Pilgrim"
---

<div class="portfolio-subpage-content">
  <h1 class="portfolio-subpage-title">{{ page.title }}</h1>

  <p>{{ site.data.portfolio.project-pilgrim.description }}</p>

  <div class="project-meta">
    <p><strong>Date:</strong> {{ site.data.portfolio.project-pilgrim.date }}</p>
    <p><strong>Client:</strong> {{ site.data.portfolio.project-pilgrim.client }}</p>
    <p><strong>Skills:</strong> {{ site.data.portfolio.project-pilgrim.skills | join: ", " }}</p>
  </div>
</div>
