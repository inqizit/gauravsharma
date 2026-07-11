import type { Profile, SocialLink } from '../content/types'
import { Icon } from './Icon'
import './ContactSection.css'

interface ContactSectionProps {
  profile: Profile
  social: SocialLink[]
}

export function ContactSection({ profile, social }: ContactSectionProps) {
  return (
    <div className="contact">
      {profile.contactNote && (
        <p className="contact__note">{profile.contactNote}</p>
      )}
      <a className="contact__cta" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ul className="contact__channels">
        {social.map((link) => (
          <li key={link.platform}>
            <a
              href={link.url}
              className="contact__channel"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <Icon platform={link.platform} size={16} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
