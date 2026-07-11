import type { Profile, SiteMeta, SocialLink } from './types'

export const meta: SiteMeta = {
  title: 'Gaurav Sharma',
  description:
    'Gaurav Sharma — engineer building AI agent platforms. Currently Member of Technical Staff at Emergent.',
}

export const profile: Profile = {
  name: 'Gaurav Sharma',
  headline: 'Member of Technical Staff at Emergent',
  summary: [
    'I build AI agent platforms — orchestration, tool calling, memory and the product surfaces around them. Over the last eight years I have shipped systems across AI, fintech and enterprise SaaS at Emergent, DevRev, Razorpay and Morgan Stanley.',
    'I like owning problems end to end: from durable execution engines and multi-channel support platforms to growth, payments and the details that make a product feel finished.',
  ],
  location: 'Bangalore, India',
  email: 'gaurasha.gs@gmail.com',
  phone: '+91 7054791405',
  contactNote:
    'Whether it is AI agents, platforms, or an interesting problem you are chewing on — my inbox is open.',
}

export const social: SocialLink[] = [
  {
    platform: 'linkedin',
    label: 'linkedin.com/in/gaurasha',
    url: 'https://linkedin.com/in/gaurasha/',
  },
  {
    platform: 'email',
    label: 'gaurasha.gs@gmail.com',
    url: 'mailto:gaurasha.gs@gmail.com',
  },
  {
    platform: 'phone',
    label: '+91 7054791405',
    url: 'tel:+917054791405',
  },
]
