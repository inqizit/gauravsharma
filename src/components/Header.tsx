import type { SectionConfig } from '../content/types'
import './Header.css'

interface HeaderProps {
  name: string
  sections: SectionConfig[]
}

export function Header({ name, sections }: HeaderProps) {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" aria-label={name}>
          <span className="header__monogram">{initials}</span>
          <span className="header__name">{name}</span>
        </a>
        <nav className="header__nav" aria-label="Sections">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="header__link">
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
