import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  id: string
  title: string
  index: number
  children: ReactNode
}

export function Section({ id, title, index, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <h2 className="section__title">
          <span className="section__index">
            {String(index).padStart(2, '0')}
          </span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
