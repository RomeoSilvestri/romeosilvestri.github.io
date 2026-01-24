---
layout: page
title: Spatial Interpolation
description: Comparative analysis of geostatistical algorithms to transform sparse sensor data into continuous surface maps.
img: assets/img/publication_preview/spatial_interpolation.png
importance: 5
category: work
related_publications: false
---

In environmental monitoring, data is often limited to specific point locations. This project addresses the "missing data" problem by comparing deterministic and geostatistical algorithms to generate continuous high-resolution maps from sparse inputs.

**Objectives**
1.  Transform discrete point data from sensors into continuous spatial surfaces.
2.  Benchmark **IDW (Inverse Distance Weighting)** against **Ordinary Kriging**.

**My role**
- Processed geospatial vector data (Shapefiles) and sensor readings.
- Implemented interpolation algorithms using Python libraries.
- Validated model accuracy using Cross-Validation (RMSE metrics).

<br>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-layer-group"></i> Tech Stack</h5>
        <table class="table table-borderless table-sm">
            <tbody>
                <tr>
                    <th scope="row">Language</th>
                    <td>Python 3.9+</td>
                </tr>
                <tr>
                    <th scope="row">Geospatial</th>
                    <td>PyKrige, SciPy</td>
                </tr>
                <tr>
                    <th scope="row">Viz</th>
                    <td>Matplotlib</td>
                </tr>
                <tr>
                    <th scope="row">DevOps</th>
                    <td>uv (package manager), Jupyter</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-code-branch"></i> Repository Structure</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>data</code> Raw Shapefiles & CSVs</small></li>
          <li class="list-group-item p-1"><small><code>images</code> Stores generated plots and visualizations</small></li>
          <li class="list-group-item p-1"><small><code>notebooks</code> Exploratory data analysis and statistical testing</small></li>
          <li class="list-group-item p-1"><small><code>scripts</code> Executable Python scripts for generating comparisons and descriptive statistics</small></li>
          <li class="list-group-item p-1"><small><code>package</code> Core package containing the implementation of interpolation algorithms</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: From Points to Surfaces

The core task was to estimate temperature and precipitation values for locations where no sensors existed.
The input dataset consisted of scattered weather stations across a region in Northern Italy.

* **Input:** Discrete coordinates (Lat, Lon) with value $Z$ (e.g., Temperature).
* **Output:** A continuous raster grid (heatmap) covering the entire area.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sp_interp/input_data_viz.png" title="Input Data Distribution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualization of the problem: sparse weather stations (points) overlaid on the region of interest.
</div>

### Methodology & Results

I compared three approaches to fill the spatial gaps:
1.  **IDW:** Fast but sensitive to outliers, creating "bullseye" artifacts.
2.  **RBF:** Smooth mathematical surface fitting.
3.  **Ordinary Kriging:** A geostatistical method that minimizes error variance by modeling spatial autocorrelation (Variogram).

**The Verdict:**
Validation showed that **Kriging** provided the most realistic representation of environmental phenomena, minimizing the Root Mean Square Error (RMSE) compared to the deterministic methods.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/sp_interp/algorithm_comparison.png" title="Algorithm Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of results: The raw IDW output (left) vs. the smoother, statistically adjusted Kriging output (right).
</div>

<br>

<h5><i class="fas fa-file-pdf"></i> Full Documentation</h5>
<div class="publications">
  <p>The methodological details, mathematical formulations of the spatial error models, and complete variable analysis are presented in the associated academic paper referenced below:</p>
  <a href="{{ '/assets/pdf/Comparative Analysis of Soil Moisture Interpolation Techniques in Apple Orchards of Trentino Region.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read Full Paper</a>
  <a href="{{ '/assets/pdf/Presentation_MetroAgriFor_2024.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">View Presentation Slides</a>
</div>
