import type { SiteContent } from './types'
import { meta, profile, social } from './profile'
import { experience } from './experience'
import { projects } from './projects'
import { skillGroups } from './skills'
import { education } from './education'
import { sections } from './sections'

/**
 * The single entry point of the data layer.
 * The app consumes only this object; where the data comes from
 * (these files, a CMS, JSON, an API) is an implementation detail.
 */
export const siteContent: SiteContent = {
  meta,
  profile,
  social,
  experience,
  projects,
  skillGroups,
  education,
  sections,
}

export * from './types'
