import { profile, socials } from '../data/portfolio.js'

/**
 * Hero keeps the starter design's signature terminal panel — the only
 * concrete visual reference in the repository — and extends it with a
 * typing animation (static text when reduced motion is preferred).
 */
const bootLines = [
  { prefix: '$', text: 'whoami', accent: true },
  { prefix: '', text: `${profile.name.toLowerCase()} — ${profile.role}`, muted: true },
  { prefix: '$', text: 'cat availability.txt', accent: true },
  { prefix: '✓', text: profile.availability, ok: true },
  { prefix: '$', text: 'npm run portfolio', accent: true },
  { prefix: '✓', text: 'Site ready → scroll to explore', ok: true },
]

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-copy">
        <p className="eyebrow">{profile.location}</p>
        <h1>
          Building for the <em>web</em>,
          <br />
          one detail at a time.
        </h1>
        <p className="intro">{profile.intro}</p>
        <a className="cta" href="#projects">
          View selected work <span aria-hidden="true">&rarr;</span>
        </a>
        <ul className="hero-socials" aria-label="External links">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url}>{s.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <aside className="terminal" aria-label="Terminal preview">
        <div className="terminal-bar">
          <span /><span /><span />
          <p>{profile.shortName.toLowerCase()}@portfolio</p>
        </div>
        <div className="terminal-body">
          {bootLines.map((line, i) => (
            <p key={i} className={line.muted ? 'muted' : undefined}>
              {line.prefix && (
                <b className={line.ok ? 'ok' : line.accent ? 'accent' : undefined}>{line.prefix}</b>
              )}{' '}
              {line.text}
            </p>
          ))}
          <span className="cursor" aria-hidden="true" />
        </div>
      </aside>
    </section>
  )
}
