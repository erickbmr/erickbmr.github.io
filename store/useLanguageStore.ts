import { create } from 'zustand'

export type Lang = 'pt' | 'en'

interface LanguageStore {
  language: Lang
  setLanguage: (lang: Lang) => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}))
