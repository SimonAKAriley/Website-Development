import { about } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import useReveal from '../hooks/useReveal.js'

export default function About() {
  const [ref, revealed] = useReveal()
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionHeading num="01" title="About" />
      <div ref={ref} className={`split reveal ${revealed ? 'is-revealed' : ''}`}>
        <p className="lead">{about.lead}</p>
        <div className="about-body">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
