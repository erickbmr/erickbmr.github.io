'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useCookieConsentStore } from '@/store/useCookieConsentStore'
import { BannerWrapper, BannerText, ButtonGroup, AcceptButton, DeclineButton } from './styles'

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const { t } = useTranslation()
  const { status, accept, decline } = useCookieConsentStore()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  if (status === 'accepted') return <GoogleAnalytics gaId="G-192HPGRTW1" />
  if (status === 'declined') return null

  return (
    <BannerWrapper>
      <BannerText>{t('cookieConsent.message')}</BannerText>
      <ButtonGroup>
        <AcceptButton onClick={accept}>{t('cookieConsent.accept')}</AcceptButton>
        <DeclineButton onClick={decline}>{t('cookieConsent.decline')}</DeclineButton>
      </ButtonGroup>
    </BannerWrapper>
  )
}
