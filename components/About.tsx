'use client'

import { useLang } from '@/lib/LangContext'
import { photos } from '@/lib/constants'
import SectionIntro from './SectionIntro'
import ButtonLink from './ButtonLink'

export default function About() {
  const { lang, t } = useLang()

  return (
    <section className="about section" id="about">
      <div className="about-copy parallax-fade-left">
        <SectionIntro kicker="Welcome to Fowler" title={t.trustTitle} text={t.trustBody} />
        <div className="quote"><span>&ldquo;</span><p>Students grow best when they feel understood, challenged, and confident that they belong.</p></div>
        <ButtonLink href="#values" secondary>{lang === 'en' ? 'Our purpose & values' : 'Nuestro prop\u00f3sito y valores'}</ButtonLink>
      </div>
      <div className="about-media parallax-fade-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.student} alt="Student participating in a learning activity" />
        <div className="age-card"><strong>{'8\u201318'}</strong><span>{lang === 'en' ? 'Years old' : 'A\u00f1os de edad'}</span></div>
      </div>
    </section>
  )
}
