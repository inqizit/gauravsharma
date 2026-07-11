import type { SectionConfig } from './types'

/**
 * Order and visibility of page sections — reorder or hide sections here,
 * and the nav updates automatically.
 */
export const sections: SectionConfig[] = [
  { id: 'experience', label: 'Experience', visible: true },
  { id: 'projects', label: 'Projects', visible: true },
  { id: 'skills', label: 'Skills', visible: true },
  { id: 'education', label: 'Education', visible: true },
  { id: 'contact', label: 'Contact', visible: true },
]
