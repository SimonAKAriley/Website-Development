import { useState } from 'react'
import { projects } from '../data/portfolio.js'
import Modal from './Modal.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import SectionHeading from './SectionHeading.jsx'
import useReveal from '../hooks/useReveal.js'

function ProjectCard({ project, index, onOpen }) {
  const [ref, revealed] = useReveal()
  return (
    <article
      ref={ref}
      className={`project-card reveal ${revealed ? 'is-revealed' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <button type="button" className="project-open" onClick={() => onOpen(project)}>
        <span className="sr-only">Open details for {project.title}</span>
        <ProjectVisual project={project} />
        <span className="project-meta">
          <span className="project-year">{project.year}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <span className="project-more">
            Case study <em aria-hidden="true">→</em>
          </span>
        </span>
      </button>
    </article>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <SectionHeading num="04" title="Selected Work" />
      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
        ))}
      </div>

      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <div className="detail-visual">
            <ProjectVisual project={selected} />
          </div>
          <div className="detail-body">
            <p className="eyebrow">
              {selected.year} · {selected.type}
            </p>
            <h3>{selected.title}</h3>
            <p>{selected.details}</p>
            <ul className="detail-tech">
              {selected.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {selected.links.length > 0 && (
              <ul className="detail-links">
                {selected.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Modal>
      )}
    </section>
  )
}
