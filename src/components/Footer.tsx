const currentYear = new Date().getFullYear()

const hours = [
  { days: 'Lunes a jueves', time: '11:30 – 22:00' },
  { days: 'Viernes y sábado', time: '11:30 – 23:00' },
  { days: 'Domingo', time: '12:00 – 21:00' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M13.2 20v-6.6h2.2l.4-2.6h-2.6V9.2c0-.8.3-1.3 1.4-1.3h1.3V5.6a18 18 0 0 0-1.9-.1c-1.9 0-3.2 1.2-3.2 3.3v2h-2.2v2.6h2.2V20" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M8 8l8 8M16 8l-8 8" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <p className="footer-tagline">Cocina japonesa en Managua.</p>

          <div>
            <h3 className="footer-title">Visítanos</h3>
            <address className="footer-address">
              Carretera a Masaya, Km 4.5
              <br />
              Managua, Nicaragua
            </address>
          </div>

          <div>
            <h3 className="footer-title">Horario</h3>
            <ul className="footer-list">
              {hours.map((row) => (
                <li key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Síguenos</h3>
            <ul className="footer-list">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    className="footer-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-social-icon">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Hinoki</span>
          <span>Nicaragua · Español</span>
          <nav className="footer-legal">
            <a href="#">Aviso legal</a>
            <a href="#">Privacidad</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
