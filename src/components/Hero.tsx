import type { Profile, SocialLink } from '../content/types'
import { Icon } from './Icon'
import './Hero.css'

interface HeroProps {
  profile: Profile
  social: SocialLink[]
}

export function Hero({ profile, social }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero__kicker">{profile.location}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__headline">{profile.headline}</p>
        <div className="hero__summary">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="hero__actions">
          <a className="hero__cta" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
          <div className="hero__social" aria-label="Profiles">
            {social.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="hero__social-link"
                title={link.label}
                aria-label={link.label}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon platform={link.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
