/**
 * Content schema — the contract between the data layer and the UI layer.
 *
 * UI components import ONLY these types (never the data files).
 * Data files implement ONLY these types (never import UI).
 * Swap either side freely without touching the other.
 */

export type SectionId =
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'contact'

/** Drives section order, visibility, headings and the nav — all from data. */
export interface SectionConfig {
  id: SectionId
  label: string
  visible: boolean
}

export interface SiteMeta {
  /** Browser tab / document title. */
  title: string
  description: string
}

export interface Profile {
  name: string
  /** One-liner under the name, e.g. current role. */
  headline: string
  /** Intro paragraphs for the hero. */
  summary: string[]
  location: string
  email: string
  phone?: string
  /** Short blurb shown in the contact section. */
  contactNote?: string
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'email'
  | 'phone'
  | 'website'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  url: string
}

export interface Experience {
  id: string
  company: string
  companyUrl?: string
  role: string
  location?: string
  /** 'YYYY-MM' */
  start: string
  /** 'YYYY-MM', or null while ongoing. */
  end: string | null
  highlights: string[]
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string[]
  technologies: string[]
  links?: { label: string; url: string }[]
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export interface Education {
  id: string
  institution: string
  qualification: string
  /** Field of study, board, etc. */
  detail?: string
  /** Years, e.g. '2014' / '2018'. */
  start?: string
  end: string
  score?: string
}

/** Everything the site renders, in one typed object. */
export interface SiteContent {
  meta: SiteMeta
  profile: Profile
  social: SocialLink[]
  experience: Experience[]
  projects: Project[]
  skillGroups: SkillGroup[]
  education: Education[]
  sections: SectionConfig[]
}
