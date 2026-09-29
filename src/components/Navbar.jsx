import { useEffect, useState } from 'react'
import { navLinks, profile, socials } from '../data/portfolio.js'
import useActiveSection from '../hooks/useActiveSection.js'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav aria-label="Primary navigation" className="site-nav">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.name} — home`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">{profile.shortName.replace(/[[\]]/g, '∗')}</span>
          {profile.name}
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : undefined}
                aria-current={active === link.id ? 'true' : undefined}
              >
                <span className="nav-num" aria-hidden="true">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                <span className="nav-num" aria-hidden="true">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="mobile-socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url}>{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
