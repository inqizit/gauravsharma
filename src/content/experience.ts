import type { Experience } from './types'

export const experience: Experience[] = [
  {
    id: 'emergent',
    company: 'Emergent',
    companyUrl: 'https://emergent.sh',
    role: 'Member of Technical Staff',
    location: 'Bangalore',
    start: '2026-03',
    end: null,
    highlights: [
      'Driving growth and conversion across the platform, managing credits, coupons and payments.',
      'Expanded the agent ecosystem by introducing a content-writing agent alongside the coding agent, and built interactive tool-calling capabilities to support dynamic user inputs within agent workflows.',
      'Enhanced agent learning from past actions by incorporating feedback loops and contextual memory, improving accuracy and efficiency of task execution.',
    ],
  },
  {
    id: 'devrev',
    company: 'DevRev',
    companyUrl: 'https://devrev.ai',
    role: 'Member of Technical Staff',
    location: 'Bangalore',
    start: '2021-12',
    end: '2026-03',
    highlights: [
      'Created and launched the support quadrant in DevRev, establishing it as a core offering of the product.',
      'Built an agent orchestration platform for creating and managing AI agents, enabling customizable skill composition, durable execution (via Temporal), and seamless access to knowledge bases and system-of-record data through unified search.',
      'Developed an AI-powered deflection agent that autonomously handled support requests, reducing manual ticket volume by ~70%.',
      'Designed and implemented a support copilot for ticket resolution, delivering contextual insights such as next-best actions, related tickets, knowledge base suggestions, and ongoing incident signals.',
      'Implemented multi-channel chat support within the application, enabling customer conversations across Email, Slack, WhatsApp, real-time chat, and support portals.',
      'Led a team of engineers in developing a comprehensive ticket management solution, integrating automated routing, SLA tracking, and CSAT measurement.',
    ],
  },
  {
    id: 'razorpay',
    company: 'Razorpay',
    companyUrl: 'https://razorpay.com',
    role: 'Senior Software Engineer',
    location: 'Bangalore',
    start: '2020-07',
    end: '2021-11',
    highlights: [
      'Integrated RazorpayX with accounting tools, collaborating closely with product and design teams end to end.',
      'Implemented OAuth for connecting to web-based accounting solutions and developed a new authentication variant for Razorpay to support native app integrations.',
      'Led onboarding efforts for new engineers, offering guidance on the tech stack and establishing guidelines to improve code quality.',
    ],
  },
  {
    id: 'morgan-stanley',
    company: 'Morgan Stanley',
    companyUrl: 'https://www.morganstanley.com',
    role: 'Software Engineer',
    location: 'Bangalore',
    start: '2018-08',
    end: '2020-07',
    highlights: [
      'Designed and implemented a scalable microservice for break reporting, improving large-scale data handling.',
      'Increased break quality by 90% through automated workflows and validation systems.',
      'Promoted DevOps adoption by building a REST API using Spring Boot and Hibernate to track organizational metrics.',
    ],
  },
  {
    id: 'samsung',
    company: 'Samsung R&D Institute',
    role: 'Technology Intern',
    location: 'Bangalore',
    start: '2017-05',
    end: '2017-07',
    highlights: [
      'Achieved an 80% reduction in debugging time by developing a Java application for SD card debugging and memory analysis, replacing a previously manual approach.',
    ],
  },
]
