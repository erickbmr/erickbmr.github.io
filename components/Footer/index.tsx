'use client'

import { useTranslation } from 'react-i18next'
import { FooterWrapper } from './styles'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <FooterWrapper>
      <p>{t('footer')}</p>
    </FooterWrapper>
  )
}
