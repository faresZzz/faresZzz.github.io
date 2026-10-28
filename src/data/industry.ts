// Industry version of the site (/industry/). Same facts as profile.ts and projects.ts,
// told for a hiring manager: experience and results first, plain-language context, research summarized.

export const industryProfile = {
  resume: '/industry/Fares_Zaghouane_Resume.pdf',
  headline:
    'I take open machine learning problems and turn them into systems that run. My work spans deep learning, computer vision, reinforcement learning and formal verification.',
  summary:
    'At <strong>Nokia Bell Labs</strong> I started from a problem with no dataset and no agreed metric, and built a video pipeline for cloud gaming that predicts which parts of each frame matter to the player, so bandwidth can go there. At <strong>Apple</strong> I built Python tooling that turns high-level specifications into formal checks for hardware designs. On my own time I rebuild the methods I use from the papers and the mathematics up, which is how I learned most of what I know.',
  lookingFor:
    'I am looking for research engineer and machine learning engineer roles in teams that do AI research.',
};

export const keyFigures = [
  { value: '2', label: 'industrial research internships, at Nokia Bell Labs and Apple' },
  { value: '~5×', label: 'estimated cost cut, versus running the semantic model on every frame' },
  { value: '12 games', label: 'about two hours of gameplay labeled automatically by a data engine I built' },
  { value: '25', label: 'reinforcement-learning algorithms rebuilt from scratch, up to Dreamer and MuZero' },
];

export const industryExperience = [
  {
    company: 'Nokia Bell Labs',
    location: 'Stuttgart, Germany',
    role: 'Research Intern (MSc thesis) · Focus-map prediction for cloud gaming',
    period: 'Aug 2025 - Feb 2026',
    plain:
      'Cloud gaming streams the game as video, and bandwidth is limited. The model predicts which parts of each frame matter to the player, so the encoder can spend its bits there.',
    bullets: [
      'Started from an open problem, with no dataset and no agreed way to measure success. With my supervisor, I designed a metric that makes training possible without hand-labeled data.',
      'Built the data engine on my own: about 2,000 keyframes annotated semi-manually (clicks plus generated masks) were used to fine-tune a vision-language model that drives an automatic labeling pipeline for about two hours of gameplay from 12 games across four genres, without months of manual labeling.',
      'Built the prediction pipeline: Grounding DINO for the semantics, RAFT optical flow for motion, and a lightweight correction network. The heavy semantic model runs on one frame in eight, which makes the pipeline about 5× cheaper by my estimate, and it beats the motion-only and saliency-only baselines.',
      'Compared this design with a JEPA-style predictor and with state-space models under the latency, compute and data constraints.',
    ],
    team: 'Team of three: two research engineers and me.',
  },
  {
    company: 'Apple',
    location: 'Munich, Germany',
    role: 'Design Verification Research Intern · Formal verification of hardware',
    period: 'Oct 2022 - Jul 2023',
    plain:
      'A bug in a chip is very expensive to fix once it is manufactured, so designs are checked mathematically before. The project aimed to let engineers write those checks at a higher level than individual clock cycles.',
    bullets: [
      'Built a Python framework that turns finite-state-machine specifications into Verilog and SystemVerilog assertions for a commercial model checker.',
      'Applied it to several industrial designs that had already been verified by hand, with bugs injected on purpose to test it.',
      'Modeled hardware behavior with event-based abstractions, so long-running processes can be checked without expanding every clock cycle.',
    ],
    team: 'A research project inside a 30-person design-verification team, carried out mainly by me with one engineer supervising.',
  },
];

export const industryProjects = [
  {
    title: 'RL from Scratch',
    status: 'Public',
    plain: 'A reinforcement-learning library and course, written from the papers.',
    result:
      '25 algorithms on one shared runtime, from Q-learning to PPO, SAC, Dreamer and MuZero. On HalfCheetah-v5, SAC and TD3 reach about 10k return and DDPG about 11k near 1M steps.',
    stack: ['PyTorch', 'Reinforcement learning', 'World models', 'MuJoCo / Gymnasium'],
    link: 'https://github.com/faresZzz/RL_from_scratch',
  },
  {
    title: 'Machine Learning from Scratch',
    status: 'Public',
    plain: 'Machine learning rebuilt from a hand-written autograd engine up, as a course and a library.',
    result:
      '52 course notebooks and a 123-module scikit-learn-style library, from classical estimators to Transformers, state-space models, diffusion and optimal transport.',
    stack: ['Python', 'NumPy', 'PyTorch', 'Generative models'],
    link: 'https://github.com/faresZzz/machine_learning_from_scratch',
  },
  {
    title: 'Structured Latent Dynamics',
    status: 'In progress',
    plain:
      'Research question: does giving the predictor of a world model an explicit dynamical structure make its long-horizon predictions more stable?',
    result:
      'A controlled comparison of structured and generic predictors (MLP, transformer, selective SSM) on coupled oscillators, with paired runs and an oracle-basis control.',
    stack: ['JEPA world models', 'Dynamical systems', 'Controlled experiments'],
    link: 'https://github.com/faresZzz/structured-latent-dynamics',
  },
  {
    title: 'Constrained Trace EBM',
    status: 'In progress',
    plain:
      'Research question: can a learned energy score whether the execution of a system respects a formal specification?',
    result:
      'Evaluated on machines never seen in training, against an exact symbolic checker, with decision thresholds fixed before the runs.',
    stack: ['Energy-based models', 'Formal verification', 'Held-out evaluation'],
    link: 'https://github.com/faresZzz/constrained-trace-ebm',
  },
  {
    title: 'GPT-2 from Scratch',
    status: 'Public',
    plain: 'A GPT-2-style language model written from the original papers.',
    result: 'Tokenization, causal multi-head attention, pretraining, generation and fine-tuning, in PyTorch.',
    stack: ['PyTorch', 'Transformers', 'Language models'],
    link: 'https://github.com/faresZzz/GPT-2_from_scratch',
  },
  {
    title: 'Stable Diffusion from Scratch',
    status: 'Public',
    plain: 'Latent diffusion rebuilt piece by piece, to see how it actually works.',
    result: 'VAE, CLIP-style text conditioning, U-Net denoiser and DDPM sampler, each traced back to its paper.',
    stack: ['PyTorch', 'Diffusion models', 'Computer vision'],
    link: 'https://github.com/faresZzz/Stable_Diffusion_from_scratch',
  },
];

export const industrySkills = [
  {
    category: 'Programming and tools',
    items: ['Python', 'PyTorch', 'NumPy', 'TensorFlow', 'Git', 'Linux', 'Jupyter'],
  },
  {
    category: 'AI and machine learning',
    items: ['Deep learning', 'Computer vision', 'Video understanding', 'Self-supervised learning', 'Transformers', 'Diffusion models', 'Reinforcement learning'],
  },
  {
    category: 'Models and systems',
    items: ['World models (JEPA)', 'State-space models (S4, Mamba)', 'Dynamical systems', 'Energy-based models', 'Vision-language model fine-tuning'],
  },
  {
    category: 'Verification and method',
    items: ['Formal verification', 'Model checking', 'Finite-state machines', 'SystemVerilog assertions', 'Controlled experiments and ablations', 'Bootstrap statistics'],
  },
];

export const industryMotivation = [
  {
    title: 'The domain I build toward',
    body:
      'Perception and control for systems that move: robots, autonomous vehicles, machines. First see the scene from video, then predict how it will evolve and act on it. My background covers both halves: video perception under a compute budget at Nokia Bell Labs, and dynamics, control and verification from my degree in computer science and electronics, my work at Apple and my research on world models.',
  },
  {
    title: 'A hard problem I tackled',
    body:
      'At Nokia Bell Labs the task had no dataset and no definition of success. With my supervisor I first designed a metric the model could be trained against without hand labels. Then I built a data engine that labeled about two hours of gameplay from some 2,000 semi-manually annotated keyframes. The first model I chose, a JEPA-style predictor, did not fit the latency and compute budget, so I dropped it and designed a lighter hybrid that runs the heavy model on one frame in eight.',
  },
  {
    title: 'What I am looking for',
    body:
      'A research team building models that see and act in the physical world, in robotics or autonomous driving, where getting the model right also means understanding the system it describes.',
  },
];

export const industryLearningIntro =
  'Most of what I use, I learned on my own, project by project: I chose something to build, read the original papers behind it, and worked the mathematics out myself instead of treating the library as a black box.';

export const industryEducation = [
  {
    school: 'EPFL',
    location: 'Lausanne, Switzerland',
    degree: 'MSc in Computer Science, Machine Learning specialization',
    period: '2023 - 2026',
  },
  {
    school: 'CPE Lyon',
    location: 'Lyon, France',
    degree: "Diplôme d'Ingénieur, Computer Science (Software Engineering & Big Data)",
    period: '2021 - 2026',
  },
];
