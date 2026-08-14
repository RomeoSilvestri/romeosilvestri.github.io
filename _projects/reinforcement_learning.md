---
layout: page
title: Reinforcement Learning
description: A PPO agent trained in a crop-soil digital twin to learn weather-aware irrigation policies from limited field data.
img: assets/img/reinforcement_learning/cover.png
importance: 1
category: work
related_publications: false
---

Irrigation scheduling is a sequential decision problem: every action changes the soil conditions that the crop and the next decision will encounter. This project applies **Deep Reinforcement Learning (DRL)** to learn an adaptive irrigation policy for vineyards, replacing fixed rules with an agent that improves through interaction with a **crop-soil digital twin**.

The framework was developed from field observations collected in the Val d'Adige area of Trentino, Italy. Because only two growing seasons were available, the agent was trained on 1,000 synthetic weather years generated from a 30-year historical climate record.

**Objectives**
1. Formulate irrigation scheduling as a continuous-action Markov Decision Process.
2. Build a digital twin that couples data-driven soil dynamics with crop growth simulation.
3. Train a weather-aware policy using Proximal Policy Optimization (PPO).
4. Evaluate water use, soil tension regulation, and crop productivity against observed field practice.

**My Role**
- Designed the end-to-end DRL framework and implemented the custom environment with **Gymnasium**.
- Defined the state, continuous action space, and multi-objective reward function.
- Developed the synthetic weather generation and soil tension modeling pipelines.
- Implemented the two-stage PPO training pipeline with **Stable-Baselines3** and evaluated the learned policy.

<br>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-layer-group"></i> Tech Stack</h5>
        <table class="table table-borderless table-sm">
            <tbody>
                <tr>
                    <th scope="row">Language</th>
                    <td>Python</td>
                </tr>
                <tr>
                    <th scope="row">RL Frameworks</th>
                    <td>Gymnasium, Stable-Baselines3</td>
                </tr>
                <tr>
                    <th scope="row">Algorithm</th>
                    <td>PPO, GAE, Actor-Critic MLP</td>
                </tr>
                <tr>
                    <th scope="row">Digital Twin</th>
                    <td>XGBoost, AquaCrop</td>
                </tr>
                <tr>
                    <th scope="row">Optimization</th>
                    <td>Optuna, NSGA-II</td>
                </tr>
                <tr>
                    <th scope="row">Data</th>
                    <td>Open-Meteo, field tensiometers</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-code-branch"></i> System Components</h5>
        <p>The learning environment combines four modules:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>weather_generator</code> KNN bootstrap for synthetic climate trajectories</small></li>
          <li class="list-group-item p-1"><small><code>soil_model</code> Autoregressive XGBoost model for daily soil tension</small></li>
          <li class="list-group-item p-1"><small><code>crop_model</code> AquaCrop simulation of biomass response</small></li>
          <li class="list-group-item p-1"><small><code>rl_environment</code> Custom Gymnasium environment for crop-soil interactions</small></li>
          <li class="list-group-item p-1"><small><code>rl_agent</code> Stable-Baselines3 PPO policy with GAE-based updates</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: Learning from Limited Field Data

A robust DRL policy needs to experience many combinations of rainfall, temperature, soil conditions, and irrigation decisions. Real agricultural datasets are typically too short to cover that variability, while exploration directly in the field could damage crops and waste water.

The solution was to train the agent inside a **digital twin**. A K-Nearest Neighbors bootstrap expands historical climate records into synthetic seasons while preserving multivariate dependencies and realistic day-to-day transitions. The resulting weather drives two complementary models:

1. **XGBoost** estimates next-day soil water tension from weather, recent tension values, and irrigation.
2. **AquaCrop** simulates the biomass response of a locally calibrated Lagrein grapevine.

Together, these models provide the state transitions and rewards required for safe simulation-based learning.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/reinforcement_learning/architecture.png" title="Crop-Soil Digital Twin Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The DRL agent interacts with a digital twin that combines synthetic weather, an ML soil model, and the AquaCrop biomass simulator.
</div>

### Reinforcement Learning Formulation

The irrigation problem is modeled as a Markov Decision Process in which the policy must anticipate how today's decision affects future soil and crop conditions.

1. **State:** current soil tension, next-day tension predicted under no irrigation, and 3-day forecasts of cumulative precipitation and maximum temperature.
2. **Action:** a continuous irrigation amount in millimeters, selected for delivery on the following day.
3. **Reward:** normalized crop biomass minus penalties for irrigation volume and deviations from the agronomically optimal soil tension range of 200-400 mbar.
4. **Policy:** an actor-critic neural network with two hidden layers of 64 neurons, trained with the **Stable-Baselines3 PPO** implementation and **Generalized Advantage Estimation** inside a custom **Gymnasium** environment.

This design gives the agent short-term weather awareness. In particular, the policy can reduce irrigation before forecast rainfall instead of reacting only after the soil crosses a fixed threshold.

### Training Strategy and Model Validation

The soil simulator was selected through expanding-window validation and a long-horizon seasonal test. ARX and XGBoost performed similarly one day ahead, but XGBoost was substantially more stable when its own predictions were recursively fed back into the simulation. It was therefore chosen as the transition model used during RL training.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/reinforcement_learning/model_benchmark.png" title="Soil Model Benchmark" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rolling-validation and seasonal-simulation results for the candidate soil tension models. XGBoost offered the best long-horizon performance.
</div>

The PPO agent was trained on **1,000 synthetic weather years** using a two-stage curriculum:

1. First, it learned the relationship between irrigation actions and soil water dynamics using the water-use and tension components of the reward.
2. Then, the biomass component was activated so the policy could refine the trade-off between water savings, crop health, and productivity.

Introducing all reward terms from the beginning led to unstable convergence. The staged approach produced stable and consistent learning across runs.

### Learned Policy Behavior

The learned strategy differs qualitatively from the observed threshold-based schedule. Field practice used a small number of large irrigation events, producing wide oscillations in soil tension. The DRL agent instead selected more frequent, low-intensity actions - typically 0.5-1 mm - and kept soil tension within a narrower band.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/reinforcement_learning/policy_comparison.png" title="Observed and DRL-Simulated Irrigation Policies" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Observed field practice (top) and the DRL-simulated policy (bottom) for the 2023-2024 seasons. The agent distributes irrigation more gradually and responds to upcoming rainfall.
</div>

### Results: Water Efficiency and Soil Regulation

Across the two evaluation seasons, the simulated DRL policy achieved:

- **19.2% lower seasonal irrigation**, from 30.50 to 24.66 mm on average.
- **128.8% more days in the optimal soil tension range**, increasing from 29.5 to 67.5 days per season.
- **Comparable simulated biomass**, with a difference of only -0.8% relative to observed practice.

These results show that the agent learned a meaningful control strategy rather than simply minimizing irrigation. It balanced water use with soil conditions and crop productivity while adapting its behavior to the weather context.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/reinforcement_learning/performance_table.png" title="DRL Policy Performance" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Simulation-based comparison of the observed irrigation schedule and the learned DRL policy. Field validation under operational conditions remains future work.
</div>

<br>

<h5><i class="fas fa-file-pdf"></i> Full Documentation</h5>
<div class="publications">
  <p>The complete methodology, reinforcement learning formulation, and experimental results are available in the published paper:</p>
  <a href="{{ '/assets/pdf/Deep Reinforcement Learning for Irrigation Optimization Based on Crop-Soil Dynamics.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">Read the Full Paper</a>
</div>
