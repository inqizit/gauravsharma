import './Footer.css'

interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <p className="footer__meta">Designed &amp; built with React</p>
      </div>
    </footer>
  )
}
