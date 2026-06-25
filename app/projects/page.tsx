'use client'

import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'
import { PageWrapper, Header, BackButton, PageTitle, Grid } from './styles'

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <Header>
        <BackButton href="/" aria-label={t('projects.backAriaLabel')}>
          ←
        </BackButton>
        <LanguageSwitcher />
      </Header>
      <PageTitle>{t('projects.pageTitle')}</PageTitle>
      <Grid>
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Grid>
    </PageWrapper>
  )
}
