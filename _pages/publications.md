---
layout: page
permalink: /publications/
title: publications
description: Welcome to my publications section!
  Here you’ll find a curated selection of my work, including journal articles and conference papers.
  While this list is still short and growing, it reflects some areas I am passionate about and the research I’ve been involved in.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% capture published_publications %}{% bibliography --query @*[pubstatus=published]* %}{% endcapture %}
{% capture accepted_publications %}{% bibliography --query @*[pubstatus=accepted]* %}{% endcapture %}
{% capture submitted_publications %}{% bibliography --query @*[pubstatus=submitted]* %}{% endcapture %}
{% capture preparation_publications %}{% bibliography --query @*[pubstatus=in_preparation]* %}{% endcapture %}
{% capture published_count %}{% bibliography_count --query @*[pubstatus=published]* %}{% endcapture %}
{% capture accepted_count %}{% bibliography_count --query @*[pubstatus=accepted]* %}{% endcapture %}
{% capture submitted_count %}{% bibliography_count --query @*[pubstatus=submitted]* %}{% endcapture %}
{% capture preparation_count %}{% bibliography_count --query @*[pubstatus=in_preparation]* %}{% endcapture %}
{% capture journal_count %}{% bibliography_count --query @*[venue_type=journal]* %}{% endcapture %}
{% capture conference_count %}{% bibliography_count --query @*[venue_type=conference]* %}{% endcapture %}

<div class="publication-overview" aria-label="Publication overview">
  <a class="publication-overview-card" href="#published" aria-label="View published publications">
    <span class="publication-overview-count">{{ published_count }}</span>
    <span class="publication-overview-label">Published</span>
  </a>
  <a class="publication-overview-card" href="#accepted" aria-label="View accepted publications">
    <span class="publication-overview-count">{{ accepted_count }}</span>
    <span class="publication-overview-label">Accepted</span>
  </a>
  <a class="publication-overview-card" href="#under-review" aria-label="View publications under review">
    <span class="publication-overview-count">{{ submitted_count }}</span>
    <span class="publication-overview-label">Under review</span>
  </a>
  <a class="publication-overview-card" href="#in-preparation" aria-label="View publications in preparation">
    <span class="publication-overview-count">{{ preparation_count }}</span>
    <span class="publication-overview-label">In preparation</span>
  </a>
</div>

<p class="publication-type-summary">
  <span
    class="publication-type-dot"
    style="background-color: {{ site.data.venues.venue_types.journal.color }}"
  ></span>
  {{ journal_count }} journal articles
  <span aria-hidden="true">&middot;</span>
  <span
    class="publication-type-dot"
    style="background-color: {{ site.data.venues.venue_types.conference.color }}"
  ></span>
  {{ conference_count }} conference papers
</p>

{% include bib_search.liquid %}

<div class="publications">

<section id="published" class="publication-section">
  <h2 class="publication-section-title">Published</h2>
  <p class="publication-section-description">Peer-reviewed journal articles and conference papers.</p>
  {{ published_publications }}
</section>

<section id="accepted" class="publication-section">
  <h2 class="publication-section-title">Accepted &amp; forthcoming</h2>
  <p class="publication-section-description">Accepted manuscripts awaiting their final publication record.</p>
  {{ accepted_publications }}
</section>

<section id="under-review" class="publication-section">
  <h2 class="publication-section-title">Submitted &amp; under review</h2>
  <p class="publication-section-description">Manuscripts currently in the editorial and peer-review process.</p>
  {{ submitted_publications }}
</section>

<section id="in-preparation" class="publication-section">
  <h2 class="publication-section-title">In preparation</h2>
  <p class="publication-section-description">Ongoing manuscripts that are being prepared for submission.</p>
  {{ preparation_publications }}
</section>


</div>
