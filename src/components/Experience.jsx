import { experience } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Experience() {
  const [ref, revealed] = useReveal()
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <SectionHeading num="03" title="Experience" />
      <ol ref={ref} className={`exp-list reveal ${revealed ? 'is-revealed' : ''}`}>
        {experience.map((job, i) => (
          <li key={i} className="exp-row">
            <p className="exp-period">{job.period}</p>
            <div className="exp-main">
              <h3>{job.role}</h3>
              <p className="exp-org">{job.org}</p>
            </div>
            <p className="exp-note">{job.note}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
