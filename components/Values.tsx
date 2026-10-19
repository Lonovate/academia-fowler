'use client'

import { useLang } from '@/lib/LangContext'
import SectionIntro from './SectionIntro'

export default function Values() {
  const { lang } = useLang()

  return (
    <section className="values section" id="values">
      <div className="parallax-fade">
        <SectionIntro kicker="Our foundation" title={lang === 'en' ? 'Character belongs in every classroom.' : 'El car\u00e1cter pertenece a cada aula.'} text={lang === 'en' ? 'Our mission, vision, and values shape how students learn, connect, and contribute.' : 'Nuestra misi\u00f3n, visi\u00f3n y valores definen c\u00f3mo los estudiantes aprenden y contribuyen.'} />
      </div>
      <div className="value-grid parallax-stagger">
        {([['01', 'Respect', 'We listen carefully, honor differences, and treat every person with dignity.'], ['02', 'Responsibility', 'We take ownership of our choices, our learning, and our shared community.'], ['03', 'Compassion', 'We notice others, lead with empathy, and make room for every voice.'], ['04', 'Curiosity', 'We ask better questions and approach new ideas with courage and imagination.']] as const).map(([n, title, text]) => (
          <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  )
}
