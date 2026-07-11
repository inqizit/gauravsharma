import type { SocialPlatform } from '../content/types'

const paths: Record<SocialPlatform, React.ReactNode> = {
  linkedin: (
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z"
    />
  ),
  github: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  ),
  twitter: (
    <path
      fill="currentColor"
      d="M18.24 2.25h3.31l-7.23 8.26L22.83 21.75h-6.66l-5.22-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.72 6.24 5.44-6.24Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"
    />
  ),
  email: (
    <>
      <rect
        x="3" y="5" width="18" height="14" rx="2"
        fill="none" stroke="currentColor" strokeWidth="1.8"
      />
      <path
        d="m3.5 7 8.5 6 8.5-6"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </>
  ),
  phone: (
    <path
      d="M5.5 3.5h3l1.5 4.25L7.75 9a12.5 12.5 0 0 0 7.25 7.25l1.25-2.25 4.25 1.5v3a1.5 1.5 0 0 1-1.63 1.5C10.5 19.75 4.25 13.5 4 5.13A1.5 1.5 0 0 1 5.5 3.5Z"
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"
    />
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3a13.5 13.5 0 0 1 0 18M12 3a13.5 13.5 0 0 0 0 18"
        fill="none" stroke="currentColor" strokeWidth="1.8"
      />
    </>
  ),
}

interface IconProps {
  platform: SocialPlatform
  size?: number
}

export function Icon({ platform, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[platform]}
    </svg>
  )
}
