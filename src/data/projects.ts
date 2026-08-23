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
    title: 'Structured Latent Dynamics',
    status: 'In progress',
    theme: 'World models / operator structure in JEPA predictors',
    description:
      'Can an explicit dynamical prior make the latent rollouts of a JEPA world model more stable? I test a Koopman-style predictor, 2×2 rotation-scaling blocks, on coupled oscillators: a setting built to give the prior every advantage, since after an appropriate change of basis the true generator belongs to the structured family. The published comparisons hold the representation fixed, and there the structured predictor still loses to a generic one, on two backbones independently. The diagnosis is that a structural prior of the Koopman family is a statement about a basis, not about coordinates.',
    highlights: [
      'Runs are paired within backbone, so the two arms share seed, data, rate and compute budget. Least squares recovers the planted operator from the data, so the dynamics I am asking for really do sit inside the model family; training by gradient descent does not reach that solution. Representational capacity and trainability are separate problems.',
      'Handing the model the true basis as a frozen oracle removes most of the penalty on the MLP backbone, across five seeds on one system. It does not establish an advantage for structure: against the generic predictor the contrast is indeterminate. That basis comes from ground truth, so the arm is a ceiling rather than a competitor. The coupling is a contributing mechanism; it is not sufficient to reverse the sign.',
      'What the study leaves open is whether the penalty survives when the representation and the structured dynamics are learned together, instead of imposing the prior on coordinates fixed elsewhere. That is the experiment I would run next, and this one cannot settle it.',
    ],
    stack: ['JEPA world models', 'Koopman-style operators', 'Latent dynamical systems', 'State-space models', 'Rollout stability', 'Controlled experiments'],
    link: 'https://github.com/faresZzz/structured-latent-dynamics'
  },
  {
    title: 'Constrained Trace EBM',
    status: 'In progress',
    theme: 'Energy-based models / verifiable constraints',
    description:
      'Can a learned energy score execution traces while staying accountable to exact temporal properties? I train a specification-conditioned energy model on finite-state-machine traces and evaluate it against a symbolic verifier, with the claims and the decision thresholds fixed before the experiments run. Inspired by the public framing of Logical Intelligence\'s Kona energy-based reasoning model.',
    highlights: [
      'The symbolic verifier decides exactly whether a trace satisfies a property, so the labels are exact rather than estimated. A differentiable implementation of the same temporal semantics runs alongside as a control, which separates what can be computed directly from what the learned energy has to infer.',
      'On machines never seen in training, the bootstrap lower bound on macro-AUROC reaches 0.772 against a floor of 0.75 fixed in advance. The margin is positive but narrow, 0.022, and the frozen compute budget under-trained the arm. An exploratory, post-hoc ablation suggests the model reads its specification rather than the surface of the trace: on the tier where every step is legal and only the whole trace decides, scrambling the property channel drops detection to the level of the control, while scrambling the dynamics channel does not.',
      'Other claims come out weaker or inconclusive, and I report them that way: the global-versus-local comparison, for one, may be measuring the compute budget rather than the architecture. The open question is whether this energy can become a useful planning cost without giving up the verifiability of the evaluation.',
    ],
    stack: ['Energy-based models', 'Formal verification', 'Temporal specifications', 'Finite-state machines', 'Neural algorithmic reasoning', 'Held-out evaluation'],
    link: 'https://github.com/faresZzz/constrained-trace-ebm'
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
    title: 'Machine Learning from Scratch',
    status: 'Public',
    theme: 'ML fundamentals / geometric representation learning',
    description:
      'A from-scratch machine-learning curriculum: 52 course-style notebooks backed by a scikit-learn-style Python library, running from a hand-written autograd engine to the geometry of learned representations. Each notebook takes one model apart rather than only re-implementing it.',
    highlights: [
      'Every chapter is written as a full course rather than a code dump: why the family was invented, what each term of the equation means, what each hyperparameter actually controls, and what the experiment shows when the model fails. The recurring question is why one design supersedes another — why convolution fits images better than a dense MLP, why a ViT ends up ahead of a CNN, why GAN instability pushed the field toward score-based and diffusion models.',
      'Covers the full arc: numerical foundations with a custom Tensor/autograd engine, classical supervised and unsupervised estimators in NumPy, then CNNs, RNN/LSTM, Transformers, state-space models (S4, Mamba), GNNs, and generative modeling (VAE, GAN, contrastive learning, energy-based models (EBM) and score matching, DDPM, flow matching, latent diffusion) in PyTorch.',
      'The last section goes past a standard ML curriculum: the geometry of representations — manifold learning, Riemannian optimization, optimal transport (Wasserstein/Sinkhorn), information geometry and the natural gradient, hyperbolic embeddings, equivariant networks, and diagnostics such as CKA and intrinsic dimension.',
      'Shared fit/predict/transform API across 123 modules, and implementations traced back to 196 catalogued research papers.'
    ],
    stack: ['Python', 'NumPy', 'PyTorch', 'Autograd', 'Generative models', 'Geometric deep learning'],
    link: 'https://github.com/faresZzz/machine_learning_from_scratch'
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
  },

];

export const otherEngineering = [
  'Formal verification workflows for hardware IPs',
  'FastAPI backend experiments',
  'Vehicle detection and applied computer vision',
  'Microservices and software architecture coursework'
];
