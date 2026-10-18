'use client'

import { type FormEvent, useEffect, useRef, useState, useCallback } from 'react'

type Lang = 'en' | 'es'

const photos = {
  hero: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=88',
  student: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?auto=format&fit=crop&w=900&q=84',
  class: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=84',
  graduate: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=84',
  science: 'https://images.unsplash.com/photo-1758685734470-a75109299497?auto=format&fit=crop&w=1000&q=84',
  group: 'https://images.unsplash.com/photo-1593442808882-775dfcd90699?auto=format&fit=crop&w=1000&q=84',
}

const copy = {
  en: {
    nav: ['About', 'Academics', 'Student Life', 'Admissions'],
    request: 'Request information',
    eyebrow: 'A learning community for ages 8\u201318',
    heroTitle: 'Known. Valued. Empowered to grow.',
    heroBody:
      'Discover an educational community where learning, character, respect, and individual growth work together to help every student build a brighter future.',
    explore: 'Explore our academy',
    trustTitle: 'A school experience built around every student.',
    trustBody:
      'At Fowler Academy, meaningful learning begins with belonging. We pair academic purpose with thoughtful support so students can discover what they do well\u2014and what they can become.',
    admissions: 'Admissions',
    contact: 'Contact',
  },
  es: {
    nav: ['Nosotros', 'Acad\u00e9micos', 'Vida estudiantil', 'Admisiones'],
    request: 'Solicitar informaci\u00f3n',
    eyebrow: 'Una comunidad educativa para edades de 8 a 18',
    heroTitle: 'Conocidos. Valorados. Capaces de crecer.',
    heroBody:
      'Descubra una comunidad donde el aprendizaje, el car\u00e1cter, el respeto y el crecimiento individual se unen para ayudar a cada estudiante a construir un futuro brillante.',
    explore: 'Conozca la academia',
    trustTitle: 'Una experiencia escolar centrada en cada estudiante.',
    trustBody:
      'En Fowler Academy, el aprendizaje significativo comienza con la pertenencia. Unimos prop\u00f3sito acad\u00e9mico y apoyo atento para que cada estudiante descubra su potencial.',
    admissions: 'Admisiones',
    contact: 'Contacto',
  },
}

function Icon({ name }: { name: 'arrow' | 'check' | 'heart' | 'book' | 'people' | 'clock' | 'pin' | 'phone' | 'mail' | 'menu' | 'close' }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z" />,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 13 13 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href}>{children}<Icon name="arrow" /></a>
}

function SectionIntro({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-intro ${light ? 'light' : ''}`}><span>{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function useParallaxObserver() {
  const observed = useRef(new Set<Element>())

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll(
      '.parallax-fade, .parallax-fade-left, .parallax-fade-right, .parallax-scale, .parallax-stagger'
    )
    elements.forEach((el) => {
      observer.observe(el)
      observed.current.add(el)
    })

    return () => observer.disconnect()
  }, [])
}

function useHeroParallax() {
  const heroImgRef = useRef<HTMLImageElement>(null)

  const handleScroll = useCallback(() => {
    if (!heroImgRef.current) return
    const scrollY = window.scrollY
    heroImgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return heroImgRef
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')
  const t = copy[lang]

  useParallaxObserver()
  const heroImgRef = useHeroParallax()

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

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
    <div className="app">
      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}
      <header className="header">
        <a href="#top" className="brand" aria-label="Fowler Academy home">
          <span className="brand-mark">F</span>
          <span>Fowler <b>Academy</b></span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={`#${['about', 'academics', 'student-life', 'admissions'][index]}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.contact}</a>
          <div className="mobile-actions">
            <button className="language" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>{lang === 'en' ? 'ES' : 'EN'}</button>
            <ButtonLink href="#inquiry">{t.request}</ButtonLink>
          </div>
        </nav>
        <div className="header-actions">
          <button className="language" onClick={() => setLang(lang === 'en' ? 'es' : 'en')} aria-label="Change language">{lang === 'en' ? 'ES' : 'EN'}</button>
          <a className="header-cta" href="#inquiry">{t.request}<Icon name="arrow" /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={heroImgRef} src={photos.hero} alt="Teacher guiding students during a classroom discussion" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow"><i />{t.eyebrow}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroBody}</p>
            <div className="button-row">
              <ButtonLink href="#inquiry">{t.request}</ButtonLink>
              <ButtonLink href="#about" secondary>{t.explore}</ButtonLink>
            </div>
          </div>
          <div className="hero-note"><span>01</span><p><b>Learning with purpose.</b><br />Growing with confidence.</p></div>
        </section>

        {/* ── Trust strip ── */}
        <section className="trust-strip parallax-stagger" aria-label="Fowler Academy commitments">
          <div><Icon name="heart" /><span><b>Every student known</b>Thoughtful, individual support</span></div>
          <div><Icon name="book" /><span><b>Purposeful learning</b>Academic and character growth</span></div>
          <div><Icon name="people" /><span><b>Connected community</b>Families, students, educators</span></div>
        </section>

        {/* ── About ── */}
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

        {/* ── Values ── */}
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

        {/* ── Academics ── */}
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

        {/* ── Support / Inclusive ── */}
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

        {/* ── Schedule ── */}
        <section className="schedule section">
          <div className="parallax-fade">
            <SectionIntro kicker="The school day" title={lang === 'en' ? 'A schedule that works for family life.' : 'Un horario que funciona para la vida familiar.'} text={lang === 'en' ? 'Explore our regular day and extended-hours options. Final times and availability will be confirmed by the academy.' : 'Conozca nuestro d\u00eda regular y las opciones de horario extendido. La academia confirmar\u00e1 los horarios finales.'} />
          </div>
          <div className="schedule-grid parallax-stagger">
            <article>
              <span className="tag">Core program</span>
              <h3>Regular school day</h3>
              <p>A balanced day of focused study, active learning, and community connection.</p>
              <div className="time"><Icon name="clock" /><span><small>Opening time</small>To be confirmed</span></div>
              <a href="#inquiry">Ask about the schedule <Icon name="arrow" /></a>
            </article>
            <article className="featured">
              <span className="tag">Additional flexibility</span>
              <h3>Extended-hours program</h3>
              <p>Additional time for families who need a longer day, subject to confirmed availability.</p>
              <div className="time"><Icon name="clock" /><span><small>Hours</small>To be confirmed</span></div>
              <a href="#inquiry">Request program details <Icon name="arrow" /></a>
            </article>
          </div>
        </section>

        {/* ── Admissions ── */}
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

        {/* ── History ── */}
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

        {/* ── Gallery ── */}
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

        {/* ── Inquiry Form ── */}
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

        {/* ── Contact ── */}
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
      </main>

      <footer>
        <div className="footer-top">
          <a href="#top" className="brand light-brand"><span className="brand-mark">F</span><span>Fowler <b>Academy</b></span></a>
          <p>Where every student is known,<br />valued, and empowered to grow.</p>
          <a className="back-top" href="#top">Back to top &#8593;</a>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Fowler Academy</span>
          <span>Privacy &middot; Accessibility</span>
          <span>English / Espa\u00f1ol</span>
        </div>
      </footer>
    </div>
  )
}
