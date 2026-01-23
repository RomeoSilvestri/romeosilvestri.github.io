---
layout: page
title: Real Estate Forecasting
description: Master's Thesis on comparative analysis between Spatial Econometrics and Machine Learning models for housing price prediction.
img: assets/img/master_thesis/cover.png
importance: 1
category: university
related_publications: false
---

Real estate valuation is a complex task where location introduces strong spatial dependencies that standard models often fail to capture.
This project, developed as my Master's Thesis in Statistical Sciences, explores the intersection of classical Spatial Econometrics and modern Machine Learning to predict housing prices in Madrid.

**Objectives**
1.  **Data Engineering:** Build a robust dataset by scraping and geocoding thousands of real estate listings.
2.  **Missing Data Strategy:** Compare and implement advanced imputation techniques (e.g., Random Forest vs. Predictive Mean Matching) to handle incomplete records.
3.  **Model Benchmarking:** Evaluate whether explicitly modeling spatial dependence (Spatial Error/Lag Models) outperforms algorithmic approaches (XGBoost, Random Forest).

**My role**
- End-to-end data pipeline development (Web Scraping -> Cleaning -> Imputation).
- Statistical analysis of spatial autocorrelation (Moran’s I, LISA Clusters).
- Implementation and tuning of predictive models.
- Comparative analysis of error metrics (RMSE, MAE).

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
                    <th scope="row">Spatial Stats</th>
                    <td>spdep, spatialreg, sf, tmap</td>
                </tr>
                <tr>
                    <th scope="row">ML Models</th>
                    <td>xgboost, randomForest, caret</td>
                </tr>
                 <tr>
                    <th scope="row">Tools</th>
                    <td>ArcGIS (Geocoding), OpenStreetMap</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-code-branch"></i> Project Structure</h5>
        <p>The workflow follows a rigorous statistical framework:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>01_data_collection</code> Scraping & Geocoding</small></li>
          <li class="list-group-item p-1"><small><code>02_imputation</code> Missing data handling (I-Score)</small></li>
          <li class="list-group-item p-1"><small><code>03_spatial_esda</code> Moran's I & LISA Clustering</small></li>
          <li class="list-group-item p-1"><small><code>04_modeling</code> SEM/SAR vs XGBoost/RF</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: Spatial Dependence & Data Quality

The dataset consists of **6,287 properties** in Madrid, collected in March 2020. Real-world data is rarely perfect: significant portions of the data (up to 48% for some variables like "Independent Heating") were missing.

Furthermore, housing prices violate the assumption of independence required by standard linear models: the price of a house is strongly correlated with the price of its neighbors (**Spatial Autocorrelation**).

**Key Challenges:**
* **Missing Data (MAR):** Analyzing the mechanism of missingness (Missing At Random) to apply the correct imputation strategy without introducing bias.
* **Spatial Heterogeneity:** The relationship between variables changes across different neighborhoods (spatial sub-markets).

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/master_thesis/madrid_map.png" title="Madrid Price Map" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Spatial distribution of housing prices in Madrid. The clustering of high/low values suggests strong spatial autocorrelation.
</div>

### Methodology

The analysis adopted a hybrid approach, testing both "Explicit" and "Implicit" spatial modeling:

1.  **Data Preprocessing & Imputation:** Comparing multiple imputation methods using the **I-Score** metric. *Random Forest Imputation* proved to be the most effective at preserving the original data distribution.
2.  **Spatial Analysis (ESDA):** Using Global Moran’s I to detect autocorrelation and **LISA (Local Indicators of Spatial Association)** to identify "hotspots" (High-High price clusters) and "coldspots" (Low-Low clusters).
3.  **Modeling Strategies:**
    * **Spatial Econometrics:** Spatial Error Model (SEM) and Spatial Lag Model (SAR) to explicitly model the error structure or the dependent variable lag.
    * **Machine Learning:** Random Forest and XGBoost.
    * **Hybrid Approach:** Using spatial features (LISA Cluster IDs) as input features for tree-based models ("Implicit Spatial Regression").

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/master_thesis/spatial_residuals.png" title="Residual Analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Residual maps comparison: The Spatial Error Model (left) vs. XGBoost (right). The goal is to minimize spatial patterns in the errors (white noise).
</div>

### Results: The Power of Context

The results highlighted a trade-off between **explainability** and **predictive power**.

While Spatial Econometrics models (SEM) provided excellent theoretical insights into the spatial structure of the errors, they underperformed in pure prediction accuracy compared to ensemble methods.

**Key Findings:**
* **XGBoost** outperformed all traditional statistical models.
* **The Hybrid Winner:** The best performance was achieved by an **XGBoost model enriched with spatial features** (LISA cluster IDs). This approach captured local spatial heterogeneity better than global spatial parameters.

**Performance Metrics (RMSE):**
* **Spatial Error Model (SEM):** ~242,000 €
* **Linear Regression:** ~208,000 €
* **XGBoost (Hybrid):** **~142,000 €**

The hybrid model explained **89.9%** of the variance in housing prices, reducing the average error significantly compared to traditional methods.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/master_thesis/model_comparison.png" title="RMSE Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RMSE comparison across all tested models. Tree-based models (XGBoost, RF) show significantly lower prediction errors.
</div>

<br>

<h5><i class="fas fa-file-pdf"></i> Full Documentation</h5>
<div class="publications">
  <p>For a deep dive into the mathematical formulation of the Spatial Error Models and the complete variable analysis, you can access the full documents below:</p>
  <a href="{{ '/assets/pdf/thesis/thesis_full.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read Full Thesis</a>
  <a href="{{ '/assets/pdf/thesis/presentation_slides.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">View Presentation Slides</a>
</div>
