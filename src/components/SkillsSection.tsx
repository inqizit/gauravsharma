import type { SkillGroup } from '../content/types'
import './SkillsSection.css'

interface SkillsSectionProps {
  groups: SkillGroup[]
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <div className="skills">
      {groups.map((group) => (
        <div key={group.id} className="skills__group">
          <h3 className="skills__group-title">{group.title}</h3>
          <ul className="skills__list">
            {group.skills.map((skill) => (
              <li key={skill} className="skills__chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
