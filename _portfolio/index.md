---
title: Projects
layout: default
---

<div id="tag-navbar">
  <button onclick="filterProjects('all')">All</button>
  {% assign all_tags = "" %}
  {% for project in site.data.portfolio %}
    {% for tag in project[1].tags %}
      {% assign all_tags = all_tags | append: tag | append: "," %}
    {% endfor %}
  {% endfor %}
  {% assign all_tags = all_tags | split: "," | uniq | sort %}
  {% for tag in all_tags %}
    {% if tag != "" %}
      <button onclick="filterProjects('{{ tag }}')">{{ tag }}</button>
    {% endif %}
  {% endfor %}
</div>

<ul id="project-list">
  {% for project in site.portfolio %}
    {% assign url = project.id | relative_url %}
    {% assign portfolio = site.data.portfolio[project.slug] %}
    {% if portfolio == nil %}
      {% continue %}
    {% endif %}
    <li class="project-item" data-tags="{{ portfolio.tags | join: ' ' }}">
      <a href="{{ url }}">{{ portfolio.title }}</a>
    </li>
  {% endfor %}
</ul>

<script>
  function filterProjects(tag) {
    var items = document.querySelectorAll('.project-item');
    items.forEach(function(item) {
      if (tag === 'all' || item.getAttribute('data-tags').includes(tag)) {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  }
</script>
