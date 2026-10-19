'use client'

import { useLang } from '@/lib/LangContext'
import { photos } from '@/lib/constants'
import SectionIntro from './SectionIntro'

export default function Gallery() {
  const { lang } = useLang()

  return (
    <section className="gallery section">
      <div className="parallax-fade">
        <SectionIntro kicker="Life at Fowler" title={lang === 'en' ? 'Learning, friendship, and moments that matter.' : 'Aprendizaje, amistad y momentos importantes.'} />
      </div>
      <div className="gallery-grid parallax-stagger">
        <figure className="large">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.group} alt="Students collaborating around a table" />
          <figcaption>Community &amp; collaboration</figcaption>
        </figure>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.graduate} alt="Student carrying books on campus" />
          <figcaption>Growing in confidence</figcaption>
        </figure>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.class} alt="Classroom learning in progress" />
          <figcaption>Purposeful learning</figcaption>
        </figure>
      </div>
    </section>
  )
}
