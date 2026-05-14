'use client'

import styled from 'styled-components'
import Contact from '@/components/Contact'
import Bio from '@/components/Bio'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Footer from '@/components/Footer'
import Activities from '@/components/Activities'

const Wrapper = styled.div`
  max-width: 750px;
  height: 95vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`

export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <Activities />
      <Wrapper>
        <Contact />
        <Bio />
      </Wrapper>
      <Footer />
    </>
  )
}
