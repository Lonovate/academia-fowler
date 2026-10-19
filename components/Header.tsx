'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LangContext'
import Icon from './Icon'
import ButtonLink from './ButtonLink'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}
      <header className="header">
        <a href="#top" className="brand" aria-label="Fowler Academy home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.jpeg" alt="Academia Fowler" className="sm:hidden rounded-full" style={{ width: 42, height: 42 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-full.jpeg" alt="Academia Fowler" className="hidden sm:block" style={{ height: 45 }} />
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
    </>
  )
}
