---
layout: page
title: Full MLOps Workflow
description: Advanced data integration and predictive modeling for precision irrigation using physical and machine learning approaches.
img: assets/img/soilcast/cover.png
importance: 2
category: work
related_publications: false
---

Efficient water management in agriculture requires more than just raw data; it demands the integration of diverse information sources into actionable predictive models. **SoilCast** is a comprehensive framework for the **European AI Factory** project that synchronizes field sensors, weather forecasts, and crop physiology to optimize irrigation scheduling.  

**Objectives**  
1. Integrate heterogeneous data sources, including IoT sensors, weather stations, remote sensing, and soil properties.  
2. Deploy and benchmark predictive models for soil moisture and water requirements.  
3. Provide a modular, automated pipeline for data preprocessing and model execution.  

**My Role**  
- Collaborated closely with colleagues to design the overall framework architecture.
- Implemented automated cleaning, resampling, and transformation logic.  
- Integrated the AquaCrop-OSPy physical model into the workflow.  
- Orchestrated the entire pipeline using Prefect for robust, automated execution.

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
                    <th scope="row">Orchestration</th>
                    <td>MLflow, Prefect</td>
                </tr>
                <tr>
                    <th scope="row">Models</th>
                    <td>AquaCrop-OSPy, XGBoost</td>
                </tr>
                <tr>
                    <th scope="row">Analysis</th>
                    <td>NumPy, Pandas, Scikit-learn</td>
                </tr>
                <tr>
                    <th scope="row">DevOps</th>
                    <td>uv, YAML files</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-code-branch"></i> Repository Structure</h5>
        <p>The project follows a modular pipeline design:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>config</code> YAML parameters for models and APIs</small></li>
          <li class="list-group-item p-1"><small><code>pipelines</code> Modular pipelines for all the stages of the workflow, from data preprocessing to model execution</small></li>
          <li class="list-group-item p-1"><small><code>data</code> Multi-stage storage (Input/Output) for the workflow</small></li>
          <li class="list-group-item p-1"><small><code>tools</code> Utility scripts for data handling</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: Heterogeneous Data Integration

Precision irrigation often fails because agricultural data is fragmented across different formats and temporal resolutions. Weather forecasts, local sensor measurements, and satellite imagery are often siloed, making predictive modeling difficult.  

SoilCast addresses this challenge by building a unified **Model Input** layer. The pipeline ingests:  
1. **Field Sensors:** Real-time soil moisture and tension data.  
2. **Weather Data:** Historical records and multi-day forecasts.  
3. **Crop & Soil Info:** Static parameters defining plant physiology and soil hydraulic properties.  
4. **Remote Sensing:** Vegetation indices to calibrate crop growth.  

<div class="row justify-content-sm-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/soilcast/data_integration_flow.png" title="Data Integration Flow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of the data integration process, merging heterogeneous sources into a synchronized time-series for modeling.
</div>

### Methodology & Modeling

SoilCast implements a **dual approach** for irrigation prediction:

1. **Physical Modeling (AquaCrop):** Using the FAO AquaCrop-OSPy engine to simulate the soil-water-plant-atmosphere balance, providing a mechanistic understanding of water stress and crop yield impact.  
2. **Machine Learning (XGCast):** A gradient-boosted model (XGBoost) trained on historical sensor and weather data to forecast short-term soil moisture trends.  

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-12">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/soilcast/aquacrop_simulation.png" 
            title="AquaCrop Simulation" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
</div>

<div class="caption text-center">
    AquaCrop soil water depletion simulation.
</div>

### Results: Predictive Insights

By combining physical constraints with machine learning flexibility, SoilCast provides a robust decision-support system.  

Key outcomes:  
* **Early Warning:** Predict potential water stress events up to 7 days in advance.  
* **Scenario Analysis:** Compare different irrigation strategies (e.g., deficit irrigation vs. full requirements).  
* **Scalability:** Prefect-based architecture enables scaling across multiple consortia and hundreds of fields.  

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/soilcast/irrigation_dashboard.png" title="Irrigation Decision Support" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of a final dashboard showing integrated forecasts and recommended irrigation windows.<br>
    <em>Note: This dashboard is a mockup and does not display real data.</em>
</div>

---
**Note:** To maintain confidentiality, all company names, locations, dates, and specific proprietary values have been anonymized or modified. The analysis focuses on the technical methodology and challenges encountered during the project.
