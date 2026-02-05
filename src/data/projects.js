// import InteractiveSegmentation2022 from '../assets/images/InteractiveSegmentation2022.png';
// // import QualityMatter2022 from '../assets/images/QualityMatter2022.png';
// import CVPR2022 from '../assets/images/CVPR2022.png';
// import CHI2020 from '../assets/images/CHI2020.png';
// import CIKM2020 from '../assets/images/CIKM2020.png';
// import TVCG2019 from '../assets/images/TVCG2019.png';
// import ForecastingSys2019 from '../assets/images/ForecastingSys2019.png';
// import GenomeAnalysis2018 from '../assets/images/GenomeAnalysis2018.png';
// import Circos2018 from '../assets/images/Circos2018.png';
// import MCV2018 from '../assets/images/MCV2018.png';

// import TVCG2019PDF from '../assets/pdfs/TVCG2019.pdf';

import paip2023 from '../assets/images/paip2023.png';
import diffmix from '../assets/images/diffmix.png';
import nafld from '../assets/images/nafld.png';
import discds from '../assets/images/discds.png';
import diffvs from '../assets/images/diffvs.png';


const projs = [
  {
    title: 'PAIP 2023 Challenge Platform',
    image: paip2023,
    content:
      'Student contributor for the PAIP 2023 tumor cellularity prediction challenge (official ISBI 2023 challenge) aiming to develop automatic and reliable TC evaluation algorithms across pancreas and colon cancer. Built and maintained components of a pathology image analysis platform supporting tumor cell segmentation, TC estimation, and large-scale whole-slide image processing in collaboration with Seoul National University Hospital and Seoul National University.',
    tags: [
      { tag: '[Challenge Page]', link: 'https://2023paip.grand-challenge.org/2023paip/' },
      { tag: '[Code]', link: 'https://github.com/PAIP-challenge/PAIP-2023' },
    ],
  },
  {
    title: 'Pathology Nuclei Data Augmentation',
    image: diffmix,
    content:
      'Proposed DiffMix, a diffusion model-based data augmentation framework for imbalanced pathology nuclei datasets. The method generates virtual nuclei patches from semantic label maps using conditional diffusion models to balance rare nuclei classes and enrich morphology, improving both nuclei segmentation and classification performance on public benchmarks.',
    tags: [
      { tag: '[PDF]', link: 'https://arxiv.org/pdf/2306.14132.pdf' }, // [web:25][web:27]
      { tag: '[Code]', link: 'https://github.com/hvcl/DiffMix' },
    ],
  },
  {
    title: 'NAFLD Histology Analysis',
    image: nafld,
    content:
      'Joint project with Seoul National University Hospital on non-alcoholic fatty liver disease (NAFLD) liver biopsy slides. Developed and deployed steatosis segmentation models within the Vience Pathoview pathology platform to enable interactive visualization, quantitative measurement, and reporting of steatosis regions for clinical and research workflows.',
    // tags: [
    //   { tag: '[Platform]', link: 'https://vience.io/pathoview' },
    // ],
  },
  {
    title: 'DiSC-DS: Long-Tailed Food Image Classification',
    image: discds,
    content:
      'Developed diffusion-based food image classifiers for dietary assessment under long-tailed class distributions. Proposed a synthetic data augmentation pipeline using pre-trained diffusion models to increase minority-class diversity and improve recognition of rare foods, accepted at the CVPR 2025 MetaFood Workshop.',
    tags: [
      {
        tag: '[PDF]',
        link: 'https://openaccess.thecvf.com/content/CVPR2025W/MTF/papers/Koh_Synthetic_Data_Augmentation_using_Pre-trained_Diffusion_Models_for_Long-tailed_Food_CVPRW_2025_paper.pdf',
      },
      { tag: '[Workshop]', link: 'https://sites.google.com/view/cvpr-metafood-2025' },
      { tag: '[Code]', link: 'https://github.com/hvcl/DiSC_DS' },
    ],
  },
  {
    title: 'DiffVS: H&E to Multiplex Immunofluorescence Translation',
    image: diffvs,
    content:
      'Research collaboration with Harvard Medical School and Harvard University on virtual multiplex staining. Designed a marker-wise conditioned diffusion framework to translate routine H&E slides into multiplex immunofluorescence marker images within a single shared model, aiming to reduce the cost of multiplex imaging and enable scalable, spatially resolved biomarker analysis from standard histology.',
    tags: [
      { tag: '[PDF]', link: 'https://arxiv.org/abs/2508.14681' },
      { tag: '[Code]', link: 'https://github.com/hvcl/DiffVS' },
    ],
  },
];

export default projs;