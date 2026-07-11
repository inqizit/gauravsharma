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
  /** When present, the entry gets a dedicated page at #/experience/<id>. */
  details?: DetailContent
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string[]
  technologies: string[]
  links?: { label: string; url: string }[]
  /** When present, the project gets a dedicated page at #/projects/<id>. */
  details?: DetailContent
}

/* ---- Rich detail pages ------------------------------------------------- */

export type Platform = 'macos' | 'windows' | 'linux' | 'android' | 'ios' | 'web'

/** One downloadable build of a project. */
export interface DownloadOption {
  platform: Platform
  label: string
  url: string
  /** e.g. '.zip', '.dmg', '.AppImage' */
  format?: string
  /** e.g. '12 MB' */
  size?: string
}

export interface CodeSnippet {
  /** Informational only (shown as a badge); no highlighting dependency. */
  language?: string
  code: string
}

export interface TutorialStep {
  title: string
  body?: string[]
  code?: CodeSnippet
  /** Callout rendered below the step, for tips and gotchas. */
  note?: string
}

export interface Tutorial {
  /** Heading override; defaults to 'Tutorial'. */
  title?: string
  intro?: string[]
  steps: TutorialStep[]
}

export interface DetailLink {
  label: string
  url: string
}

/**
 * Everything a dedicated detail page can show. All blocks except
 * `overview` are optional — the page renders only what the data provides.
 */
export interface DetailContent {
  overview: string[]
  features?: string[]
  downloads?: DownloadOption[]
  tutorial?: Tutorial
  links?: DetailLink[]
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
