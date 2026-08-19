---
layout: page
permalink: /publications/
title: publications
description: Research publications and ongoing manuscripts spanning machine learning, intelligent decision support,
  environmental modelling, and applied AI. Entries are grouped by publication status and include abstracts, full texts,
  and external records where available.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% capture published_publications %}{% bibliography --query @*[pubstatus=published]* %}{% endcapture %}
{% capture accepted_publications %}{% bibliography --group_by none --query @*[pubstatus=accepted]* %}{% endcapture %}
{% capture submitted_publications %}{% bibliography --group_by none --query @*[pubstatus=submitted]* %}{% endcapture %}
{% capture preparation_publications %}{% bibliography --group_by none --query @*[pubstatus=in_preparation]* %}{% endcapture %}
{% capture published_count %}{% bibliography_count --query @*[pubstatus=published]* %}{% endcapture %}
{% capture accepted_count %}{% bibliography_count --query @*[pubstatus=accepted]* %}{% endcapture %}
{% capture submitted_count %}{% bibliography_count --query @*[pubstatus=submitted]* %}{% endcapture %}
{% capture preparation_count %}{% bibliography_count --query @*[pubstatus=in_preparation]* %}{% endcapture %}
{% capture journal_count %}{% bibliography_count --query @*[venue_type=journal]* %}{% endcapture %}
{% capture conference_count %}{% bibliography_count --query @*[venue_type=conference]* %}{% endcapture %}
{% assign published_total = published_count | strip | plus: 0 %}
{% assign accepted_total = accepted_count | strip | plus: 0 %}
{% assign submitted_total = submitted_count | strip | plus: 0 %}
{% assign preparation_total = preparation_count | strip | plus: 0 %}
{% assign journal_total = journal_count | strip | plus: 0 %}
{% assign conference_total = conference_count | strip | plus: 0 %}

<div class="publication-overview" aria-label="Publication overview">
  {% if published_total > 0 %}
    <a class="publication-overview-card" href="#published" aria-label="View published publications">
      <span class="publication-overview-count">{{ published_total }}</span>
      <span class="publication-overview-label">Published</span>
    </a>
  {% endif %}
  {% if accepted_total > 0 %}
    <a class="publication-overview-card" href="#accepted" aria-label="View accepted publications">
      <span class="publication-overview-count">{{ accepted_total }}</span>
      <span class="publication-overview-label">Accepted</span>
    </a>
  {% endif %}
  {% if submitted_total > 0 %}
    <a class="publication-overview-card" href="#under-review" aria-label="View publications under review">
      <span class="publication-overview-count">{{ submitted_total }}</span>
      <span class="publication-overview-label">Under review</span>
    </a>
  {% endif %}
  {% if preparation_total > 0 %}
    <a class="publication-overview-card" href="#in-preparation" aria-label="View publications in preparation">
      <span class="publication-overview-count">{{ preparation_total }}</span>
      <span class="publication-overview-label">In preparation</span>
    </a>
  {% endif %}
</div>

<p class="publication-type-summary">
  {% if journal_total > 0 %}
    <span
      class="publication-type-dot"
      style="background-color: {{ site.data.venues.venue_types.journal.color }}"
    ></span>
    {{ journal_total }} journal articles
  {% endif %}
  {% if journal_total > 0 and conference_total > 0 %}
    <span aria-hidden="true">&middot;</span>
  {% endif %}
  {% if conference_total > 0 %}
    <span
      class="publication-type-dot"
      style="background-color: {{ site.data.venues.venue_types.conference.color }}"
    ></span>
    {{ conference_total }} conference papers
  {% endif %}
</p>

{% include bib_search.liquid %}

<div class="publications">

{% if published_total > 0 %}
  <section id="published" class="publication-section">
    <h2 class="publication-section-title">Published</h2>
    <p class="publication-section-description">Peer-reviewed journal articles and conference papers.</p>
    {{ published_publications }}
  </section>
{% endif %}

{% if accepted_total > 0 %}
  <section id="accepted" class="publication-section">
    <h2 class="publication-section-title">Accepted &amp; forthcoming</h2>
    <p class="publication-section-description">Accepted manuscripts awaiting their final publication record.</p>
    {{ accepted_publications }}
  </section>
{% endif %}

{% if submitted_total > 0 %}
  <section id="under-review" class="publication-section">
    <h2 class="publication-section-title">Submitted &amp; under review</h2>
    <p class="publication-section-description">Manuscripts currently in the editorial and peer-review process.</p>
    {{ submitted_publications }}
  </section>
{% endif %}

{% if preparation_total > 0 %}
  <section id="in-preparation" class="publication-section">
    <h2 class="publication-section-title">In preparation</h2>
    <p class="publication-section-description">Ongoing manuscripts that are being prepared for submission.</p>
    {{ preparation_publications }}
  </section>
{% endif %}


</div>
