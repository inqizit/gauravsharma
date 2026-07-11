import { useEffect, type ReactNode } from 'react'
import { siteContent } from './content'
import type { SectionId, SiteContent } from './content/types'
import { useHashRoute } from './lib/router'
import { formatRange } from './lib/format'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { EducationSection } from './components/EducationSection'
import { ContactSection } from './components/ContactSection'
import { DetailPage } from './components/DetailPage'
import { Footer } from './components/Footer'

/**
 * Composition root — the only place where the data layer meets the UI layer.
 * Each section id maps to a renderer; which sections appear, in what order
 * and with what heading is decided entirely by `content.sections`.
 * Entries with a `details` object additionally get a dedicated page at
 * #/projects/<id> or #/experience/<id>.
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

function HomePage({ content }: { content: SiteContent }) {
  const visibleSections = content.sections.filter((section) => section.visible)
  return (
    <>
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
    </>
  )
}

export default function App() {
  const content = siteContent
  const route = useHashRoute()

  const project =
    route.page === 'project'
      ? content.projects.find((p) => p.id === route.id)
      : undefined
  const role =
    route.page === 'experience'
      ? content.experience.find((e) => e.id === route.id)
      : undefined

  useEffect(() => {
    const pageTitle = project
      ? project.name
      : role
        ? `${role.role} · ${role.company}`
        : undefined
    document.title = pageTitle
      ? `${pageTitle} — ${content.meta.title}`
      : content.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description)
  }, [content.meta, project, role])

  useEffect(() => {
    if (route.page === 'home') {
      if (route.anchor) {
        document.getElementById(route.anchor)?.scrollIntoView()
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [route])

  let body: ReactNode
  if (project?.details) {
    body = (
      <DetailPage
        kicker="Project"
        title={project.name}
        subtitle={project.tagline}
        meta={project.technologies}
        backHref="#projects"
        backLabel="Back to projects"
        details={project.details}
      />
    )
  } else if (role?.details) {
    body = (
      <DetailPage
        kicker={`${formatRange(role.start, role.end)}${role.location ? ` · ${role.location}` : ''}`}
        title={role.company}
        subtitle={role.role}
        backHref="#experience"
        backLabel="Back to experience"
        details={role.details}
      />
    )
  } else {
    // Unknown or detail-less ids fall back to the home page.
    body = <HomePage content={content} />
  }

  return (
    <>
      <Header
        name={content.profile.name}
        sections={content.sections.filter((section) => section.visible)}
      />
      <main>{body}</main>
      <Footer name={content.profile.name} />
    </>
  )
}
