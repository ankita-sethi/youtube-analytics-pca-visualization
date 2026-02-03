# YouTube Analytics – PCA & Clustering Visualization

An interactive visual analytics project exploring global YouTube channel statistics using
dimensionality reduction, clustering, and D3.js-based visualizations.

The project focuses on understanding popularity, growth, and earning patterns of YouTube
channels through principal component analysis (PCA), scatterplot matrices, and k-means
clustering.

---

## Demo Video

A short walkthrough demonstrating the interactive visualizations and features.

▶️ Watch here: https://youtu.be/4mLw_2ShVQg

[Report](Report-2a.pdf)

---

## Dataset

**Global YouTube Statistics 2023**  
Source: Kaggle  
https://www.kaggle.com/datasets/nelgiriyewithana/global-youtube-statistics-2023

- Data points: 588 YouTube channels
- Original attributes: 16
- Numerical attributes used: 8

Selected attributes:

- subscribers
- video_views
- uploads
- video_views_for_the_last_30_days
- lowest_yearly_earnings
- highest_yearly_earnings
- subscribers_for_last_30_days
- created_year

---

## What This Project Does

### 1. Dimensionality Reduction with PCA

- Computes eigenvalues and eigenvectors using PCA
- Displays an interactive scree plot
- Allows selection of intrinsic dimensionality
- Visualizes data using a PCA-based biplot

### 2. Scatterplot Matrix

- Identifies the top 4 attributes based on PCA loadings
- Constructs a scatterplot matrix for these attributes
- Enables visual comparison of pairwise relationships

### 3. Clustering with K-Means

- Uses the elbow method to identify optimal k
- Applies k-means clustering
- Colors data points by cluster ID across visualizations

---

## Architecture

- **Backend**: Python (data preprocessing, PCA, clustering)
- **Frontend**: D3.js (interactive visualizations)
- **Client–Server Model**: Python API + browser-based visualization

---

## Key Visual Features

- Scree plot with interaction
- PCA biplot
- Scatterplot matrix
- Cluster-based color encoding
- Axis labels, legends, and tooltips for clarity

---

## Why This Project

This project demonstrates practical visual analytics techniques for exploring
high-dimensional data. By combining PCA, clustering, and interactive visualization,
it enables deeper insight into large-scale digital content ecosystems like YouTube.

---

## Tech Stack

- Python
- D3.js
- JavaScript
- HTML/CSS
