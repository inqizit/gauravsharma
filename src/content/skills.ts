import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Golang', 'C', 'C++', 'Python', 'Java', 'SQL'],
  },
  {
    id: 'tools',
    title: 'Tools & Frameworks',
    skills: [
      'Git',
      'Unix/Linux',
      'Docker',
      'Spring',
      'Jenkins',
      'TensorFlow/Keras',
      'Pandas',
      'MongoDB',
      'Temporal',
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    skills: [
      'Data Structures',
      'System Design',
      'Computer Vision',
      'Game Development',
    ],
  },
]
