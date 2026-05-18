export const profile = {
  name: 'Farès Zaghouane',
  role: 'AI / Machine Learning Research Profile',
  headline:
    "Computer science and machine learning student — MSc at EPFL, Diplôme d'Ingénieur at CPE Lyon.",
  location: 'Lausanne, Switzerland / Lyon, France',
  email: 'zaghouane.fares@gmail.com',
  displayEmail: 'zaghouane.fares [at] gmail [dot] com',
  phone: '+33 7 69 37 68 31',
  github: 'https://github.com/faresZzz',
  linkedin: 'https://linkedin.com/in/fares-zaghouane',
  resume: '/Fares_Zaghouane_Resume.pdf',
  researchInterests: [
    'World models',
    'JEPA predictors',
    'Latent dynamical systems',
    'State-space models',
    'Koopman operators',
    'Representation learning',
    'Computer vision',
    'Reinforcement learning',
    'Planning and control',
  ],
  summary:
    'Two experiences pushed me toward these questions. At <strong>Apple</strong>, doing formal verification of hardware IPs, I started thinking about systems in terms of reachable states and specifications, and about the gap between what a proof actually covers and what simulation catches. At <strong>Nokia Bell Labs</strong>, building dense focus-map prediction for cloud-gaming video under strict latency constraints, I watched temporal propagation drift whenever the semantic anchor got sparse. Re-anchoring was expensive. That drift stuck with me. In JEPA-style world models, the encoder learns what to represent, but the predictor, the part that moves latent states forward in time, is usually a generic network with no transition structure at all. I want to understand whether giving it more structure would help, and what that might look like in practice.',
  // Internal narrative anchor — not rendered on the site.
  // Kept here so summary / research interests / research direction stay consistent
  // with the full vision. The speculative P5 / alternative-substrate direction
  // remains private ("Prudent PhD" public posture: ambitious but testable).
  longTermVision:
    'My longer-term hypothesis is that part of the computational and energy cost of modern AI comes from the mathematical substrate itself: dense matrix multiplication over standard vector spaces. Rather than treating this only as an engineering optimization problem, I am interested in whether alternative structures can change the scaling behavior of learned world models. For a PhD proposal, I would not start by claiming a full replacement of dense deep learning. I would begin with a narrower and testable question: can JEPA predictors benefit from structured latent dynamics, such as SSM/Mamba-style transitions, Koopman-inspired operators, energy-based constraints, or physics-informed stability terms?',
};

export const researchDirection = [
  {
    title: 'Structured predictive world models',
    body:
      'In JEPA-style models the encoder learns what to represent, but the predictor, the part that governs how latent states evolve, is typically a generic network with no explicit transition structure. I keep wondering whether that matters: does treating the predictor more like a dynamical system change how it behaves over longer rollout horizons, or does the encoder absorb everything anyway?',
  },
  {
    title: 'Operator structure and stable prediction',
    body:
      'One thing I\'d like to try is giving the predictor more structure, SSM-style transitions, Koopman-inspired observables, or energy-based stability terms, and seeing whether that helps with long-horizon stability without re-anchoring. Holding the encoder and loss fixed and varying only the predictor would at least make the comparison clean.',
  },
  {
    title: 'Vision, control, and real systems',
    body:
      'At Bell Labs I had a real failure mode to look at: strong semantic signal, but propagation that drifted once the anchor got too sparse. At Apple I\'d learned to think about reachable states and about the gap between what a formal proof covers and what testing actually tells you. Both experiences made me want to work on world models in settings where failures show up concretely, not just in benchmark numbers.',
  },
];

export const researchFraming =
  'These are directions I find genuinely promising and want to explore during a PhD. Early-stage interests, not settled results.';

export const researchApproach = [
  {
    label: 'Where I\'d start',
    body: 'I\'d start with small, controllable dynamics where the comparison between structured and unstructured predictors is actually clean, before moving toward video or planning.',
  },
  {
    label: 'What I\'d like to understand',
    body: 'I want to know whether operator-like structure in a JEPA predictor, SSM transitions or Koopman observables, actually changes rollout behavior, or whether any gain washes out once the encoder is strong enough.',
  },
  {
    label: 'How I\'d like to grow into it',
    body: 'Mostly I\'m looking for an environment where I can learn to run cleaner experiments and develop sharper intuitions about when structure matters. That\'s a goal in itself.',
  },
];

export const experience = [
  {
    company: 'Nokia Bell Labs',
    location: 'Stuttgart, Germany',
    role: 'Predictive Models for Cloud Gaming and Semantic Communication',
    period: 'Aug 2025 - Jan 2026',
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
    courses: ['Artificial Neural Networks and Reinforcement Learning', 'Machine Learning', 'Natural Language Processing', 'Machine Learning in Finance', 'Cryptography and Security'],
  },
  {
    school: 'CPE Lyon',
    location: 'Lyon, France',
    degree: "Diplôme d'Ingénieur (Engineering degree), Computer Science — Software Engineering & Big Data",
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
    items: ['PyTorch', 'TensorFlow', 'Neural networks', 'Self-supervised learning', 'JEPA / world models', 'Energy-based models'],
  },
  {
    category: 'Vision and multimodal systems',
    items: ['Computer vision', 'Video understanding', 'Grounding DINO', 'RAFT / optical flow', 'Focus-map prediction', 'Multimodal data pipelines'],
  },
  {
    category: 'Dynamics, control, and RL',
    items: ['Reinforcement learning', 'State-space models', 'Mamba', 'Koopman operators', 'Dynamical systems', 'Physics-informed AI'],
  },
  {
    category: 'Mathematical and scientific foundations',
    items: ['Linear algebra', 'Applied statistics', 'Signal processing', 'Optimization', 'Spectral methods', 'Functional analysis'],
  },
  {
    category: 'Software and formal methods',
    items: ['Python', 'NumPy', 'Jupyter', 'Formal verification', 'Model checking', 'Finite-state machines', 'Verilog / SystemVerilog assertions'],
  },
];
