export type Project = {
  title: string;
  status: 'Public' | 'Private' | 'In progress';
  theme: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Machine Learning from Scratch',
    status: 'In progress',
    theme: 'ML fundamentals / reusable library',
    description:
      'A notebook and Python library project where I rebuild classical machine learning and deep learning models from the math up, then move the useful pieces into reusable modules.',
    highlights: [
      'Starts with linear regression, logistic regression, k-NN, perceptrons, and MLPs, then extends toward CNNs, transformers, SSMs, reinforcement learning, and optimizers such as SGD, Adam, and AdamW.',
      'Each topic is developed first in a mathematical notebook, then cleaned into code that can be reused in later models.',
      'The current local version includes linear regression and k-NN notebooks plus modules for activations, layers, MLPs, utilities, and optimizers.'
    ],
    stack: ['Python', 'NumPy', 'Jupyter', 'ML algorithms']
  },
  {
    title: 'GPT-2 from Scratch',
    status: 'Public',
    theme: 'Transformer language modeling',
    description:
      'A PyTorch implementation of a GPT-2-style decoder-only Transformer, written while working through the original Transformer and GPT papers.',
    highlights: [
      'Implements tokenization, token and positional embeddings, causal self-attention, multi-head attention, transformer blocks, pretraining, generation, and fine-tuning.',
      'Written directly against the original papers: Attention Is All You Need, GPT-1, GPT-2, GPT-3, GELU, Self-Instruct, and MMLU.',
      'The public version includes cleaned notebooks, lightweight figures, a concise README, and a pre-commit hook to keep notebook outputs out of version control.'
    ],
    stack: ['Python', 'PyTorch', 'Transformers', 'Jupyter'],
    link: 'https://github.com/faresZzz/GPT-2_from_scratch'
  },
  {
    title: 'Vision Transformer from Scratch',
    status: 'Public',
    theme: 'Vision architecture fundamentals',
    description:
      'A PyTorch Vision Transformer built from scratch for supervised image classification, masked autoencoding, and DINO-style self-supervised training.',
    highlights: [
      'Implements patch embedding, the class token, positional encodings, multi-head self-attention, pre-norm transformer blocks, MAE, and DINO-style student-teacher training.',
      'Compares learned, sine-cosine, RoPE, and RoPE2D position handling through source modules and walkthrough notebooks.',
      'Includes YAML experiment configs, checkpoint resume support, saved artifacts, cleaned notebooks, and tests without publishing local data or weights.'
    ],
    stack: [
      'PyTorch',
      'Vision Transformer',
      'Computer vision',
      'MAE',
      'DINO',
      'Self-supervised learning'
    ],
    link: 'https://github.com/faresZzz/ViT_from_scratch'
  },
  {
    title: 'Stable Diffusion from Scratch',
    status: 'Public',
    theme: 'Generative modeling / diffusion',
    description:
      'A PyTorch reconstruction of the main Stable Diffusion components, built to understand latent diffusion as a system rather than just run a checkpoint.',
    highlights: [
      'Implements the VAE encoder/decoder, CLIP-style text conditioning, U-Net denoising blocks, DDPM sampler, model loading utilities, and generation pipeline.',
      'Written against the original papers (latent diffusion, DDPM, VAE, CLIP, U-Net, ResNet) to keep the implementation traceable back to the published methods.',
      'The public version keeps notebooks clean and leaves local weights, data, and papers out of the repository.'
    ],
    stack: ['Python', 'PyTorch', 'Diffusion models', 'Computer vision'],
    link: 'https://github.com/faresZzz/Stable_Diffusion_from_scratch'
  },
  {
    title: 'Cart-Pole Q-Learning',
    status: 'Public',
    theme: 'Reinforcement learning / control',
    description:
      'A compact Q-learning project for the Cart-Pole control problem, kept as a small but complete reinforcement learning example.',
    highlights: [
      'Implements an agent that learns to balance the pole by choosing cart actions from environment feedback.',
      'Includes environment handling, a training entry point, utilities, model storage, parameter configuration, figures, and tests.',
      'A first complete RL project, kept before expanding toward planning and model-based methods.'
    ],
    stack: ['Python', 'Q-learning', 'Gymnasium', 'Testing'],
    link: 'https://github.com/faresZzz/cartPole'
  },
  {
    title: 'V-JEPA2 ROI Semantic Extraction',
    status: 'Private',
    theme: 'JEPA / semantic video understanding',
    description:
      'A private research prototype around region-of-interest semantic extraction with V-JEPA-style video representations.',
    highlights: [
      'Tests how predictive video representations can be organized around meaningful regions rather than only pixels.',
      'The underlying question is whether predictive representations can be built around semantic regions rather than spatial patches, a problem that came up directly in the Bell Labs work.',
      'Kept private while the research direction and artifacts are still being refined.'
    ],
    stack: ['Python', 'PyTorch', 'V-JEPA', 'Computer vision']
  },
  {
    title: 'VLM Data Engine',
    status: 'Private',
    theme: 'Multimodal data systems',
    description:
      'A private video data engine for multimodal learning experiments, covering the practical work needed before a model ever sees the data.',
    highlights: [
      'Includes shard processing, FPS conversion, scene detection, clip extraction, monitoring utilities, and transfer preparation.',
      'Contains annotation tooling and generated test clips for checking data quality before training.',
      'Built to support video understanding and multimodal world-model experiments where data preparation matters as much as model code.'
    ],
    stack: ['Python', 'Video processing', 'Data pipelines', 'VLM tooling']
  }
];

export const otherEngineering = [
  'Formal verification workflows for hardware IPs',
  'FastAPI backend experiments',
  'Vehicle detection and applied computer vision',
  'Microservices and software architecture coursework'
];
