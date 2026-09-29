import { projectTypes } from '../data/portfolio.js'

/**
 * Editorial project visual. The repository contains no project screenshots,
 * so each card renders a deterministic typographic composition built from
 * the project's own data (initials + palette) instead of fake imagery.
 * Replace <ProjectVisual/> with an <img src=.../> once real assets exist.
 */
export default function ProjectVisual({ project }) {
  const [bg, accent] = project.palette
  const initials = project.title
    .replace(/[[\]]/g, '')
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className="project-visual"
      style={{ '--pv-bg': bg, '--pv-accent': accent }}
      aria-hidden="true"
    >
      <span className="pv-type">{projectTypes[project.type]}</span>
      <svg className="pv-mesh" viewBox="0 0 400 300" preserveAspectRatio="none">
        <path d="M0 210 Q 100 150 200 200 T 400 180" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.55" />
        <path d="M0 240 Q 120 190 220 235 T 400 215" fill="none" stroke={accent} strokeWidth="1" opacity="0.35" />
      </svg>
      <span className="pv-initials">{initials}</span>
      <span className="pv-year">{project.year}</span>
    </div>
  )
}
