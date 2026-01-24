---
layout: page
title: projects
permalink: /projects/
description: Here you’ll find some of the projects I’ve worked on — at work, at university or just for fun. I like to use this space to share what I’m building and experimenting with.
  The collection is still evolving, and I plan to review and reorganize the content in the future.
nav: true
nav_order: 2
display_categories: [work, university]
horizontal: false
---

> Some projects shown here are based on professional work developed within companies.
> To respect confidentiality agreements, descriptions and figures have been anonymized
> and are intended to illustrate methodology and problem-solving approaches.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>


<br>
Please note that many of my professional projects were developed within companies and are therefore private and not publicly shareable due to confidentiality and legal constraints. For this reason, I have included anonymized descriptions of selected projects to illustrate the scope of my experience.
<br><br>
For further details or clarifications, feel free to contact me privately.
<br>
For all my public repositories, check out my <a href="https://github.com/RomeoSilvestri?tab=repositories">GitHub repositories</a>.