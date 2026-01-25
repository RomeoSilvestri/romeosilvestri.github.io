---
layout: page
title: DSS for Irrigation
description: Development and comparative evaluation of Fuzzy Logic (Mamdani) and Neuro-Adaptive (ANFIS) decision support systems for agriculture.
img: assets/img/publication_preview/dss_irrigation1.png
importance: 4
category: work
related_publications: false
---

Efficient water management in agriculture requires balancing two conflicting goals: minimizing water usage and maximizing crop health. This project developed and validated an **Irrigation Decision Support System (IDSS)** for vineyards in the Trentino region (Italy), evolving from an expert-based rule system to an adaptive machine learning approach.

**Objectives**
1.  Design an interpretable **Mamdani Fuzzy Inference System** based on agronomic expert knowledge.
2.  Develop a data-driven **ANFIS (Adaptive Neuro-Fuzzy Inference System)** to automate rule learning.
3.  Quantify the trade-offs between the two approaches regarding water savings vs. crop stress mitigation.

**My role**
- Designed the fuzzy inference engines and the rule bases.
- Implemented **Bayesian Optimization** to tune membership functions against expert surveys.
- Developed a counterfactual simulation engine to stress-test algorithms on historical data.
- Conducted statistical bootstrapping to validate performance metrics.

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
                    <th scope="row">Fuzzy Logic</th>
                    <td>Scikit-Fuzzy, PyTorch (S-ANFIS)</td>
                </tr>
                <tr>
                    <th scope="row">Optimization</th>
                    <td>Scikit-Optimize (Bayesian)</td>
                </tr>
                 <tr>
                    <th scope="row">Analysis</th>
                    <td>NumPy, Pandas, Matplotlib</td>
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
        <p>The project is modularized to separate logic from evaluation:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>data</code> Contains all datasets (CSV, XLSX) used for training</small></li>
          <li class="list-group-item p-1"><small><code>notebooks</code> For research, demonstration, and evaluation</small></li>
          <li class="list-group-item p-1"><small><code>scripts</code> Used for training models and running the main application</small></li>
          <li class="list-group-item p-1"><small><code>package</code> Core package containing the logic for different DSSs</small></li>
        </ul>
    </div>
</div>

<hr>

### The Architecture: Expert Knowledge vs. Machine Learning

The core challenge was translating complex environmental data into actionable irrigation commands (e.g., "Single Turn", "Double Turn"). The system processes four key inputs:
1.  Current Soil Moisture (Tensiometer)
2.  Predicted Soil Moisture (LSTM Forecast)
3.  Predicted Rainfall
4.  Predicted Temperature

Two architectures were implemented and compared:
* **Mamdani IDSS:** Relies on 21 explicit "IF-THEN" rules defined by agronomists. It prioritizes interpretability.
* **Takagi-Sugeno ANFIS:** Uses a neural network structure to *learn* the optimal fuzzy rules and membership functions directly from field data, prioritizing adaptability.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dss_irrigation/system_architecture.png" title="Dual IDSS Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Workflow of the dual architecture: The Mamdani branch (left) uses fixed rules, while the ANFIS branch (right) optimizes parameters via gradient descent.
</div>

### Methodology: Simulation & Optimization

To ensure the systems were field-ready, a rigorous tuning and testing pipeline was established:

1.  **Bayesian Optimization:** The membership functions (the curves defining what counts as "High" or "Low" moisture) were fine-tuned to minimize the error between the algorithm's suggestions and human expert decisions.
2.  **Counterfactual Simulation:** A "What-If" analysis engine was built to reconstruct the entire growing season. It simulated how the soil moisture *would have evolved* if the IDSS recommendations had been followed instead of the actual farmer's actions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dss_irrigation/membership_functions.png" title="Optimized Membership Functions" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dss_irrigation/membership_functions2.png" title="Optimized Membership Functions 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Evolution of Fuzzy Membership functions for input variables before (dashed) and after (solid) ANFIS training.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/dss_irrigation/simulation_comparison.png" title="Simulation Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of soil moisture trends and irrigation suggestions under different strategies.
</div>

### Results: The Trade-off

The comparative analysis revealed distinct behavioral profiles for the two systems. Both significantly outperformed the baseline (manual irrigation) by stabilizing soil moisture within the optimal agronomic range.

* **Mamdani (The "Safe" Choice):** Excellent at stress mitigation. It reduced the number of "Critical Dry Days" significantly, prioritizing plant health.
* **ANFIS (The "Efficient" Choice):** Excellent at water conservation. It achieved **>50% water savings** compared to traditional practices by adopting a more conservative irrigation schedule.

The study concluded that while ANFIS is superior for resource-scarce environments, Mamdani remains the preferred choice for high-value crops where stress avoidance is paramount.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/dss_irrigation/bootstrap_results.png" title="Bootstrap Statistical Analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Bootstrap distribution of total irrigation volume. The ANFIS model (Green) consistently suggests lower water volumes than Mamdani (Red).
</div>

<br>

<h5><i class="fas fa-file-pdf"></i> Full Documentation</h5>
<div class="publications">
  <p>This project resulted in two scientific publications covering the design of the Mamdani system and the subsequent comparative analysis with ANFIS:</p>
  <a href="{{ '/assets/pdf/Smart Irrigation with Fuzzy Decision Support Systems in Trentino Vineyards.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read Comparative Paper (Sensors)</a>
  <a href="{{ '/assets/pdf/A Fuzzy Decision Support System to Optimize Irrigation Practices in Trentino Region.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read Mamdani Paper (CoDIT)</a>
  <a href="{{ '/assets/pdf/Presentation_CoDIT_2025.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">View Presentation Slides (CoDIT)</a>
</div>