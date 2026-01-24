---
layout: page
title: BI Financial Dashboard
description: End-to-end design and implementation of an interactive Power BI dashboard for executive financial reporting.
img: assets/img/fin_dashboard/cover.png
importance: 7
category: work
related_publications: false
---

To modernize the client's financial reporting, I led the transformation from fragmented Excel spreadsheets into a **centralized Power BI solution**. The goal was to eliminate manual processes, enable interactive drill-downs, and deliver reliable, timely insights for executive decision-making.

**Objectives**
1. Automate data ingestion from the ERP to reduce manual Excel work.  
2. Enable granular drill-downs for department-level analysis of budget variances.

**My role**
- End-to-end project ownership: requirements gathering, data modeling, and dashboard design.  
- Built a **Star Schema** data model integrating multiple data sources.  
- Developed advanced **DAX measures** and crafted the UX for efficient navigation.

<br>

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
<h5><i class="fas fa-chart-line"></i> Tech Stack</h5>
<table class="table table-borderless table-sm">
<tbody>
<tr>
<th scope="row">Platform</th>
<td>Microsoft Power BI</td>
</tr>
<tr>
<th scope="row">Backend</th>
<td>SQL, Power Query</td>
</tr>
<tr>
<th scope="row">Modeling</th>
<td>DAX (Data Analysis Expressions)</td>
</tr>
<tr>
<th scope="row">Design</th>
<td>Figma (Prototyping)</td>
</tr>
</tbody>
</table>
</div>
<div class="col-sm mt-3 mt-md-0">
<h5><i class="fas fa-sitemap"></i> Report Architecture</h5>
<p>The solution is structured into distinct navigational areas:</p>
<ul class="list-group list-group-flush">
<li class="list-group-item p-1"><small><code>01_Executive_Cockpit</code> High-level KPI cards & trends</small></li>
<li class="list-group-item p-1"><small><code>02_PnL_Deep_Dive</code> Income statement matrix & waterfall</small></li>
<li class="list-group-item p-1"><small><code>03_Cash_Flow_Dynamics</code> Liquidity & Opex analysis</small></li>
<li class="list-group-item p-1"><small><code>04_Geo_Performance</code> Sales distribution maps</small></li>
</ul>
</div>
</div>

<hr>

### The Challenge: From Fragmented Files to One Truth

The client previously relied on multiple Excel exports merged manually, causing:  
* **Data latency:** reports available ~10 days after month-end  
* **Inconsistency:** conflicting metrics across departments  
* **Limited interactivity:** static reports prevented root-cause analysis  

The main technical challenge was designing a data model to handle mixed granularities: quarterly budget vs. daily transactional actuals.

<div class="row justify-content-sm-center">
<div class="col-sm-8 mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/fin_dashboard/data_model_schema.png" title="Star Schema Conceptual Model" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="caption">
Conceptual representation of the Star Schema designed to handle multi-grain facts (Budget vs. Actuals).
</div>

### Methodology & Implementation

Following **Kimball methodology**, the solution included:

1. **ETL & Staging:** Power Query cleaned inconsistent taxonomy and unpivoted legacy files.  
2. **Data Modeling:** Star Schema with central Fact Table (General Ledger) and conformed Dimensions (Calendar, Cost Center, Customer).  
3. **DAX Engineering:** Calculation groups enabled dynamic “Month-to-Date”, “Year-to-Date”, and “Same-Period-Last-Year” views.  
4. **UI/UX Design:** Grid-based layout with sidebar navigation for clarity and dark mode aesthetics.

<div class="row">
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/fin_dashboard/wireframe_concept.png" title="Dashboard UI Wireframe" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/fin_dashboard/dax_logic.png" title="DAX Measure Logic" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="caption">
Left: An example of a dashboard tab. Right: Snippet of the DAX logic used for dynamic time intelligence.
</div>

### Results: actionable insights

The dashboard became the primary tool for the Board of Directors, shifting the finance team from **manual data gathering** to **strategic analysis**.  

- **Reporting latency:** reduced from ~10 days to [INSERT METRIC]  
- **Decision-making:** executives access real-time KPIs and drill-downs  
- **Data quality:** consistent metrics across departments  

---
**Note:** To maintain confidentiality, all company names, locations, dates, and specific proprietary values have been anonymized or modified. The analysis focuses on the technical methodology and challenges encountered during the project.