import Icon from './Icon'

export default function TrustStrip() {
  return (
    <section className="trust-strip parallax-stagger" aria-label="Fowler Academy commitments">
      <div><Icon name="heart" /><span><b>Every student known</b>Thoughtful, individual support</span></div>
      <div><Icon name="book" /><span><b>Purposeful learning</b>Academic and character growth</span></div>
      <div><Icon name="people" /><span><b>Connected community</b>Families, students, educators</span></div>
    </section>
  )
}
