'use client'

import { useLang } from '@/lib/LangContext'
import Icon from './Icon'
import SectionIntro from './SectionIntro'

export default function Contact() {
  const { lang } = useLang()

  return (
    <section className="contact section" id="contact">
      <div className="parallax-fade-left">
        <SectionIntro kicker="Visit & contact" title={lang === 'en' ? 'We\u2019d be happy to welcome you.' : 'Estaremos encantados de recibirle.'} />
        <p>Official address and visitor information will appear here once confirmed by Fowler Academy.</p>
        <div className="contact-list">
          <span><Icon name="pin" />School address to be added</span>
          <span><Icon name="clock" />Office hours to be confirmed</span>
        </div>
      </div>
      <div className="map-placeholder parallax-scale">
        <Icon name="pin" />
        <span><b>Fowler Academy</b>Verified Google Map to be connected</span>
      </div>
    </section>
  )
}
