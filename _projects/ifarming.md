---
layout: page
title: IoT Data Analysis
description: Classical data analysis project focused on data quality assessment and validation of an automated irrigation algorithm.
img: assets/img/ifarming/cover.png
importance: 5
category: work
related_publications: false
---

Precision agriculture promises to optimize water usage, but in real-world deployments **data quality** remains the biggest bottleneck. This project, conducted within a European Agricultural testing framework, focused on validating a commercial IoT solution for vineyards against scientific reference instruments.

**Objectives**  
1. assess the reliability of a new IoT sensor setup measuring soil water potential  
2. evaluate the accuracy of an automated irrigation decision algorithm fed by those sensors

**My role**
- Designed the full data analysis pipeline
- Implemented anomaly detection and cleaning logic
- Reconstructed and stress-tested the irrigation algorithm
- Translated results into actionable recommendations for stakeholders

<br>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-layer-group"></i> Tech Stack</h5>
        <table class="table table-borderless table-sm">
            <tbody>
                <tr>
                    <th scope="row">Language</th>
                    <td>Python 3.11+</td>
                </tr>
                <tr>
                    <th scope="row">Analysis</th>
                    <td>Pandas, NumPy, SciPy, Statsmodels</td>
                </tr>
                <tr>
                    <th scope="row">Viz</th>
                    <td>Matplotlib, Seaborn</td>
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
        <p>The code is organized to ensure reproducibility:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>01_preprocessing</code> API fetch & cleaning</small></li>
          <li class="list-group-item p-1"><small><code>02_data_analysis</code> Correlation & sensor lag</small></li>
          <li class="list-group-item p-1"><small><code>03_water_effects</code> Rain/Irrigation impact</small></li>
          <li class="list-group-item p-1"><small><code>04_irrigation_suggestions</code> Algorithm validation</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: Data in the Wild

Real-world sensor data is rarely clean. The dataset consisted of time-series measurements from soil water potential sensors installed at different depths and at varying distances from irrigation drippers in a vineyard located in Northern Italy.

Two hardware systems were compared:
1.  **Commercial IoT System:** The solution under test, streaming data to a cloud-based API.
2.  **Scientific Reference System:** High-precision suction tensiometers used as ground truth.

Initial exploratory data analysis revealed several critical issues affecting the commercial sensors, including missing values, prolonged constant readings ("stuck" signals), excessive noise, and outliers incompatible with biological plant survival (values exceeding the *Permanent Wilting Point*).

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ifarming/sensor_setup_schema.png" title="Sensor Installation Schema" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic representation of sensors installation relative to an irrigation dripper.
</div>

### Methodology & Code

The analysis pipeline was built using a modular approach:

1.  **Data Ingestion:** Automated fetching from the partner's API using secure authentication.
2.  **Preprocessing:** Data were aggregated at an hourly resolution. A custom anomaly-detection logic was implemented to flag anomalies of different types.
3.  **Correlation Analysis:** Pearson correlation and lag analysis were used to quantify agreement and response delays between commercial sensors and scientific reference instruments.
4.  **Water Effects:** Sensor behavior was evaluated during irrigation and rainfall events to assess physical responsiveness.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ifarming/sensor_raw_data.png" title="Raw Sensor Data" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ifarming/heatmap.png" title="Selected Analysis Window" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, an example time series for sensor data. Right, anonimized graphical result of the correlation analysis.
</div>

### Results: Algorithmic vs. Human Logic

The most critical findings emerged when simulating the irrigation recommendations produced by the commercial system.  
The algorithm relied on a matrix-based aggregation of sensor inputs to trigger irrigation events.

By reconstructing an entire growing season, a **>10× discrepancy** was identified between algorithmic recommendations and actual field requirements:
* **Algorithmic Suggestions:** several irrigation events
* **Real Field Practice:** only a few targeted interventions

The analysis demonstrated that the algorithm was reacting primarily to sensor noise rather than genuine plant water stress.  
Without an explicit data quality layer, erroneous signals were systematically amplified into incorrect decision-making.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ifarming/irrigation_comparison.png" title="Irrigation Suggestions vs Reality" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of suggested irrigation volume (purple) vs. actual applied water (blue). The algorithmic suggestions were inflated by sensor anomalies.
</div>

---
**Note:** To maintain confidentiality, all company names, locations, dates, and specific proprietary values have been anonymized or modified. The analysis focuses on the technical methodology and challenges encountered during the project.
