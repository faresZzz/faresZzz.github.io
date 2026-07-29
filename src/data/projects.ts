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
    status: 'Public',
    theme: 'ML fundamentals / geometric representation learning',
    description:
      'A from-scratch machine-learning curriculum: 52 course-style notebooks backed by a scikit-learn-style Python library, running from a hand-written autograd engine to the geometry of learned representations. Each notebook takes one model apart rather than only re-implementing it.',
    highlights: [
      'Every chapter is written as a full course rather than a code dump: why the family was invented, what each term of the equation means, what each hyperparameter actually controls, and what the experiment shows when the model fails. The recurring question is why one design supersedes another — why convolution fits images better than a dense MLP, why a ViT ends up ahead of a CNN, why GAN instability pushed the field toward score-based and diffusion models.',
      'Covers the full arc: numerical foundations with a custom Tensor/autograd engine, classical supervised and unsupervised estimators in NumPy, then CNNs, RNN/LSTM, Transformers, state-space models (S4, Mamba), GNNs, and generative modeling (VAE, GAN, contrastive learning, energy-based models (EBM) and score matching, DDPM, flow matching, latent diffusion) in PyTorch.',
      'Closes on the part my other from-scratch projects never reach: the geometry of representations — manifold learning, Riemannian optimization, optimal transport (Wasserstein/Sinkhorn), information geometry and the natural gradient, hyperbolic embeddings, equivariant networks, and diagnostics such as CKA and intrinsic dimension.',
      'Shared fit/predict/transform API across 123 modules, and implementations traced back to 196 catalogued research papers.'
    ],
    stack: ['Python', 'NumPy', 'PyTorch', 'Autograd', 'Generative models', 'Geometric deep learning'],
    link: 'https://github.com/faresZzz/machine_learning_from_scratch'
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
    title: 'RL from Scratch',
    status: 'Public',
    theme: 'Reinforcement learning / world models',
    description:
      'A from-scratch PyTorch reinforcement-learning curriculum that rebuilds 25 algorithms from tabular Q-learning to latent world models, with course-style notebooks and a shared training runtime.',
    highlights: [
      'Each algorithm is treated as a full learning chapter: intuition, math, implementation, and a runnable demo before the code is refactored into a clean package.',
      'Built a shared registry-based runtime with YAML configs, run artifacts, deterministic evaluation, and a multi-seed benchmark setup for comparing methods across Gymnasium/MuJoCo environments.',
      'Focuses on readable pedagogical code that still trains: from DQN/Rainbow and PPO/SAC to Dreamer, MuZero, and an action-conditioned JEPA world model inspired by V-JEPA 2-AC, using latent CEM/MPC planning.',
      'Continuous-control runs reached strong HalfCheetah-v5 results under local hardware limits, with SAC/TD3 around 10k return and DDPG around 11k near 1M steps; the model-based notebooks also show the expected sample-efficiency gains on smaller training budgets.'

    ],
    stack: ['Python', 'PyTorch', 'Reinforcement learning', 'Model-based RL', 'World models', 'MuJoCo / Gymnasium'],
    link: 'https://github.com/faresZzz/RL_from_scratch'
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
