'use client'

import { useRef, useCallback, useEffect } from 'react'
import { useLang } from '@/lib/LangContext'
import { photos } from '@/lib/constants'
import ButtonLink from './ButtonLink'

export default function Hero() {
  const { t } = useLang()
  const heroImgRef = useRef<HTMLImageElement>(null)

  const handleScroll = useCallback(() => {
    if (!heroImgRef.current) return
    heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
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
  )
}
