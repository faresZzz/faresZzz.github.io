export const profile = {
  name: 'Farès Zaghouane',
  role: 'Machine Learning Research Engineer',
  credential: 'MSc EPFL',
  headline:
    'I work on world models, and especially on the predictor inside them. I come to it from deep learning, computer vision, reinforcement learning, dynamical systems and formal verification.',
  location: 'Lyon, France',
  email: 'zaghouane.fares@gmail.com',
  displayEmail: 'zaghouane [dot] fares [at] gmail [dot] com',
  github: 'https://github.com/faresZzz',
  linkedin: 'https://linkedin.com/in/fares-zaghouane',
  resume: '/Fares_Zaghouane_Resume.pdf',
  languages: ['French (native)', 'English (C1, Cambridge CAE)'],
  researchInterests: [
    'World models',
    'JEPA predictors',
    'Latent dynamical systems',
    'Koopman-style spectral structure',
    'State-space models',
    'Latent geometry',
    'Energy-based models',
    'Spiking neuron models',
    'Formal verification',
    'Planning and control',
  ],
  summary:
    'Two experiences pushed me toward this question. At <strong>Apple</strong>, doing formal verification of hardware IPs, I learned a stance more than a technique: state precisely what a system must preserve, build the instrument that detects violations, then go looking for where the design actually breaks. At <strong>Nokia Bell Labs</strong>, building dense focus-map prediction for cloud-gaming video with a hard latency budget as the target, I watched temporal propagation drift whenever the semantic anchor got sparse, and re-anchoring was expensive. I met the question I work on now in practice before I chose it on paper.',
};

export const researchDirection = [
  {
    title: 'Planning changes the compute bottleneck',
    body:
      'In a JEPA world model the encoder maps observations to latents and the predictor moves a latent forward in time. That predictor is usually a generic block, a causal transformer or an MLP, trained end to end and judged by the loss it minimizes. It can learn dynamics; its training loss does not by itself expose the quantities that decide whether long-horizon planning will work: which latent modes persist, how much margin there is before a rollout destabilizes, which directions the actions actually reach. The cost structure makes this concrete. For a single forward pass, the encoder may dominate the cost. In sampling-based planning the observation is encoded once, then the predictor is rolled over every candidate action sequence, every horizon step and every refinement iteration. That is where an agent that plans spends its compute.',
  },
  {
    title: 'A structural prior is a claim about a basis',
    body:
      'The obvious first move is to give the predictor an explicit dynamical structure, the Koopman-style family of rotation-scaling blocks. I tested it on coupled oscillators, chosen because the generator belongs to that family after an appropriate change of basis. With the representation held fixed, the structured predictor loses to a generic one. One contributing mechanism is that the prior is not coordinate-invariant: it constrains the operator <em>in the basis where it is imposed</em>, and the distance from the true generator to the model class runs from machine precision in the system\'s own modal basis to a substantial fraction of the operator norm in the coordinates the model is given. An oracle experiment that supplies the right basis removes part of the penalty without reversing the comparison. These are small-scale runs and I read them as preliminary.',
  },
  {
    title: 'What I want to measure',
    body:
      'Two predictors can sit at nearly the same training loss and still produce rollouts and action-gradients that behave nothing alike, which is why I would rather measure a predictor than argue about its architecture. The quantities I want are the ones a control engineer would ask for: modes that persist or decay at known rates, a margin before free-running rollouts destabilize, and directions the actions demonstrably reach, with the diagnostic calibrated against injected faults, so its precision is measured rather than assumed. That is what turns "the plan did not work" from a single scalar into an attributable failure.',
  },
];

export const motivation = [
  {
    title: 'The question I keep coming back to',
    body:
      'How can a machine learn, from what it sees, a model of the world good enough to plan and act with, and how do you tell when that model can be trusted? World models move learning from describing what is there to predicting what happens next, and the predictor is where much of that plays out.',
  },
  {
    title: 'Where my expertise comes from',
    body:
      'Two halves of the same problem. Perception under constraint: at Nokia Bell Labs I built video models that find what matters in each frame within a compute budget. Dynamics and control: I studied computer science and electronics, verified hardware at Apple by reasoning about reachable states, and my research looks at the stability of latent predictors. Robotics and autonomous driving are where the two meet.',
  },
  {
    title: 'Ideas from other fields',
    body:
      'I like borrowing structure from elsewhere: dynamical systems and control for modes and stability, energy-based models for what a planner should optimize, adaptive neuron models from neuroscience, formal verification for stating what a system must preserve. I want a PhD to take one of these links far enough to give a clear answer.',
  },
];

export const researchFraming =
  'I work on the predictor of a JEPA world model: the module that moves a latent state forward in time and whose behavior shapes whether planning on top of it holds up.';

export const researchOpening =
  'The question does not sit inside a single literature. Physics-informed models ask how much of a system\'s dynamics should be built into the architecture; energy-based formulations ask what cost a planner should optimize; and the 2\u00d72 oscillatory block I study is algebraically equivalent, after exact discretization, to the subthreshold dynamics of an adaptive integrate-and-fire neuron, threshold and reset excluded. I treat these as sources of structure to test, not as separate research agendas.';

export const experience = [
  {
    company: 'Nokia Bell Labs',
    location: 'Stuttgart, Germany',
    role: 'Research Intern (MSc thesis) · Predictive models for cloud gaming',
    period: 'Aug 2025 - Feb 2026',
    summary:
      'An under-specified research problem from the start: the first question was not which model to use, but what the system should predict and how to measure whether it helps. The target became dense focus maps predicted from cloud-gaming video, so bandwidth and visual quality go to the regions that matter. The design aimed at a strict per-frame latency budget. A team of three: two research engineers supervising, and me.',
    bullets: [
      'No dataset existed for the task. With my supervisor, I spent several weeks designing a metric that makes training possible without hand-annotated ground truth. I built the data engine on my own: about 2,000 keyframes annotated semi-manually (clicks plus generated masks) were used to fine-tune a vision-language model that drives an automatic labeling pipeline for the corpus (about two hours of gameplay from 12 games across four genres), without months of manual labeling.',
      'The approach chosen first was a JEPA-style model that propagates the latent state to predict the next focus maps directly. It was dropped under the per-frame latency, compute and dataset-size constraints, and the teacher-student pipeline below is what came out of that constraint.',
      'Built the teacher-student focus-map prediction pipeline: Grounding DINO for semantic anchoring, RAFT optical flow for temporal propagation, and a lightweight correction network for the dense focus maps. Along the way I also tried state-space models and Mamba Vision encoders. In the hybrid I kept, the heavy semantic model runs on one frame in eight and motion carries the maps in between, about 5× cheaper by my estimate than running the semantic model on every frame.',
      'Designed the pseudo-supervision setup, tracked temporal drift across pipeline modes, and built the evaluation protocol for dense maps. On overlap with the pseudo-labels, the hybrid beats the motion-only and saliency-only baselines at about a fifth of the cost of the semantic-only model.',
    ],
  },
  {
    company: 'Apple',
    location: 'Munich, Germany',
    role: 'Design Verification Research Intern · Formal verification of hardware IPs',
    period: 'Oct 2022 - Jul 2023',
    summary:
      'Objective: generalize formal verification workflows for hardware IPs by describing state transitions from input/output events, at a higher abstraction level than cycle-by-cycle RTL timing. A research project inside a 30-person design-verification team, carried out mainly by me with one engineer supervising.',
    bullets: [
      'Modeled IP behavior with finite-state machines and event-based abstractions, so long-running processes could be reasoned about without expanding every low-level timing step.',
      'Used model checking for behaviors that simulation cannot cover exhaustively; working with formal properties changed how I think about reachable states, specifications, and what it means for a system to fail.',
      'Built Python tooling that generates Verilog/SystemVerilog assertions from high-level specifications: FSM-level specifications feed the model checker directly. I applied it to several industrial designs that had already been verified by hand, with bugs injected on purpose to test it.',
      'The event-based abstraction sets the level at which reachable states are specified. Model checking operates there rather than at the cycle level, which changed which properties were practical to verify.',
    ],
  },
];

export const education = [
  {
    school: 'École Polytechnique Fédérale de Lausanne (EPFL)',
    location: 'Lausanne, Switzerland',
    degree: 'Master in Computer Science, Machine Learning specialization',
    period: 'Sept 2023 - 2026',
    courses: ['Artificial Neural Networks and Reinforcement Learning', 'Computer Vision', 'Machine Learning', 'Natural Language Processing', 'Machine Learning in Finance', 'Cryptography and Security'],
  },
  {
    school: 'CPE Lyon',
    location: 'Lyon, France',
    degree: "Diplôme d'Ingénieur (MSc-equivalent), Computer Science, Software Engineering & Big Data track",
    period: 'Sept 2021 - 2026',
    courses: [],
  },
  {
    school: 'CPE Lyon',
    location: 'Lyon, France',
    degree: 'Licence in Computer Science and Electronics',
    period: 'Sept 2020 - Sept 2021',
    courses: [],
  },
];

export const selfLearningIntro =
  'My degrees gave me the foundations. Most of the machine learning I use today, I learned on my own, project by project: I chose something to build, read the original papers behind it, and pulled in parts of public lectures (Karpathy, Stanford, MIT) where I needed them, writing the mathematics out myself rather than relying on libraries. Each line below is one thing I set out to learn, and the project that shows it.';

export const selfLearning = [
  {
    topic: 'The machine learning canon',
    how: 'Rebuilt from a hand-written autograd engine up to diffusion, optimal transport and the geometry of representations: 52 course notebooks, a 123-module library, and 196 catalogued references behind them.',
    project: 'Machine Learning from Scratch',
    link: 'https://github.com/faresZzz/machine_learning_from_scratch',
  },
  {
    topic: 'Transformers and language models',
    how: 'Wrote a GPT-2-style model against Attention Is All You Need and the GPT-1, GPT-2 and GPT-3 papers, from tokenization to pretraining, generation and fine-tuning.',
    project: 'GPT-2 from Scratch',
    link: 'https://github.com/faresZzz/GPT-2_from_scratch',
  },
  {
    topic: 'Vision and self-supervised learning',
    how: 'Built a Vision Transformer for supervised, masked-autoencoder and DINO-style training, and compared four ways of encoding position (learned, sine-cosine, RoPE, RoPE2D).',
    project: 'Vision Transformer from Scratch',
    link: 'https://github.com/faresZzz/ViT_from_scratch',
  },
  {
    topic: 'Generative models',
    how: 'Reconstructed latent diffusion as a system: VAE, CLIP-style text conditioning, U-Net denoiser and DDPM sampler, each traced back to its paper.',
    project: 'Stable Diffusion from Scratch',
    link: 'https://github.com/faresZzz/Stable_Diffusion_from_scratch',
  },
  {
    topic: 'Reinforcement learning and world models',
    how: 'Implemented 25 algorithms on one shared runtime, from tabular Q-learning to Dreamer, MuZero and an action-conditioned JEPA world model that plans with CEM.',
    project: 'RL from Scratch',
    link: 'https://github.com/faresZzz/RL_from_scratch',
  },
  {
    topic: 'Doing research end to end',
    how: 'Two research projects, still in progress, run on my own from the question to the protocol and the code, with negative results reported as they come.',
    project: 'Research projects',
    link: '#research',
  },
];

export const skills = [
  {
    category: 'ML and representation learning',
    items: ['PyTorch', 'Neural networks', 'Self-supervised learning', 'JEPA / world models', 'Energy-based models', 'Contrastive and hinge objectives'],
  },
  {
    category: 'Dynamics, operators, and control',
    items: ['Koopman-style spectral constraints', 'State-space models', 'Mamba / S4', 'Exact ZOH discretization', 'Spectral methods', 'Reinforcement learning'],
  },
  {
    category: 'Experimental method',
    items: ['Paired factorial design', 'Positive and negative controls', 'Ablation by elimination', 'Reproducible artifacts and hashing', 'Bootstrap and permutation tests'],
  },
  {
    category: 'Vision and multimodal systems',
    items: ['Computer vision', 'Video understanding', 'Grounding DINO', 'RAFT / optical flow', 'Focus-map prediction', 'Multimodal data pipelines'],
  },
  {
    category: 'Mathematical foundations',
    items: ['Linear algebra', 'Dynamical systems', 'Applied statistics', 'Optimization', 'Signal processing', 'Functional analysis'],
  },
  {
    category: 'Software and formal methods',
    items: ['Python', 'NumPy', 'Formal verification', 'Model checking', 'Finite-state machines', 'Verilog / SystemVerilog assertions'],
  },
];
