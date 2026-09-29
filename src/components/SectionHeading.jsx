import useReveal from '../hooks/useReveal.js'

export default function SectionHeading({ num, title, id }) {
  const [ref, revealed] = useReveal()
  return (
    <div ref={ref} className={`section-heading reveal ${revealed ? 'is-revealed' : ''}`} id={id}>
      <p className="eyebrow">{num}</p>
      <h2>{title}</h2>
    </div>
  )
}
