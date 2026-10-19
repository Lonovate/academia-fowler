'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Lang, copy } from './constants'

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof copy['en']
}

const LangContext = createContext<LangContextValue>(null!)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
