import type { DetailContent, DownloadOption } from '../content/types'
import './DetailPage.css'

interface DetailPageProps {
  /** Small mono line above the title, e.g. 'Project' or a date range. */
  kicker: string
  title: string
  subtitle?: string
  /** Chips under the header, e.g. technologies. */
  meta?: string[]
  backHref: string
  backLabel: string
  details: DetailContent
}

function DownloadCard({ option }: { option: DownloadOption }) {
  return (
    <a className="download-card" href={option.url} target="_blank" rel="noreferrer">
      <span className="download-card__icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M12 3v12m0 0 5-5m-5 5-5-5M4 19h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="download-card__label">{option.label}</span>
      {(option.format || option.size) && (
        <span className="download-card__meta">
          {[option.format, option.size].filter(Boolean).join(' · ')}
        </span>
      )}
    </a>
  )
}

export function DetailPage({
  kicker,
  title,
  subtitle,
  meta,
  backHref,
  backLabel,
  details,
}: DetailPageProps) {
  return (
    <article className="detail">
      <div className="container">
        <a className="detail__back" href={backHref}>
          ← {backLabel}
        </a>

        <header className="detail__header">
          <p className="detail__kicker">{kicker}</p>
          <h1 className="detail__title">{title}</h1>
          {subtitle && <p className="detail__subtitle">{subtitle}</p>}
          {meta && meta.length > 0 && (
            <ul className="detail__meta">
              {meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </header>

        <div className="detail__overview">
          {details.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {details.features && details.features.length > 0 && (
          <section className="detail__block">
            <h2 className="detail__heading">Highlights</h2>
            <ul className="detail__features">
              {details.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {details.downloads && details.downloads.length > 0 && (
          <section className="detail__block">
            <h2 className="detail__heading">Download</h2>
            <div className="detail__downloads">
              {details.downloads.map((option) => (
                <DownloadCard key={option.platform + option.url} option={option} />
              ))}
            </div>
          </section>
        )}

        {details.tutorial && (
          <section className="detail__block">
            <h2 className="detail__heading">{details.tutorial.title ?? 'Tutorial'}</h2>
            {details.tutorial.intro?.map((paragraph) => (
              <p className="detail__tutorial-intro" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <ol className="tutorial">
              {details.tutorial.steps.map((step, i) => (
                <li key={step.title} className="tutorial__step">
                  <span className="tutorial__badge" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="tutorial__content">
                    <h3 className="tutorial__step-title">{step.title}</h3>
                    {step.body?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {step.code && (
                      <pre className="tutorial__code">
                        {step.code.language && (
                          <span className="tutorial__code-lang">{step.code.language}</span>
                        )}
                        <code>{step.code.code}</code>
                      </pre>
                    )}
                    {step.note && <p className="tutorial__note">{step.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {details.links && details.links.length > 0 && (
          <section className="detail__block">
            <h2 className="detail__heading">Links</h2>
            <p className="detail__links">
              {details.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </p>
          </section>
        )}
      </div>
    </article>
  )
}
