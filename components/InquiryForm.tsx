'use client'

import { type FormEvent, useState } from 'react'
import { useLang } from '@/lib/LangContext'
import Icon from './Icon'

export default function InquiryForm() {
  const { lang, t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setFormError(lang === 'en' ? 'Please complete all required fields.' : 'Complete todos los campos obligatorios.')
      form.reportValidity()
      return
    }
    setFormError('')
    setSubmitted(true)
    form.reset()
  }

  return (
    <section className="inquiry" id="inquiry">
      <div className="inquiry-copy parallax-fade-left">
        <span className="eyebrow"><i />Begin a conversation</span>
        <h2>{lang === 'en' ? 'Let\u2019s talk about your child\u2019s future.' : 'Hablemos sobre el futuro de su hijo.'}</h2>
        <p>{lang === 'en' ? 'Have questions about Fowler Academy, our educational programs, or the enrollment process? Share your information and our team can follow up with you.' : '\u00bfTiene preguntas sobre Fowler Academy, nuestros programas o el proceso de inscripci\u00f3n? Comparta sus datos y nuestro equipo podr\u00e1 comunicarse con usted.'}</p>
        <div className="contact-mini"><Icon name="phone" /><span><small>Phone</small>Official number to be added</span></div>
        <div className="contact-mini"><Icon name="mail" /><span><small>Email</small>Official email to be added</span></div>
      </div>
      <form onSubmit={submitForm} noValidate className="parallax-fade-right">
        {submitted ? (
          <div className="success">
            <span><Icon name="check" /></span>
            <h3>Thank you for reaching out.</h3>
            <p>Your inquiry has been recorded in this prototype. A live form destination must be connected before launch.</p>
            <button type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button>
          </div>
        ) : (
          <>
            <div className="form-row">
              <label>First name *<input name="firstName" required autoComplete="given-name" /></label>
              <label>Last name *<input name="lastName" required autoComplete="family-name" /></label>
            </div>
            <div className="form-row">
              <label>Email address *<input name="email" type="email" required autoComplete="email" /></label>
              <label>Phone number *<input name="phone" type="tel" required autoComplete="tel" /></label>
            </div>
            <label>How can we help? *<textarea name="message" required rows={4} placeholder="Tell us what you would like to learn about\u2026" /></label>
            {formError && <p className="form-error">{formError}</p>}
            <button className="submit" type="submit">{t.request}<Icon name="arrow" /></button>
            <small className="privacy">By submitting, you agree to be contacted about your inquiry. Please do not include private medical information.</small>
          </>
        )}
      </form>
    </section>
  )
}
