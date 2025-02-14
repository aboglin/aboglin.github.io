---
title: Projects
layout: default
---

<div id="tag-navbar">
  <button onclick="filterProjects('all')">All</button>
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <button onclick="filterProjects('{{ tag[0] }}')">{{ tag[0] }}</button>
  {% endfor %}
</div>

<ul id="project-list">
  {% for project in site.projects %}
    <li class="project-item" data-tags="{{ project.tags | join: ' ' }}">
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
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

