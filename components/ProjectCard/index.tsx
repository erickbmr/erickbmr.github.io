'use client'

import Image from 'next/image'
import type { Project } from '@/types/project'
import { CardWrapper, CardImageWrapper, CardBody, CardTitle, CardDescription } from './styles'

export default function ProjectCard({ name, imageUrl, description }: Project) {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <Image src={imageUrl} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={name} />
      </CardImageWrapper>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
    </CardWrapper>
  )
}
