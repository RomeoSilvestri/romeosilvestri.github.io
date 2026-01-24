---
layout: page
title: PRISMA Review with LLM & RAG
description: Research framework designed to automate and standardize the systematic literature review process according to PRISMA 2020.
img: assets/img/prisma/cover.png
importance: 1
category: work
related_publications: false
---

Automating PRISMA is an innovative framework aimed at simplifying and accelerating systematic literature reviews, strictly aligning with **PRISMA 2020** standards. By integrating Large Language Models (LLMs), specifically Google Gemini, and Retrieval-Augmented Generation (RAG) systems, the project automates the most time-consuming phases of bibliographic research.

**Objectives**  
1. Standardize the identification and screening process of scientific contributions.
2. Reduce human error and subjective variability in eligibility analysis.
3. Accelerate the screening phases of titles, abstracts, and full texts while maintaining high methodological rigor.

**My Role**
- Design of the framework architecture and automation pipeline.
- Implementation of the LLM-based screening logic (Gemini 2.5 Flash/Pro).
- Development of the RAG system for in-depth PDF analysis and inclusion criteria verification.
- Validation of automated results against "human-verified" reference datasets.

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
                    <th scope="row">AI/LLM</th>
                    <td>Google Gemini (Generative AI), LangChain</td>
                </tr>
                <tr>
                    <th scope="row">Vector DB</th>
                    <td>FAISS (Facebook AI Similarity Search)</td>
                </tr>
                 <tr>
                    <th scope="row">DevOps</th>
                    <td>uv (package manager), Jupyter, python-dotenv</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-code-branch"></i> Repository Structure</h5>
        <p>The organization follows the PRISMA workflow phases:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-1"><small><code>01_identification_screening</code> Title and abstract filtering</small></li>
          <li class="list-group-item p-1"><small><code>02_screening_evaluation</code> Metadata harmonization and validation</small></li>
          <li class="list-group-item p-1"><small><code>03_eligibility_RAG</code> Full-text analysis via RAG</small></li>
          <li class="list-group-item p-1"><small><code>replicated_study_workflow</code> Complete end-to-end workflow</small></li>
        </ul>
    </div>
</div>

<hr>

### The Challenge: Efficiency and Rigor in Systematic Review

Systematic reviews require the screening of thousands of articles, a process often prone to human fatigue and bias. The main challenge lies in maintaining the traceability and reproducibility required by PRISMA standards while leveraging the speed of artificial intelligence.

The framework addresses three critical phases:
1.  **Identification:** Management of bibliographic exports from Scopus, IEEE, and WoS.
2.  **Screening:** Rapid filtering based on deterministic criteria applied to abstracts.
3.  **Eligibility:** Complex analysis of full-text manuscripts in PDF format.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prisma/workflow_diagram.png" title="PRISMA Automation Workflow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic representation of the automated workflow aligned with PRISMA 2020 criteria.
</div>

### Methodology and Implementation

The pipeline was built with a modular and "human-in-the-loop" approach:

1.  **Data Ingestion:** Processing of CSV/XLS files from various bibliographic databases.
2.  **Automated Screening:** Using Gemini to evaluate adherence to inclusion/exclusion criteria based on titles and abstracts.
3.  **RAG-powered Eligibility:** For selected papers, the system builds a local vector store (FAISS). Documents are segmented, encoded as embeddings, and queried to verify specific criteria within the full text.
4.  **Harmonization:** Automatic extraction of study attributes into a consistent schema for final reporting.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/prisma/screening.png" 
            title="Screening Results" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/prisma/eligibility.png" 
            title="Eligibility Results" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
</div>

<div class="caption">
    Top: screening pipeline. Bottom: eligibility pipeline.
</div>

### Results: Transparency and Reproducibility

The application of the framework demonstrated a significant reduction in screening times. The use of structured prompts and deterministic logic ensures that every decision is justified and traceable, reducing the variability typical of human reviewers.

Key Results:
* **Time Efficiency:** Drastic reduction in the time required for reading and classifying papers.
* **Accuracy:** High consistency with manual validations, with fallback mechanisms for uncertain cases requiring human.
* **Standardization:** Automatic generation of harmonized metadata ready for final synthesis.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/prisma/comparison_metrics.png" title="Manual vs Automated Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison between the performance of manual screening and the automated one supported by the framework.
</div>

---
**Note:** To maintain confidentiality, all company names, locations, dates, and specific proprietary values have been anonymized or modified. The analysis focuses on the technical methodology and challenges encountered during the project.
