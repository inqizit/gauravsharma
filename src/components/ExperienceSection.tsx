import type { Experience } from '../content/types'
import { formatDuration, formatRange } from '../lib/format'
import './ExperienceSection.css'

interface ExperienceSectionProps {
  items: Experience[]
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <ol className="experience">
      {items.map((item) => (
        <li key={item.id} className="experience__item">
          <div className="experience__when">
            <p className="experience__range">
              {formatRange(item.start, item.end)}
            </p>
            <p className="experience__duration">
              {formatDuration(item.start, item.end)}
            </p>
          </div>
          <div className="experience__body">
            <h3 className="experience__role">{item.role}</h3>
            <p className="experience__company">
              {item.companyUrl ? (
                <a href={item.companyUrl} target="_blank" rel="noreferrer">
                  {item.company}
                </a>
              ) : (
                item.company
              )}
              {item.location && (
                <span className="experience__location"> · {item.location}</span>
              )}
            </p>
            <ul className="experience__highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
