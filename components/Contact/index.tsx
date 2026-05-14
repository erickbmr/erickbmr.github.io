'use client'

import Image from 'next/image'
import { ContactWrapper, IconLink } from './styles'

const STATIC_LINKS = [
  { href: 'https://github.com/erickbmr', src: '/assets/github.svg', alt: 'github' },
  { href: 'https://www.linkedin.com/in/erick-moreira-software/', src: '/assets/linkedin.svg', alt: 'linkedin' },
  { href: 'https://t.me/erickbmr', src: '/assets/telegram.svg', alt: 'telegram' }
]

export default function Contact() {
  return (
    <ContactWrapper>
      {STATIC_LINKS.map(({ href, src, alt }) => (
        <IconLink key={alt} href={href} target="_blank" rel="noreferrer">
          <Image src={src} width={40} height={40} alt={alt} />
        </IconLink>
      ))}
    </ContactWrapper>
  )
}
