---
layout: page
title: AI Agents for Agritech
description: An advanced Multi-Agent Assistant leveraging AI agents, APIs, and RAG for precise agricultural insights.
img: assets/img/agrigraph/cover.png
importance: 3
category: work
related_publications: false
---

Modern agriculture demands intelligent systems capable of synthesizing vast amounts of data into actionable advice. **Agrigraph** is a sophisticated assistant, created for a European project, that orchestrates multiple AI agents to provide farmers and agronomists with real-time weather data, historical analysis, and precise irrigation recommendations based on project documentation and sensor simulations.

**Objectives**
1. Orchestrate specialized AI agents for multi-domain agricultural support.
2. Integrate real-time and historical weather services (Open-Meteo).
3. Implement Retrieval-Augmented Generation (RAG) for querying technical agricultural documents.
4. Provide data-driven irrigation recommendations using tensiometer predictions.

**My Role**
- Architected the multi-agent system using LangGraph and LangChain.
- Developed custom tools for weather data retrieval and coordinate conversion.
- Integrated a FAISS-based RAG pipeline for document intelligence.
- Implemented the irrigation logic and agent orchestration workflows.

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
                    <th scope="row">Frameworks</th>
                    <td>LangGraph, LangChain</td>
                </tr>
                <tr>
                    <th scope="row">Models</th>
                    <td>Google Gemini (Generative AI)</td>
                </tr>
                <tr>
                    <th scope="row">Vector DB</th>
                    <td>FAISS (Facebook AI Similarity Search)</td>
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
        <p>The project follows a modular graph-based architecture:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>agents</code> Specialist agent definitions and utilities</small></li>
          <li class="list-group-item p-1"><small><code>tools</code> Custom implementations for Weather, RAG, and Sensors</small></li>
          <li class="list-group-item p-1"><small><code>graph</code> LangGraph workflow and state orchestration</small></li>
          <li class="list-group-item p-1"><small><code>config</code> YAML-based agent prompts and model settings</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: Fragmented Agricultural Intelligence

Decision-making in the field is often hindered by the difficulty of accessing and combining diverse information sources. Technical manuals, real-time weather forecasts, and soil sensor data are frequently disconnected, leading to suboptimal crop management.

Agrigraph solves this by acting as a **Unified Knowledge Hub**. The system integrates:
1. **Weather Intelligence:** Automated retrieval of coordinates and meteorological data.
2. **Document Wisdom:** RAG-powered querying of the IRRITRE project documentation.
3. **Sensor Insights:** Predictive tools for soil moisture and irrigation needs.
4. **General Agronomy:** A fallback agent for broad agricultural queries.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/agrigraph/workflow_diagram.png" title="Agrigraph Workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of the multi-agent orchestration, showing how the Supervisor routes queries to specialized agents.
</div>

### Methodology & Orchestration

Agrigraph utilizes a **state-of-the-art multi-agent architecture** to handle complex requests:

1. **Supervisor Agent:** Analyzes user intent and routes tasks to the most qualified specialists, allowing for parallel task execution and response synthesis.
2. **Specialized Tooling:** Each agent has access to specific tools (Open-Meteo API, FAISS vector stores, tensiometer models) to ensure high-fidelity responses.
3. **Reviewer Node:** A final quality-control layer that refines the aggregated response for clarity and tone consistency.

<div class="row justify-content-sm-center mt-3">
    <div class="col-sm-10">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/agrigraph/agent_interaction.png" 
            title="Agent Interaction Detail" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
</div>

<div class="caption text-center">
    Example of interaction between the Weather Agent and the Irrigation Specialist to provide a combined recommendation.
</div>

### Results: Precision at Scale

By leveraging LLMs for both reasoning and data retrieval, Agrigraph provides a robust platform for digital agriculture.

Key outcomes:
* **Context-Aware Support:** Answers complex questions by combining technical docs with real-time conditions.
* **Simplified Access:** Users interact with a natural language interface instead of raw data silos.
* **Extensibility:** The graph-based design allows for easy integration of new tools and sensors as the project evolves.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/agrigraph/cli_interface.png" title="Agrigraph CLI Interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Agrigraph CLI assistant in action, demonstrating agent collaboration.<br>
    <em>Note: This image is a placeholder and does not display real production data.</em>
</div>

---
**Note:** To maintain confidentiality, all company names, locations, dates, and specific proprietary values have been anonymized or modified. The analysis focuses on the technical methodology and challenges encountered during the project.
