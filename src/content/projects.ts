import type { Project } from './types'

// NOTE: download URLs below are placeholders — point them at your real
// release assets (e.g. GitHub Releases) when they exist. A project only
// gets a dedicated page (and a "View project" link) when `details` is set.

export const projects: Project[] = [
  {
    id: 'game-engine',
    name: 'Game Engine',
    tagline: '2D game engine built from scratch',
    description: [
      'Developed a 2D game engine from scratch using Java applets, and built an alien-shooter game on top of it.',
      'Implemented core modules such as the physics engine, rendering system, collision detection, and NPC state machines.',
    ],
    technologies: ['Java'],
    details: {
      overview: [
        'This project started with a simple question: how much of a game engine can you build with nothing but the JDK? The answer became a fully working 2D engine — no frameworks, no libraries — and an alien-shooter game built on top of it to prove the engine out.',
        'Everything a game needs is implemented from first principles: a fixed-timestep game loop, a physics engine with velocity and acceleration integration, sprite rendering with double buffering, axis-aligned collision detection, and state machines that drive NPC behaviour.',
        'The codebase is deliberately modular — the engine knows nothing about the alien-shooter, so a new game can be built on it by swapping the game layer.',
      ],
      features: [
        'Fixed-timestep game loop with interpolated rendering',
        'Physics engine — velocity, acceleration and simple constraints',
        'Double-buffered sprite rendering system',
        'Axis-aligned collision detection with broad-phase culling',
        'NPC behaviour via finite state machines',
        'Keyboard input system with rebindable actions',
      ],
      downloads: [
        {
          platform: 'macos',
          label: 'macOS',
          url: 'https://github.com/gaurasha/game-engine/releases/latest/download/alien-shooter-macos.zip',
          format: '.zip',
          size: '12 MB',
        },
        {
          platform: 'windows',
          label: 'Windows',
          url: 'https://github.com/gaurasha/game-engine/releases/latest/download/alien-shooter-windows.zip',
          format: '.zip',
          size: '12 MB',
        },
        {
          platform: 'linux',
          label: 'Linux',
          url: 'https://github.com/gaurasha/game-engine/releases/latest/download/alien-shooter-linux.zip',
          format: '.zip',
          size: '12 MB',
        },
      ],
      tutorial: {
        title: 'Getting started',
        intro: [
          'The game ships as a runnable JAR inside each platform bundle, so the steps are the same everywhere — install Java, download, run.',
        ],
        steps: [
          {
            title: 'Install Java',
            body: ['The engine needs a Java runtime (JDK 8 or newer). Check what you have:'],
            code: { language: 'shell', code: 'java -version' },
            note: 'No Java? Grab a build from adoptium.net — Temurin 17 LTS works great.',
          },
          {
            title: 'Download and unpack',
            body: [
              'Pick your platform build from the Download section above and unzip it anywhere. Inside you will find alien-shooter.jar and an assets folder — keep them together.',
            ],
          },
          {
            title: 'Run the game',
            code: { language: 'shell', code: 'java -jar alien-shooter.jar' },
          },
          {
            title: 'Controls',
            body: [
              'Arrow keys to move, Space to shoot, P to pause, Esc to quit. Survive the waves — the spawner state machine gets meaner every round.',
            ],
          },
          {
            title: 'Build from source (optional)',
            body: ['Want to poke at the engine internals? Clone and compile:'],
            code: {
              language: 'shell',
              code: 'git clone https://github.com/gaurasha/game-engine.git\ncd game-engine\njavac -d out $(find src -name "*.java")\njava -cp out game.Main',
            },
          },
        ],
      },
      links: [
        { label: 'Source on GitHub', url: 'https://github.com/gaurasha/game-engine' },
      ],
    },
  },
  {
    id: 'flappy-bird-ai',
    name: 'Flappy Bird AI',
    tagline: 'A bird that teaches itself to fly',
    description: [
      'Flappy Bird learns to play the game and master it without supervision, using a neural network as the brain behind every decision.',
      'Used the NEAT algorithm to continuously evolve the neural architecture across generations.',
    ],
    technologies: ['Python', 'Neural Networks', 'NEAT'],
    details: {
      overview: [
        'No training data, no human demonstrations — just a population of birds with tiny random neural networks, a fitness function, and evolution. Within a few dozen generations, the flock goes from face-planting into the first pipe to playing indefinitely.',
        'Each bird’s brain is a neural network that sees three inputs — its height, and the distance to the next pipe gap — and produces one output: flap or don’t. The NEAT algorithm (NeuroEvolution of Augmenting Topologies) evolves not just the weights but the network structure itself, so the architecture grows exactly as complex as the problem demands.',
      ],
      features: [
        'Unsupervised learning — no training data required',
        'NEAT neuro-evolution of both weights and topology',
        'Live visualisation of every generation playing',
        'Fitness tracking and per-generation statistics',
        'Tunable evolution via a single config file',
      ],
      downloads: [
        {
          platform: 'macos',
          label: 'macOS',
          url: 'https://github.com/gaurasha/flappy-bird-ai/archive/refs/heads/main.zip',
          format: '.zip',
          size: '2 MB',
        },
        {
          platform: 'windows',
          label: 'Windows',
          url: 'https://github.com/gaurasha/flappy-bird-ai/archive/refs/heads/main.zip',
          format: '.zip',
          size: '2 MB',
        },
        {
          platform: 'linux',
          label: 'Linux',
          url: 'https://github.com/gaurasha/flappy-bird-ai/archive/refs/heads/main.zip',
          format: '.zip',
          size: '2 MB',
        },
      ],
      tutorial: {
        title: 'Run the evolution yourself',
        intro: [
          'The project is pure Python, so the same steps work on macOS, Windows and Linux.',
        ],
        steps: [
          {
            title: 'Install Python 3.10+',
            code: { language: 'shell', code: 'python3 --version' },
          },
          {
            title: 'Get the code and dependencies',
            body: ['Clone the repository (or unzip the download above) and install the two dependencies — pygame for the game, neat-python for the evolution:'],
            code: {
              language: 'shell',
              code: 'git clone https://github.com/gaurasha/flappy-bird-ai.git\ncd flappy-bird-ai\npip install -r requirements.txt',
            },
          },
          {
            title: 'Start evolving',
            code: { language: 'shell', code: 'python flappy_ai.py' },
            note: 'A window opens showing the whole population playing at once. Dead birds drop out; survivors breed the next generation.',
          },
          {
            title: 'Read the numbers',
            body: [
              'The console prints per-generation stats: best fitness, average fitness, and species count. Fitness is simply how far a bird flew — watch it climb generation over generation.',
            ],
          },
          {
            title: 'Tweak the evolution',
            body: [
              'All NEAT parameters live in config-feedforward.txt — population size, mutation rates, activation functions. Try raising the population to 200 or doubling the weight-mutation rate and watch how the learning curve changes.',
            ],
          },
        ],
      },
      links: [
        { label: 'Source on GitHub', url: 'https://github.com/gaurasha/flappy-bird-ai' },
        { label: 'NEAT paper (Stanley & Miikkulainen)', url: 'https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf' },
      ],
    },
  },
]
