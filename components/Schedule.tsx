'use client'

import { useLang } from '@/lib/LangContext'
import Icon from './Icon'
import SectionIntro from './SectionIntro'

export default function Schedule() {
  const { lang } = useLang()

  return (
    <section className="schedule section">
      <div className="parallax-fade">
        <SectionIntro kicker="The school day" title={lang === 'en' ? 'A schedule that works for family life.' : 'Un horario que funciona para la vida familiar.'} text={lang === 'en' ? 'Explore our regular day and extended-hours options. Final times and availability will be confirmed by the academy.' : 'Conozca nuestro d\u00eda regular y las opciones de horario extendido. La academia confirmar\u00e1 los horarios finales.'} />
      </div>
      <div className="schedule-grid parallax-stagger">
        <article>
          <span className="tag">Core program</span>
          <h3>Regular school day</h3>
          <p>A balanced day of focused study, active learning, and community connection.</p>
          <div className="time"><Icon name="clock" /><span><small>Opening time</small>To be confirmed</span></div>
          <a href="#inquiry">Ask about the schedule <Icon name="arrow" /></a>
        </article>
        <article className="featured">
          <span className="tag">Additional flexibility</span>
          <h3>Extended-hours program</h3>
          <p>Additional time for families who need a longer day, subject to confirmed availability.</p>
          <div className="time"><Icon name="clock" /><span><small>Hours</small>To be confirmed</span></div>
          <a href="#inquiry">Request program details <Icon name="arrow" /></a>
        </article>
      </div>
    </section>
  )
}
