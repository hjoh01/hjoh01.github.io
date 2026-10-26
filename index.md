---
layout: homepage
---

## About Me

I am an AI Research Scientist at [VIENCE Inc.](https://vience.io/), where I develop deep learning
models and algorithms for cell quantification in VIENCE PathoView, a pathology image analysis
platform. I received my Ph.D. in Computer
Science from [HVCL](https://hvcl.korea.ac.kr/) at Korea University in August 2026, advised by
Prof. Won-Ki Jeong.

My research advances medical image analysis through diffusion-based generative modeling. As a
visiting scholar at the [Visual Computing Group](https://vcg.seas.harvard.edu/) at Harvard
University, I developed marker-wise conditioned diffusion models for virtual multiplex staining,
translating routine H&E histology into high-plex immunofluorescence images for spatially resolved
tissue analysis. I earned my B.S. in Biomedical Engineering from Korea University.

## Research Interests

- **Generative Models:** diffusion models, image synthesis and translation, synthetic data generation and validation
- **Medical Image Analysis:** computational pathology, multimodal medical AI, CT/MR imaging
- **Data-Efficient Learning:** data-centric augmentation, weakly supervised segmentation, foundation models

## Education &amp; Experience

- **[Aug. 2026 &ndash; Present]** AI Research Scientist, VIENCE Inc., Seoul, South Korea &mdash; cell quantification models for computational pathology
- **[Mar. 2021 &ndash; Aug. 2026]** Ph.D. in Computer Science, Korea University (Advisor: Won-Ki Jeong)
- **[Apr. 2024 &ndash; Mar. 2025]** Visiting Scholar, Visual Computing Group, Harvard University, Cambridge, MA, USA
- **[Mar. 2014 &ndash; Feb. 2021]** B.S. in Biomedical Engineering, Korea University

## News

<ul style="margin:0 0 10px;">
{% for item in site.data.news.main limit: 5 %}
  <li style="margin-bottom:6px;"><strong>[{{ item.date }}]</strong> {{ item.content }}</li>
{% endfor %}
</ul>

<p style="margin:0 0 20px;"><a href="{{ '/news/' | relative_url }}">See all news &rarr;</a></p>

{% include_relative _includes/publications.md %}

{% include_relative _includes/honors.md %}

{% include_relative _includes/services.md %}
