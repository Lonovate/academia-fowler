'use client'

import { useEffect, useRef } from 'react'
import { LangProvider } from '@/lib/LangContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import About from '@/components/About'
import Values from '@/components/Values'
import Academics from '@/components/Academics'
import Support from '@/components/Support'
import Schedule from '@/components/Schedule'
import Admissions from '@/components/Admissions'
import History from '@/components/History'
import Gallery from '@/components/Gallery'
import InquiryForm from '@/components/InquiryForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function useParallaxObserver() {
  const observed = useRef(new Set<Element>())

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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

export default function Home() {
  useParallaxObserver()

  return (
    <LangProvider>
      <Header />
      <div className="app">
        <main id="top">
          <Hero />
          <TrustStrip />
          <About />
          <Values />
          <Academics />
          <Support />
          <Schedule />
          <Admissions />
          <History />
          <Gallery />
          <InquiryForm />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
