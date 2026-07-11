import type { Project } from './types'

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
  },
]
