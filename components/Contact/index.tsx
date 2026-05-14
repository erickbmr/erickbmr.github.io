'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { ContactWrapper, IconLink } from './styles'

const STATIC_LINKS = [
  { href: 'https://github.com/erickbmr', src: '/assets/github.svg', alt: 'github' },
  { href: 'https://www.linkedin.com/in/erick-moreira-software/', src: '/assets/linkedin.svg', alt: 'linkedin' },
  { href: 'https://t.me/erickbmr', src: '/assets/telegram.svg', alt: 'telegram' },
]

export default function Contact() {
  const { t } = useTranslation()
  const whatsappHref = `https://wa.me/5531984693967?text=${encodeURIComponent(t('whatsappMessage'))}`

  return (
    <ContactWrapper>
      {STATIC_LINKS.map(({ href, src, alt }) => (
        <IconLink key={alt} href={href} target="_blank" rel="noreferrer">
          <Image src={src} width={40} height={40} alt={alt} />
        </IconLink>
      ))}
      <IconLink href={whatsappHref} target="_blank" rel="noreferrer">
        <Image src="/assets/whatsapp.svg" width={40} height={40} alt="whatsapp" />
      </IconLink>
    </ContactWrapper>
  )
}
