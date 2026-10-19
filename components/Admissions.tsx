'use client'

import { useLang } from '@/lib/LangContext'
import SectionIntro from './SectionIntro'
import ButtonLink from './ButtonLink'

export default function Admissions() {
  const { lang } = useLang()

  return (
    <section className="admissions section" id="admissions">
      <div className="parallax-fade">
        <SectionIntro light kicker="Admissions journey" title={lang === 'en' ? 'A clear path to your next chapter.' : 'Un camino claro hacia su pr\u00f3ximo cap\u00edtulo.'} text={lang === 'en' ? 'We make it easy to learn, ask questions, and decide whether Fowler Academy is the right fit for your family.' : 'Facilitamos conocer, preguntar y decidir si Fowler Academy es adecuada para su familia.'} />
      </div>
      <div className="steps parallax-stagger">
        {['Contact the academy', 'Learn about the school', 'Discuss your student\u2019s needs', 'Complete the application', 'Enrollment confirmation'].map((step, i) => (
          <div key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></div>
        ))}
      </div>
      <ButtonLink href="#inquiry">{lang === 'en' ? 'Start your enrollment inquiry' : 'Inicie su consulta de inscripci\u00f3n'}</ButtonLink>
    </section>
  )
}
