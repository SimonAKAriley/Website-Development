import { skills } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Skills() {
  const [ref, revealed] = useReveal()
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <SectionHeading num="02" title="Skills" />
      <div ref={ref} className={`skill-grid reveal ${revealed ? 'is-revealed' : ''}`}>
        {skills.map((group) => (
          <div className="skill-group" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
