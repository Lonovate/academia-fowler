'use client'

import { useLang } from '@/lib/LangContext'
import SectionIntro from './SectionIntro'

export default function History() {
  const { lang } = useLang()

  return (
    <section className="history section">
      <div className="history-heading parallax-fade">
        <SectionIntro kicker="Our story" title={lang === 'en' ? 'Roots that shape where we\u2019re going.' : 'Ra\u00edces que dan forma a nuestro futuro.'} />
        <p>Fowler Academy&apos;s history is part of its identity. Verified milestones, dates, and archive imagery can be added here as the official school record is provided.</p>
      </div>
      <div className="timeline parallax-stagger">
        {['Founding of the academy', 'A growing learning community', 'Campus and program development', 'Fowler Academy today'].map((item, i) => (
          <div key={item}>
            <span>{i === 3 ? 'Today' : 'Year'}</span>
            <i />
            <h3>{item}</h3>
            <p>{i === 3 ? 'A community committed to purposeful learning and individual growth.' : 'Official historical milestone to be added.'}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
