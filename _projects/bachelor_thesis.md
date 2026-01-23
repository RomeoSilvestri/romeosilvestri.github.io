---
layout: page
title: Migration & Demographics
description: Bachelor's Thesis analyzing the statistical impact of international migration flows on the demographic structure of Italian provinces.
img: assets/img/bachelor_thesis/cover.png
importance: 2
category: university
related_publications: false
---

Demographic dynamics are driven by natural balances (births and deaths) and migratory movements. While natural factors are endogenous determinants, migrations are complex events capable of altering the age structure and fertility potential of a territory. 

This project, developed as my Bachelor's Thesis in **Statistics for Technologies and Sciences** at the **University of Padua**, analyzes the quantitative effect of international migration on Italian demographics.

**Objectives**
1.  **Define Demographic Indicators**: Analyze fertility (Total Fertility Rate), birth rates, and structural indices such as the Aging Index and Dependency Ratio.
2.  **Statistical Modeling**: Apply Linear Regression (OLS) and Generalized Linear Models (GLM) to quantify the relationship between migration flows and demographic changes.
3.  **Longitudinal Analysis**: Evaluate these dynamics across 107 Italian provinces over a 15-year period (2004-2018).

**My role**
- Data curation and cleaning using ISTAT (Italian National Institute of Statistics) public data.
- Reconstruction of historical series accounting for administrative boundary changes and provincial reforms.
- Implementation of OLS, GLM (Gamma), and "First Difference" models in R.
- Interpretation of results considering socio-economic confounders like Unemployment and Regional GDP.

<br>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-layer-group"></i> Tech Stack</h5>
        <table class="table table-borderless table-sm">
            <tbody>
                <tr>
                    <th scope="row">Language</th>
                    <td>R</td>
                </tr>
                <tr>
                    <th scope="row">Models</th>
                    <td>OLS, GLM</td>
                </tr>
                <tr>
                    <th scope="row">Data Source</th>
                    <td>ISTAT, AIRE</td>
                </tr>
                 <tr>
                    <th scope="row">Scope</th>
                    <td>Time Series, Panel Data Analysis</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-code-branch"></i> Project Phases</h5>
        <p>The research follows a rigorous statistical workflow:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>01_indicators</code> Definition of fertility (TFR) and structural indices</small></li>
          <li class="list-group-item p-1"><small><code>02_exploratory</code> EDA, normality tests, and historical context</small></li>
          <li class="list-group-item p-1"><small><code>03_modeling</code> Implementation of OLS and GLM Gamma models</small></li>
          <li class="list-group-item p-1"><small><code>04_validation</code> Comparison via AIC and R-squared metrics</small></li>
        </ul>
    </div>
</div>

<hr>

### The Context: Italy's Demographic Shift

The analysis focused on the period between 2004 and 2018, a timeframe marked by the 2008 global economic crisis which significantly altered migratory patterns. The study utilized a dataset of **1,498 observations** (107 provinces over 14 years).

Historical data revealed that emigration flows more than tripled during this period, rising from roughly 50,000 to over 156,000 annual departures. Immigration, while more consistent in absolute numbers, showed high volatility peaking in 2007.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bachelor_thesis/emigration_trends.png" title="Emigration Trends" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Historical series of emigration rates by macro-area (2004-2017). A significant upward trend is visible following the 2008 and 2011 crises.
</div>

### Methodology

To isolate the effect of migration from other socio-economic factors, the study employed a comparative modeling approach:

1.  **Exploratory Data Analysis (EDA)**: Univariate analysis through Boxplots, Histograms, and Q-Q plots to assess data distribution and normality (Shapiro-Wilk).
2.  **Multiple Linear Regression (OLS)**: Models were built to evaluate the impact of migration rates while controlling for **Unemployment** (push factor) and **Regional GDP** (pull factor).
3.  **Generalized Linear Models (GLM)**: A Gamma distribution was assumed for the response variables to better fit the observed demographic data, comparing different link functions (Identity, Log, Inverse).
4.  **First Difference Model**: This approach focused on the *variation* between consecutive years to capture immediate dynamic changes in demographic indicators.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bachelor_thesis/immigration_dist.png" title="Immigration Distribution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Distribution analysis of the Immigration Rate. The data shows strong positive asymmetry and outliers, justifying the use of GLM Gamma models.
</div>

### Results: Migration as a Demographic Driver

The models provided quantitative evidence of how migration influences the demographic "vitality" of Italian provinces.

**Key Findings:**
* **Fertility Impact**: Immigration shows a strongly significant positive correlation with the Total Fertility Rate, while emigration shows a slight negative impact.
* **Age Structure**: Emigration contributes to the aging of the population (increasing the Average Age), whereas immigration has a complex role that varies by macro-area.
* **Economic Interaction**: Regional GDP acts as a resistance factor for emigration and an attraction factor for immigration, directly influencing provincial birth rates.
* **Model Fit**: In almost all cases, **GLM models** outperformed standard OLS according to the Akaike Information Criterion (AIC), suggesting that demographic indicators are better represented by a Gamma distribution.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/bachelor_thesis/correlation_tft.png" title="Correlation Plot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scatter plots showing the relationship between migration rates and the Total Fertility Rate (TFT).
</div>

<br>

<h5><i class="fas fa-file-pdf"></i> Full Documentation</h5>
<div class="publications">
  <p>For a detailed look at the mathematical derivations and the complete provincial dataset, you can access the full thesis below:</p>
  <a href="{{ '/assets/pdf/thesis/bachelor_thesis_full.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read Full Thesis</a>
</div>
