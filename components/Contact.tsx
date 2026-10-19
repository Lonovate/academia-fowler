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
      <div className="map-embed parallax-scale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5!2d-66.1015847!3d18.3609433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0369d5cdb9dde3%3A0x3559f669df7438c7!2sAcademia%20Fowler!5e0!3m2!1sen!2spr!4v1697644800000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Academia Fowler - Google Maps"
        />
      </div>
    </section>
  )
}
