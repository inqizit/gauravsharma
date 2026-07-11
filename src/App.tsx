import { useEffect, type ReactNode } from 'react'
import { siteContent } from './content'
import type { SectionId, SiteContent } from './content/types'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { EducationSection } from './components/EducationSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

/**
 * Composition root — the only place where the data layer meets the UI layer.
 * Each section id maps to a renderer; which sections appear, in what order
 * and with what heading is decided entirely by `content.sections`.
 */
const sectionRenderers: Record<SectionId, (content: SiteContent) => ReactNode> = {
  experience: (content) => <ExperienceSection items={content.experience} />,
  projects: (content) => <ProjectsSection projects={content.projects} />,
  skills: (content) => <SkillsSection groups={content.skillGroups} />,
  education: (content) => <EducationSection items={content.education} />,
  contact: (content) => (
    <ContactSection profile={content.profile} social={content.social} />
  ),
}

export default function App() {
  const content = siteContent

  useEffect(() => {
    document.title = content.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description)
  }, [content.meta])

  const visibleSections = content.sections.filter((section) => section.visible)

  return (
    <>
      <Header name={content.profile.name} sections={visibleSections} />
      <main>
        <Hero profile={content.profile} social={content.social} />
        {visibleSections.map((section, i) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.label}
            index={i + 1}
          >
            {sectionRenderers[section.id](content)}
          </Section>
        ))}
      </main>
      <Footer name={content.profile.name} />
    </>
  )
}
