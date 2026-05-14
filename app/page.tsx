'use client'

import styled from 'styled-components'
import Contact from '@/components/Contact'
import Bio from '@/components/Bio'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Footer from '@/components/Footer'

const Wrapper = styled.div`
  max-width: 750px;
  height: 95vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <Wrapper>
        <Contact />
        <Bio />
      </Wrapper>
      <Footer />
    </>
  )
}
