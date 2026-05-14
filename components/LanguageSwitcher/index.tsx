'use client'

import { useLanguageStore, type Lang } from '@/store/useLanguageStore'
import i18n from '@/i18n'
import { SwitcherWrapper, LangButton } from './styles'

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore()

  const handleChange = (lang: Lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <SwitcherWrapper>
      {LANGUAGES.map(({ code, label }) => (
        <LangButton
          key={code}
          $active={language === code}
          onClick={() => handleChange(code)}
          title={code === 'pt' ? 'Português' : 'English'}
        >
          {label}
        </LangButton>
      ))}
    </SwitcherWrapper>
  )
}
