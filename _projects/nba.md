---
layout: page
title: NBA Database Architecture
description: Comprehensive database design project comparing Relational (SQL) and NoSQL paradigms for managing NBA sports analytics data.
img: assets/img/nba_db/cover.png
importance: 3
category: university
related_publications: false
---

Sports analytics relies heavily on the ability to store, retrieve, and analyze massive amounts of data efficiently. The **NBA (National Basketball Association)** ecosystem presents a complex data modeling challenge, involving interconnected entities like players, teams, games, and play-by-play statistics.

This project, developed as part of my university coursework, aimed to build a robust information system to manage these entities, performing a comparative analysis between a traditional **Relational Database (MySQL)** and a **Document-based NoSQL Database (MongoDB)**.

**Objectives**
1. Design a conceptual and logical model capable of handling historical sports data and player statistics.
2. Implement a normalized SQL database with complex integrity constraints.
3. Migrate the architecture to a NoSQL environment to evaluate performance trade-offs in query execution.

**My role**
- Designed the Entity-Relationship (ER) diagram and Relational Schema.
- Implemented DDL/DML scripts for MySQL.
- Designed the JSON document structure for MongoDB implementation.
- Conducted query performance analysis between the two systems.

<br>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <h5><i class="fas fa-layer-group"></i> Tech Stack</h5>
        <table class="table table-borderless table-sm">
            <tbody>
                <tr>
                    <th scope="row">DBMS</th>
                    <td>MySQL, MongoDB</td>
                </tr>
                <tr>
                    <th scope="row">Languages</th>
                    <td>SQL, NoSQL</td>
                </tr>
                 <tr>
                    <th scope="row">Data Source</th>
                    <td>Kaggle</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<hr>

### The Challenge: Modeling Sports Data

The core challenge in modeling NBA data lies in the temporal dimension and the density of relationships. A simple relationship is insufficient, as players trade teams across seasons, and statistics must be tracked on a per-game basis.

The system had to account for:
1. **Many-to-Many Relationships**: Players participating in Games, Teams playing against each other.
2. **Historical Tracking**: Managing team rosters across different seasons.
3. **Granular Statistics**: Storing detailed performance metrics for every player in every game.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nba_db/er_diagram.png" title="Entity-Relationship Diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Conceptual Design (ER Diagram) showing the entities (Players, Teams, Games) and their cardinalities.
</div>

### Methodology & Implementation

The project followed a rigorous database engineering approach:

1. **Conceptual Design**: Defined entities, attributes, and hierarchies to reflect the real-world NBA structure.
2. **Logical Design (SQL)**: Mapped the ER model to a Relational Schema. This involved Normalization to eliminate redundancy and ensure data consistency in MySQL.
3. **NoSQL Adaptation**: Transformed the rigid relational structure into a flexible Document-based model. This required strategic decisions on embedding versus referencing data to optimize for typical sports analytics queries.

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/nba_db/relational_schema.png" 
            title="Relational Schema" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid 
            loading="eager" 
            path="assets/img/nba_db/mongodb_structure.png" 
            title="MongoDB JSON Structure" 
            class="img-fluid rounded z-depth-1" 
        %}
    </div>
</div>

<div class="caption">
    Comparison of paradigms for an entity: The structured Relational Schema (left) vs. the denormalized JSON structure used in MongoDB (right).
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-11 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/nba_db/query_comparison.png" title="Query Complexity Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visual comparison of an SQL query versus the equivalent aggregation pipeline in MongoDB.
</div>

### Results: SQL vs. NoSQL Performance

The final phase involved stress-testing both systems with complex analytical queries, such as calculating player averages over multiple seasons.

**Key Findings:**
* **Data Integrity**: MySQL proved superior for maintaining strict consistency, essential for transactional data like rosters and contracts.
* **Query Performance**: MongoDB outperformed MySQL in fetching full game details. By embedding player statistics within the Game documents, MongoDB required a single read operation, whereas MySQL required complex JOIN operations across multiple tables.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/nba_db/results.png" title="Query Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Final results of the query evaluation.
</div>