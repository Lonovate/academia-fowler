'use client'

import { useLang } from '@/lib/LangContext'
import { photos } from '@/lib/constants'
import Icon from './Icon'
import SectionIntro from './SectionIntro'

export default function Academics() {
  const { lang } = useLang()

  return (
    <section className="academics section" id="academics">
      <div className="academic-image parallax-scale">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.class} alt="Students learning together with a teacher" />
        <div className="image-label">Learning happens<br /><b>together.</b></div>
      </div>
      <div className="academic-copy parallax-fade-right">
        <SectionIntro kicker="Academic experience" title={lang === 'en' ? 'A broad education. A deeply personal journey.' : 'Una educaci\u00f3n amplia. Un viaje profundamente personal.'} text={lang === 'en' ? 'Students build strong foundations while exploring ideas across disciplines. Our approach connects clear instruction with active discovery.' : 'Los estudiantes construyen bases s\u00f3lidas mientras exploran ideas en todas las disciplinas.'} />
        <div className="subject-list">
          {['Language & communication', 'Mathematics & science', 'Arts & creative learning', 'Technology & digital literacy', 'Physical & social development'].map((item, i) => (
            <div key={item}><span>0{i + 1}</span><p>{item}</p><Icon name="arrow" /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
