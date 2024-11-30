import ISBI2022 from '../assets/images/ISBI2022.png';
import TVCG2023 from '../assets/images/TVCG2023.png';
import MICCAI2023 from '../assets/images/MICCAI2023.png';
import MICCAIW2023 from '../assets/images/MICCAIW2023.png';
import MICCAI2024 from '../assets/images/MICCAI2024.png';
import ECCV2024 from '../assets/images/ECCV2024.png';

const pubs = [
  {
    title: 'Co‑synthesis of Histopathology Nuclei Image‑Label Pairs using a Context‑Conditioned Joint Diffusion Model',
    author:
      '*Seonghui Min, *Hyun-Jic Oh, Won-Ki Jeong',
    conference: 'IEEE European Conference on Computer Vision (ECCV), 2024, Accepted ',
    image: ECCV2024,
    tags: [
      { tag: '[PDF]', link: 'https://arxiv.org/abs/2407.14434' },
      { tag: '[Video]', link: 'https://www.youtube.com/watch?v=_CWxR9CXjM8' },
      { tag: '[Github]', link: 'https://github.com/hvcl/CoSyn-ContextCondNucAug' },
    ],
  },
  {
    title: 'Controllable and Efficient Multi‑Class Pathology Nuclei Data Augmentation using Text‑Conditioned Diffusion Models',
    author:
      'Hyun-Jic Oh, Won-Ki Jeong',
    conference: 'International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), 2024, Accepted ',
    image: MICCAI2024,
    tags: [
      { tag: '[PDF]', link: 'https://arxiv.org/abs/2407.14426' },
      { tag: '[Github]', link: 'https://github.com/hvcl/ConNucDA' },
    ],
  },
  {
    title: 'Evaluation and improvement of Segment Anything Model for interactive histopathology image segmentation',
    author:
      'SeungKyu Kim, Hyun-Jic Oh, Seonghui Min, Won-Ki Jeong',
    conference: 'MICCAI 2023 1st International Workshop on Foundation Models for General Medical AI (MedAGI), Accepted ',
    image: MICCAIW2023,
    tags: [
      { tag: '[PDF]', link: 'https://arxiv.org/abs/2310.10493' },
    ],
  },
  {
    title: 'DiffMix: Diffusion Model-based Data Synthesis for Nuclei Segmentation and Classification in Imbalanced Pathology Image Datasets',
    author:
      'Hyun-Jic Oh, Won-Ki Jeong',
    conference: 'International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), 2023, Accepted ',
    image: MICCAI2023,
    tags: [
      { tag: '[PDF]', link: 'https://arxiv.org/abs/2306.14132' },
      { tag: '[Github]', link: 'https://github.com/hvcl/DiffMix' },
    ],
  },
  {
    title: 'MitoVis: A Unified Visual Analytics System for End-to-End Neuronal Mitochondria Analysis',
    author:
      'JunYoung Choi, Hyun-Jic Oh, HakJun Lee, Suyeon Kim, Seok-Kyu Kwon, Won-Ki Jeong',
    conference: 'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023, Accepted ',
    image: TVCG2023,
    tags: [
      { tag: '[PDF]', link: 'https://ieeexplore.ieee.org/abstract/document/10005035' },
      { tag: '[Github]', link: 'https://github.com/hvcl/MitoVis-public' },
    ],
  },
  {
    title: 'Scribble-Supervised Cell Segmentation Using Multiscale Contrastive Regularization',
    author:
      'Hyun-Jic Oh, Kanggeun Lee, Won-Ki Jeong',
    conference: 'IEEE International Symposium on Biomedical Imaging (ISBI), 2022, Accepted ',
    image: ISBI2022,
    tags: [
      { tag: '[PDF]', link: 'https://arxiv.org/abs/2306.14136' },
      { tag: '[Github]', link: 'https://github.com/hvcl/ScrCont_extension' },
    ],
  },    
];


export default pubs;
