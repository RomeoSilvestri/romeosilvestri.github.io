---
layout: page
title: Time Series Forecasting
description: Time-series forecasting project comparing Statistical Models (ARIMAX) and Machine Learning for soil water content prediction.
img: assets/img/soil_ml/cover.png
importance: 6
category: work
related_publications: false
---

Predicting soil moisture is inherently a **time-series problem**: today's water content depends on yesterday's, modulated by external factors like rainfall and evapotranspiration. In this project, I modeled these temporal dynamics using **Statistical Time Series** methods (ARIMAX, Panel Data) and compared them against Machine Learning regressors.

**Objectives**
1.  Analyze the temporal structure of soil moisture data (Stationarity, Seasonality, Autocorrelation).
2.  Develop an **ARIMAX model** and **panel data models** to forecast soil moisture using weather variables as exogenous inputs.
3.  Benchmark the statistical approach against ML models (Naive, Random Forest, SVR, XGBoost) to evaluate performance.

**My role**
- Conducted stationarity tests (ADF) and decomposition analysis.  
- Tuned ARIMA hyperparameters (`p,d,q`) using ACF/PACF plots.  
- Evaluated panel data models to capture multi-site soil moisture dynamics.  
- Engineered lag and rolling window features for ML baselines.  
- Compared models using time-aware cross-validation metrics.

<br>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-layer-group"></i> Tech Stack</h5>
        <table class="table table-borderless table-sm">
            <tbody>
                <tr>
                    <th scope="row">Language</th>
                    <td>Python 3.8+</td>
                </tr>
                <tr>
                    <th scope="row">Statistics</th>
                    <td>Statsmodels (ARIMA/SARIMAX), Panel Data Models</td>
                </tr>
                <tr>
                    <th scope="row">ML</th>
                    <td>Scikit-Learn (Random Forest, SVR, XGBoost)</td>
                </tr>
                 <tr>
                    <th scope="row">Viz</th>
                    <td>Matplotlib, Seaborn</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-code-branch"></i> Repository Structure</h5>
        <p>The project separates statistical modeling from ML pipelines:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>01_EDA_Time_Series</code> Stationarity & Decomposition</small></li>
          <li class="list-group-item p-1"><small><code>02_ARIMAX_Implementation</code> Statistical Modeling</small></li>
          <li class="list-group-item p-1"><small><code>03_Panel_Data_Models</code> Multi-site temporal modeling</small></li>
          <li class="list-group-item p-1"><small><code>04_ML_Comparison</code> Random Forest/SVR Baselines</small></li>
          <li class="list-group-item p-1"><small><code>docs</code> Literature review & approach</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: Autocorrelation and External Forcing

Soil moisture data presents a dual challenge:
1.  **Strong Autocorrelation:** The value at time *t* is highly correlated with *t-1*.
2.  **External Forcing:** Changes are driven by external "shocks" (Rainfall, Evapotranspiration).

Standard ML models struggle with raw temporal dependencies unless engineered lag features are included. **ARIMAX** explicitly models the autoregressive structure, while **Panel Data models** capture multi-site dependencies and site-specific heterogeneity.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/soil_ml/decomposition.png" title="Time Series Decomposition" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Decomposition of the soil moisture signal into Trend, Seasonality, and Residual components.
</div>

### Methodology: Statistical vs. ML

The workflow was designed to rigorously test the statistical properties of the data before modeling.

1.  **Stationarity Analysis:** Used the **Augmented Dickey-Fuller (ADF)** test to check for unit roots. The series required differencing ($d=1$) to become stationary.
2.  **Order Selection:** Analyzed **ACF (Autocorrelation)** and **PACF (Partial Autocorrelation)** plots to determine the initial `p` (AR) and `q` (MA) terms for the ARIMA model.
3.  **ARIMAX Modeling:** Implemented the model using `statsmodels`. Rainfall and Temperature were fed as exogenous variables to help the model react to weather events.
4.  **ML Benchmarking:** Trained Random Forest and SVR models. To make the comparison fair, the ML dataset was augmented with "Lag Features" (shifting the target column) to simulate the memory effect inherent in ARIMA.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/soil_ml/acf_pacf.png" 
            title="ACF and PACF Plots" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/soil_ml/arimax_equation.png" 
            title="ARIMAX Concept" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
</div>

<div class="caption">
    Top: Correlograms used to identify the order of the AR and MA terms.  
    Bottom: Conceptual structure of the ARIMAX model.
</div>

### Results: Interpretability vs. Precision

The analysis provided clear distinctions between the two approaches:

* **ARIMAX (Statistical):** Provided excellent interpretability. The model coefficients allowed for quantifying exactly how much a mm of rain impacts soil moisture over time. However, it struggled with the non-linear "drying phases" of the soil.
* **Panel Data Models:** Captured site-specific heterogeneity, improving reliability across multiple locations. 
* **Machine Learning (RF):** Outperformed ARIMAX in terms of raw RMSE (Root Mean Square Error), particularly in capturing non-linear relationships during long dry spells.

The project concluded that while ML offers higher raw accuracy, ARIMAX and Panel Data models provide a more robust framework for understanding the *causal* relationship between weather inputs and soil dynamics.

<div class="row justify-content-sm-center">
    <div class="col-sm-11 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/soil_ml/forecast_comparison.png" title="ARIMAX vs ML Forecast" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Forecasting results on the test set. The ARIMAX model (Green) vs. Naive Method (red) and the actual data (Blue).
</div>

---
**Note:** To maintain confidentiality, all company names, locations, dates, and specific proprietary values have been anonymized or modified. The analysis focuses on the technical methodology and challenges encountered during the project.