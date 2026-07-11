import type { Education } from '../content/types'
import { formatYearRange } from '../lib/format'
import './EducationSection.css'

interface EducationSectionProps {
  items: Education[]
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <ol className="education">
      {items.map((item) => (
        <li key={item.id} className="education__item">
          <p className="education__years">
            {formatYearRange(item.start, item.end)}
          </p>
          <div>
            <h3 className="education__institution">{item.institution}</h3>
            <p className="education__qualification">
              {item.qualification}
              {item.detail && ` · ${item.detail}`}
            </p>
          </div>
          {item.score && <p className="education__score">{item.score}</p>}
        </li>
      ))}
    </ol>
  )
}
