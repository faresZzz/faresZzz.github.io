export const profile = {
  name: 'Farès Zaghouane',
  role: 'AI / Machine Learning Research Profile',
  headline:
    "Computer science and machine learning student — MSc at EPFL, Diplôme d'Ingénieur at CPE Lyon.",
  location: 'Lausanne, Switzerland / Lyon, France',
  email: 'zaghouane.fares@gmail.com',
  displayEmail: 'zaghouane [dot] fares [at] gmail [dot] com',
  github: 'https://github.com/faresZzz',
  linkedin: 'https://linkedin.com/in/fares-zaghouane',
  resume: '/Fares_Zaghouane_Resume.pdf',
  researchInterests: [
    'World models',
    'JEPA predictors',
    'Latent dynamical systems',
    'Koopman operators',
    'State-space models',
    'Latent geometry',
    'Energy-based models',
    'Spiking neuron models',
    'Formal verification',
    'Planning and control',
  ],
  summary:
    'Two experiences pushed me toward these questions. At <strong>Apple</strong>, doing formal verification of hardware IPs, I learned a stance more than a technique: state precisely what a system must preserve, build the instrument that detects violations, then go looking for where the design actually breaks. At <strong>Nokia Bell Labs</strong>, building dense focus-map prediction for cloud-gaming video under a hard latency budget, I watched temporal propagation drift whenever the semantic anchor got sparse, and re-anchoring was expensive. I met the question I work on now in production before I chose it on paper.',
};

export const researchDirection = [
  {
    title: 'Planning changes the compute bottleneck',
    body:
      'In a JEPA world model the encoder maps observations to latents and the predictor moves a latent forward in time. That predictor is usually a generic block, a causal transformer or an MLP, trained end to end and judged by the loss it minimizes. It can learn dynamics; its training loss does not by itself expose the quantities that decide whether long-horizon planning will work &mdash; which latent modes persist, how much margin there is before a rollout destabilizes, which directions the actions actually reach. The cost structure makes this concrete. For a single forward pass, the encoder may dominate the cost. In sampling-based planning the observation is encoded once, then the predictor is rolled over every candidate action sequence, every horizon step and every refinement iteration. That is where an agent that plans spends its compute.',
  },
  {
    title: 'A structural prior is a claim about a basis',
    body:
      'The obvious first move is to give the predictor an explicit dynamical structure, the Koopman-style family of rotation-scaling blocks. I tested it on coupled oscillators, chosen because the generator belongs to that family after an appropriate change of basis. With the representation held fixed, the structured predictor loses to a generic one. One contributing mechanism is that the prior is not coordinate-invariant: it constrains the operator <em>in the basis where it is imposed</em>, and the distance from the true generator to the model class runs from machine precision in the system\'s own modal basis to a substantial fraction of the operator norm in the coordinates the model is given. An oracle experiment that supplies the right basis removes much of the penalty without reversing the comparison. These are small-scale runs and I read them as preliminary.',
  },
  {
    title: 'What I want to measure',
    body:
      'Two predictors can sit at nearly the same training loss and still produce rollouts and action-gradients that behave nothing alike, which is why I would rather measure a predictor than argue about its architecture. The quantities I want are the ones a control engineer would ask for: a spectrum whose modes persist or decay at known rates, a margin before free-running rollouts destabilize, and directions the actions demonstrably reach &mdash; with the diagnostic calibrated against injected faults, so its precision is measured rather than assumed. That is what turns "the plan did not work" from a single scalar into an attributable failure.',
  },
];

export const researchFraming =
  'I work on the predictor of a JEPA world model: the module that moves a latent state forward in time and whose behavior shapes whether planning on top of it holds up.';

export const researchOpening =
  'The question does not sit inside a single literature. Physics-informed models ask how much of a system\'s dynamics should be built into the architecture; energy-based formulations ask what cost a planner should optimize; and the 2\u00d72 oscillatory block I study is algebraically equivalent, after exact discretization, to the subthreshold dynamics of an adaptive integrate-and-fire neuron. I treat these as sources of structure to test, not as separate research agendas.';

export const experience = [
  {
    company: 'Nokia Bell Labs',
    location: 'Stuttgart, Germany',
    role: 'Predictive Models for Cloud Gaming and Semantic Communication',
    period: 'Aug 2025 - Feb 2026',
    summary:
      'Objective: predict dense focus maps from cloud-gaming videos so bandwidth and visual quality can be allocated to the regions that matter most, while staying within strict latency constraints.',
    bullets: [
      'Ran experiments with JEPA-style latent prediction, state-space models, and Mamba Vision encoders before settling on a hybrid architecture that met the real-time latency budget while staying close to the accuracy of the expensive semantic-only signal.',
      'Built a teacher-student video prediction pipeline combining semantic anchoring, temporal propagation, and local refinement: Grounding DINO for semantic cues, RAFT for optical-flow propagation, and a lightweight correction network for dense focus maps.',
      'Designed the pseudo-supervision setup, tracked temporal drift across pipeline modes, and built the evaluation protocol for dense-map outputs.',
      'Evaluation on varied game videos showed the hybrid recovered most of the semantic-only signal\'s quality at a fraction of its cost, and clearly beat the low-cost motion- and saliency-only baselines.',
    ],
  },
  {
    company: 'Apple',
    location: 'Munich, Germany',
    role: 'Formal Verification of Hardware IPs',
    period: 'Oct 2022 - Jul 2023',
    summary:
      'Objective: generalize formal verification workflows for hardware IPs by describing state transitions from input/output events at a higher abstraction level than cycle-by-cycle RTL timing.',
    bullets: [
      'Modeled IP behavior with finite-state machines and event-based abstractions so long-running processes could be reasoned about without expanding every low-level timing step.',
      'Used model checking to reason about behaviors that simulation cannot cover exhaustively; working with formal properties changed how I think about reachable states, specifications, and what it means for a system to fail.',
      'Built Python tooling that generates Verilog/SystemVerilog assertions from high-level specifications, connecting abstract property definitions to industrial verification workflows.',
      'Tested the workflow on industrial designs; the key finding was that FSM-level specifications can drive model-checker inputs directly, with tradeoffs against hand-written properties that are clearer to reason about.',
    ],
  },
];

export const education = [
  {
    school: 'École Polytechnique Fédérale de Lausanne (EPFL)',
    location: 'Lausanne, Switzerland',
    degree: 'Master in Computer Science, Machine Learning specialization',
    period: 'Sept 2023 - Present',
    courses: ['Artificial Neural Networks and Reinforcement Learning', 'Computer Vision', 'Machine Learning', 'Natural Language Processing', 'Machine Learning in Finance', 'Cryptography and Security'],
  },
  {
    school: 'CPE Lyon',
    location: 'Lyon, France',
    degree: "Diplôme d'Ingénieur (MSc-equivalent), Computer Science — Software Engineering & Big Data track",
    period: 'Sept 2021 - Present',
    courses: ['Software architecture', 'Design patterns', 'Dynamic web', 'System administration', 'Databases', 'Data mining', 'Embedded systems', 'Quantum computing'],
  },
  {
    school: 'CPE Lyon',
    location: 'Lyon, France',
    degree: 'Licence in Computer Science and Electronics',
    period: 'Sept 2020 - Sept 2021',
    courses: ['Linear algebra', 'Algorithms', 'Digital and analog electronics', 'Discrete and continuous mathematics', 'Signal processing', 'Quantum mechanics'],
  },
];

export const skills = [
  {
    category: 'ML and representation learning',
    items: ['PyTorch', 'Neural networks', 'Self-supervised learning', 'JEPA / world models', 'Energy-based models', 'Contrastive and hinge objectives'],
  },
  {
    category: 'Dynamics, operators, and control',
    items: ['Koopman operators', 'State-space models', 'Mamba / S4', 'Exact ZOH discretization', 'Spectral methods', 'LIF / AdEx spiking neurons', 'Reinforcement learning'],
  },
  {
    category: 'Experimental method',
    items: ['Pre-registration', 'Paired factorial design', 'Positive and negative controls', 'Ablation by elimination', 'Reproducible artifacts and hashing', 'Bootstrap and permutation tests'],
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
