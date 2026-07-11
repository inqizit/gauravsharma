import type { Project } from '../content/types'
import { projectPath } from '../lib/router'
import './ProjectsSection.css'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="projects">
      {projects.map((project) => (
        <article key={project.id} className="projects__card">
          <p className="projects__tagline">{project.tagline}</p>
          <h3 className="projects__name">{project.name}</h3>
          <div className="projects__description">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {project.details && (
            <p className="projects__more">
              <a href={projectPath(project.id)}>View project →</a>
            </p>
          )}
          <ul className="projects__tech" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.links && project.links.length > 0 && (
            <p className="projects__links">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </p>
          )}
        </article>
      ))}
    </div>
  )
}
