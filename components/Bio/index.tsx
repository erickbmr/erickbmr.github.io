'use client'

import { useTranslation } from 'react-i18next'
import { BioWrapper, BioTitle, BioText, BioEducation } from './styles'

export default function Bio() {
  const { t } = useTranslation()

  return (
    <BioWrapper>
      <BioTitle>Erick Moreira</BioTitle>
      <BioText>{t('bio')}</BioText>
      <BioEducation>
        {t('education')}
        <br />
        {t('educationPostgrad')}
      </BioEducation>
    </BioWrapper>
  )
}
