import { contact, profile, socials } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Contact() {
  const [ref, revealed] = useReveal()
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <SectionHeading num="05" title="Contact" />
      <div ref={ref} className={`contact-block reveal ${revealed ? 'is-revealed' : ''}`}>
        <h3 className="contact-heading">{contact.heading}</h3>
        <p className="intro">{contact.text}</p>
        <a className="cta" href={`mailto:${profile.email}`}>
          {profile.email} <span aria-hidden="true">&rarr;</span>
        </a>
        <ul className="contact-socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url}>{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
