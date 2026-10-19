'use client'

import { useLang } from '@/lib/LangContext'
import { photos } from '@/lib/constants'
import Icon from './Icon'
import SectionIntro from './SectionIntro'
import ButtonLink from './ButtonLink'

export default function Support() {
  const { lang } = useLang()

  return (
    <section className="support section" id="student-life">
      <div className="support-copy parallax-fade-left">
        <SectionIntro light kicker="Inclusive education" title={lang === 'en' ? 'Every student deserves to feel understood, supported, and valued.' : 'Cada estudiante merece sentirse comprendido, apoyado y valorado.'} text={lang === 'en' ? 'We welcome conversations with families about each child\u2019s individual needs and the support the academy may be able to provide. Our team listens first, responds thoughtfully, and protects every family\u2019s privacy.' : 'Recibimos con gusto conversaciones con las familias sobre las necesidades individuales de cada estudiante y el apoyo que la academia puede ofrecer.'} />
        <ButtonLink href="#inquiry">{lang === 'en' ? 'Talk about your child\u2019s needs' : 'Hablemos de las necesidades de su hijo'}</ButtonLink>
      </div>
      <div className="support-image parallax-scale">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.science} alt="Educator and student exploring a science activity" />
        <div className="support-badge"><Icon name="heart" /><span><b>Listen first</b>Support with dignity</span></div>
      </div>
    </section>
  )
}
